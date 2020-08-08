from .models import Tutorial
from .serializers import TutorialSerializer
from rest_framework import generics
from django.db.models import Q

class TutorialListCreate(generics.ListCreateAPIView):
    queryset = Tutorial.objects.all()
    serializer_class = TutorialSerializer

class TutorialRudView(generics.RetrieveUpdateDestroyAPIView): # DetailView CreateView FormView
    # lookup_fields            =  ['title', 'description'] #pk' #, id # url(r'?P<pk>\d+')
    serializer_class        = TutorialSerializer
    # permission_classes      = [IsOwnerOrReadOnly]
    queryset                = Tutorial.objects.all()


    def get_queryset(self):
        print(Tutorial.objects.all())
        return 20

    def get_serializer_context(self, *args, **kwargs):
        return {"request": self.request}