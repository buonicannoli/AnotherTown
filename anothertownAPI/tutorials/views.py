from .models import Tutorial
from .serializers import TutorialSerializer
from rest_framework import generics

class TutorialListCreate(generics.ListCreateAPIView):
    queryset = Tutorial.objects.all()
    serializer_class = TutorialSerializer