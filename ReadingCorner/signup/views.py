from django.shortcuts import render
from django.http import JsonResponse
from django.db import connection
from rest_framework.decorators import api_view
from rest_framework import status
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from rest_framework.views import APIView
from django.shortcuts import redirect
from django.db import connection


@api_view(['GET', 'POST'])
def user_SignUp(request):
    if request.method == 'GET':
        return render(request, 'signup.html')

    elif request.method == 'POST':
        # Extract user input from the request
        FirstName = request.data.get('FirstName')
        LastName = request.data.get('LastName')
        Email = request.data.get('Email')
        Password = request.data.get('Password')
        hashed_password = make_password(Password)
        # PhoneNumber = request.data.get('PhoneNumber')


        query = '''
            INSERT INTO "Users" ("FirstName", "LastName", "Email", "Password")
            VALUES (%s, %s, %s, %s)
        '''
        values = (FirstName, LastName, Email, hashed_password)

        try:
            with connection.cursor() as cursor:
                cursor.execute(query, values)
            # return JsonResponse({"message": "User created successfully!"}, status=status.HTTP_201_CREATED)
            return redirect('login')

        except Exception as e:
            # Return an error message if something goes wrong
            return JsonResponse({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
