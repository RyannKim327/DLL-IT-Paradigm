from rest_framework import serializers
from .models import *


class EventSerializer(serializers.ModelSerializer):
	class Meta:
		model = Event
		fields = [
			"event_name",
			"event_description",
			"event_date"
		]
