from django.urls import path
from .views import user_Login

urlpatterns = [
    path('', user_Login, name='login'),
]
