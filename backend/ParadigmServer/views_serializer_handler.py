from rest_framework import viewsets
from .serializers import *

class EventViewSerializer(viewsets.ModelViewSet):
	queryset = Event.objects.all().order_by('event_date')
	serializer_class = EventSerializer