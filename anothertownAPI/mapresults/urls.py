from django.urls import path
from . import views
from django.conf.urls import url

urlpatterns = [
    path('api/mapresults/', views.MapResultsListCreate.as_view() ),
    # url(r'^$', views.index, name='index')
]