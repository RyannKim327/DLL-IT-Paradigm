from django.shortcuts import render, HttpResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .views_serializer_handler import *

# Create your views here.

@api_view(["POST"])
def event(request):
	method = request.method
	if method == "POST":
		data = request.data

		event_serializer = EventSerializer(data=data)
		if event_serializer.is_valid():
			event_serializer.save()
			return HttpResponse(f"<h3>Today: {data['event_name']}</h3>")
		else:
			return HttpResponse("Invalid inputs")

def user(request):
	pass