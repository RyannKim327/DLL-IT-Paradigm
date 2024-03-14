import json
from django.shortcuts import render, HttpResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import status

from .views_serializer_handler import *
from .models import *

class solar:
	def __init__(self, text: str, encrypt: bool = True):
		self.__character = ""
		if text != "":
			if encrypt:
				for i in range(len(text)):
					a = ord(text[i]) + ((i % 26) + 1)
					self.__character += chr(a)
			else:
				for i in range(len(text)):
					a = ord(text[i]) - ((i % 26) + 1)
					self.__character += chr(a)

	def __str__(self):
		return self.__character

# Create your views here.

@api_view(["POST"])
def event(request):
	method = request.method
	if method == "POST":
		data = request.data
		month = data['month']
		day = data['day']
		year = data['year']
		date = f"{year}-{month}-{day}"
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
		newData = {
			"username": ""
		}
		if len(users) > 0:
			newData = users.values('username').get()
			print(newData['username'])
		return Response(status=200, data={
			'existed': len(users) > 0,
			'username': str(solar(newData['username']))
		})
	else:
		return Response(status=200, data="get")

def user(request):
	pass

@api_view(['POST'])
def fetchEvent(request):
	method = request.method
	if method == 'POST':
		data = request.data
		month = data['month']
		day = data['day']
		year = data['year']
		result = EventViewSerializer().get(f"{year}-{month}-{day}")
		eventName = "No Event found"
		eventDescription = "No Event Here"
		if len(result) > 0:
			print("E di meron")
			print(result)
		return Response(status=200, data={
			"eventName": eventName,
			"eventDescription": eventDescription
		})






