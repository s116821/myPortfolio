# myPortfolioApi/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('demo/', views.DemoView.as_view()),
]