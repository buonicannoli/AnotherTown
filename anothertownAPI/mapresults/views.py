from .models import MapResult
from .serializers import MapResultsSerializer
from rest_framework import generics
from django.http import HttpResponse
from django.shortcuts import HttpResponse

class MapResultsListCreate(generics.ListCreateAPIView):
    queryset = MapResult.objects.all()
    serializer_class = MapResultsSerializer

