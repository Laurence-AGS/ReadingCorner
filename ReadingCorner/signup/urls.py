from django.urls import path
from .views import user_SignUp

urlpatterns = [
    path('', user_SignUp, name='signup'),
]
