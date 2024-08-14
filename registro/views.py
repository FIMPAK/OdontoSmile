from django.shortcuts import render
from django.views import generic

from .models import Consulta

# Create your views here.
def index(request):
    return render(request, 'index.html')

def CalendarioView(request):
    return render(request, 'calendario.html')

def LoginView(request):
    return render(request, 'login.html')