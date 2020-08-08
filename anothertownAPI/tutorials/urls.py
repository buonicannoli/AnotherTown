from django.urls import path
from . import views
from django.conf.urls import url

from .views import TutorialRudView

urlpatterns = [
    path('api/tutorial/', views.TutorialListCreate.as_view() ),
    url(r'^(?P<pk>\d+)/$', TutorialRudView.as_view())
]