from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.db import connection
from rest_framework.decorators import api_view
from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.views import APIView
# from .models import Users  # Adjust import based on your app's structure

@api_view(['GET', 'POST'])
def user_Login(request):
    if request.method == 'GET':
        return render(request, 'login.html')

    elif request.method == 'POST':
        Email = request.data.get('Email')
        Password = request.data.get('Password')

        query = '''SELECT "Password" FROM "Users" WHERE "Email" = %s'''
        values = (Email,)

        try:
            with connection.cursor() as cursor:
                cursor.execute(query, values)
                result = cursor.fetchone()

            if result is None:
                return JsonResponse({"error": "Invalid email or password."}, status=status.HTTP_401_UNAUTHORIZED)

            stored_password = result[0]
            if check_password(Password, stored_password):
                return JsonResponse({"message": "Login successful!"}, status=status.HTTP_200_OK)
            else:
                return JsonResponse({"error": "Invalid email or password."}, status=status.HTTP_401_UNAUTHORIZED)

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)