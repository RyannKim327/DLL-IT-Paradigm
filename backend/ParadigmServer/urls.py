from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

ITevents = DefaultRouter()
ITevents.register(r'events', EventViewSerializer)

urlpatterns = [
	path('paradigm/', include(ITevents.urls)),
	path("api-event/", event),
]