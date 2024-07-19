# myPortfolioApi/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('rng/', views.RngView.as_view()),
    path('double/', views.DoubleView.as_view()),
]