from rest_framework import viewsets
from .serializers import *

class EventViewSerializer(viewsets.ModelViewSet):
	queryset = Event.objects.all()
	serializer_class = EventSerializer

	def get(self, key):
		return Event.objects.get(key)

class UserViewSerializer(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserSerializer

	def get(self, data):
		return User.objects.filter(username=data)
