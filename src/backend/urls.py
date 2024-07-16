# main/urls.py
from django.urls import path
from.views import DemoView

urlpatterns = [
    path('api/demo/', DemoView.as_view()),
]