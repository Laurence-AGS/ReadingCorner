from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import BookSerializer
from django.db import connection

class BookListView(GenericAPIView):
    serializer_class = BookSerializer

    def get(self, request, *args, **kwargs):
        search_query = request.GET.get('querysearch', '').strip()  # Get the search query (can be empty)

        # Base SQL query
        query = """
            SELECT "Author", "Language", "ISBN", "description", "BookName",
            "BookId", "category", "Publisher", "PublishingNumber", "PublishingYear"
            FROM "Books"
            WHERE 1 = 1
        """
        params = []

        # Add search query condition if provided
        if search_query:
            query += ' AND "BookName" ILIKE %s'
            params.append(f'%{search_query}%')

        # Execute the query
        try:
            with connection.cursor() as cursor:
                cursor.execute(query, params)
                results = cursor.fetchall()

            # Prepare data to be serialized
            books_data = [
                {
                    'Author': row[0],
                    'Language': row[1],
                    'ISBN': row[2],
                    'description': row[3],
                    'BookName': row[4],
                    'BookId': row[5],
                    'category': row[6],
                    'Publisher': row[7],
                    'PublishingNumber': row[8],
                    'PublishingYear': row[9],
                } for row in results
            ]

            # Serialize the data using the BookSerializer
            serializer = self.get_serializer(books_data, many=True)

            # Return the serialized data wrapped in a Response object
            return Response(serializer.data, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
