from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from django.shortcuts import render, reverse
from django.contrib.auth.decorators import login_required
from django.db import connection

# user = get_user_model()



@api_view(['GET'])
@permission_classes([IsAuthenticated])
@login_required
def profileUser(request):
    if request.method == 'GET':
        user_id = request.user.id  # Get the currently logged-in user's ID
        
        # Raw SQL Query
        query = '''
            SELECT first_name, last_name, email
            FROM auth_user
            WHERE id = %s
        '''
        
        # Execute the query
        with connection.cursor() as cursor:
            cursor.execute(query, [user_id])
            result = cursor.fetchone()
        
        if result:
            data = {
                "FirstName": result[0],  # first_name
                "LastName": result[1],   # last_name
                "Email": result[2],      # email
            }
        else:
            data = {
                "error": "User not found."
            }

        return render(request, 'profileUser.html', data)






# from django.contrib.auth.decorators import login_required

# @login_required
# def UserProfile(request):
#     user = request.user
#     return JsonResponse({
#         "email": user.Email,
#         "first_name": user.FirstName,
#         "last_name": user.LastName,
#     })
