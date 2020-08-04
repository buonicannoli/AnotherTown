from rest_framework import serializers
from .models import MapResult

class MapResultsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MapResult
        fields = ('id', 'zipcode', 'latitude','longitude','city','state','county','description')