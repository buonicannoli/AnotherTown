from .models import MapResult
from .serializers import MapResultsSerializer
from rest_framework import generics
from django.http import HttpResponse
from django.shortcuts import HttpResponse

class MapResultsListCreate(generics.ListCreateAPIView):
    queryset = MapResult.objects.all()
    serializer_class = MapResultsSerializer

# class IncredibleInputSerializer(serializers.Serializer):
#     model_input = serializers.CharField()

# class IncredibleView(views.APIView):

#     def get(self, request):
#         # Validate the incoming input (provided through query parameters)
#         serializer = IncredibleInputSerializer(data=request.query_params)
#         serializer.is_valid(raise_exception=True)

#         # Get the model input
#         data = serializer.validated_data
#         model_input = data["model_input"]

#         # Perform the complex calculations
#         complex_result = model_input + "xyz"

#         # Return it in your custom format
#         return Response({
#             "complex_result": complex_result,
#         })
