from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.url')),
    path('', include('products.url'))
]
