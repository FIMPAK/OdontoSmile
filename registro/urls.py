from django.urls import path
from registro import views


urlpatterns = [
    path('', views.index, name='index'),
    path('', views.index, name='calendario'),
    path('calendario/', views.CalendarioView, name='calendario'),
    path('', views.index, name='login'),
    path('login/', views.LoginView, name='login'),
]
