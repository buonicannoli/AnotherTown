from django.urls import path
from . import views

urlpatterns = [
    path('api/tutorial/', views.TutorialListCreate.as_view() ),
]