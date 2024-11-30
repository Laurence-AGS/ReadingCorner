from django.db import connection
# from django.urls import reverese
from django.http import JsonResponse
from django.contrib import messages
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth.decorators import login_required
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
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
                # Password matched, simulate login by setting the user session or any logic needed
                # Redirect to the profile page after successful login
                return render(request,'profileUser.html') # Ensure the 'profileUser' URL is correctly defined in your urls.py
            else:
                return JsonResponse({"error": "Invalid email or password."}, status=status.HTTP_401_UNAUTHORIZED)

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)






# from django.shortcuts import render, redirect
# from django.contrib.auth import authenticate, login
# from django.contrib import messages
# from rest_framework.decorators import api_view
# from django.http import JsonResponse

# @api_view(['GET', 'POST'])
# def user_Login(request):
#     if request.method == 'GET':
#         return render(request, 'login.html')

#     elif request.method == 'POST':
#         Email = request.data.get('Email')
#         Password = request.data.get('Password')

#         # Use authenticate() to verify user credentials
#         user = authenticate(request, username=Email, password=Password)

#         if user is not None:
#             # Log the user in
#             login(request, user)

#             # Redirect to the profile page after successful login
#             return redirect('profileUser')  # Adjust 'profileUser' to the name of your profile page URL
#         else:
#             # Return an error if authentication fails
#             messages.error(request, 'Invalid email or password.')
#             return render(request, 'login.html')
