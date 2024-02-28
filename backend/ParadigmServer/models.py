from django.db import models, forms

# Create your models here.
class User(models.Model):
	username = models.CharField(max_length=25, null=False)
	email = models.EmailField(max_length=100, null=False)
	password = models.CharField(max_length=100)

	def __str__(self):
		return f"{self.username}"

class Event(models.Model):
	event_name = models.CharField(max_length=100, null=False)
	event_description = models.CharField(max_length=500, null=False)
	event_date = models.DateField()

	def __str__(self):
		return f"{self.event_name}"
