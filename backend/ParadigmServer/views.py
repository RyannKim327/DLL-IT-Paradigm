from django.shortcuts import render, HttpResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .views_serializer_handler import *

# Create your views here.

@api_view(["GET", "POST"])
def event(request):
	method = request.method
	print(method)
	if method == "POST":
		return HttpResponse("<h1>Hi</h1>")
	else:
		return HttpResponse("<h1>Error pre</h1>")

def user(request):
	pass