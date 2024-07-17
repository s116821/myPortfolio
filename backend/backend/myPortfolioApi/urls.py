# main/urls.py
from django.urls import path
from views import DemoView

urlpatterns = [
    path('demo/', DemoView.as_view()),
]