from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Book, Users
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password



class SignUpSerializer(serializers.ModelSerializer):

    class Meta:
        model = Users  # Ensure this points to the default User model
        fields = ['FirstName', 'LastName', 'Email', 'Password', 'Password2', 'PhoneNumber']
