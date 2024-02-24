from django.db import models

# Create your models here.
class Event(models.Model):
	event_name = models.CharField(max_length=100, null=False)
	event_description = models.CharField(max_length=500, null=False)
	event_date = models.DateField()

	def __str__(self):
		return f"{self.event_name}"