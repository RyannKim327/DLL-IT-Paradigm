from django.shortcuts import render, HttpResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import status

from .views_serializer_handler import *
from .models import *

# Create your views here.

@api_view(["POST"])
def event(request):
	method = request.method
	if method == "POST":
		data = request.data

		event_serializer = EventSerializer(data=data)
		if event_serializer.is_valid():
			event_serializer.save()
			return Response(data=data, status=200)
		else:
			return Response(data=data, status=400)

@api_view(['POST', 'GET'])
def checkCredentials(request):
	method = request.method
	print(method)
	if method == "POST":
		data = request.data
		users = UserViewSerializer().get(data['username'])
		return Response(status=200, data={
			'existed': len(users) > 0,
			'username': data['username']
		})
	else:
		return Response(status=200, data="get")

def user(request):
	pass


