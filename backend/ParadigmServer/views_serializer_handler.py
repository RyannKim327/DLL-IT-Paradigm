from datetime import datetime
from rest_framework import viewsets
from .serializers import *

class EventViewSerializer(viewsets.ModelViewSet):
	queryset = Event.objects.all()
	serializer_class = EventSerializer

	def get(self, key):
		newDate = datetime.strptime(key, '%Y-%m-%d').date()
		return Event.objects.filter(event_date=key)

class UserViewSerializer(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserSerializer

	def get(self, data):
		return User.objects.filter(username=data)
