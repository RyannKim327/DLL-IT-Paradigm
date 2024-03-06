from rest_framework import viewsets
from .serializers import *

class EventViewSerializer(viewsets.ModelViewSet):
	queryset = Event.objects.all()
	serializer_class = EventSerializer

class UserViewSerializer(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserSerializer
