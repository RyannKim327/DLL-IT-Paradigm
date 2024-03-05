from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

ITUsers = DefaultRouter()
ITUsers.register(r'users', UserViewSerializer)

ITevents = DefaultRouter()
ITevents.register(r'events', EventViewSerializer)

urlpatterns = [
	path('paradigm/users/', include(ITUsers.urls)),
	path('paradigm/event/', include(ITevents.urls)),

	path("api-event/", event),
	path("api-check-user/", checkCredentials),
]
