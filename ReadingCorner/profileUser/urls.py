from django.urls import path
from . import views
from .views import profileUser

urlpatterns = [
    path('', profileUser),
]
