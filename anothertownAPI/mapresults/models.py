from django.db import models

# Create your models here.
class MapResult(models.Model):
    zipcode = models.CharField(max_length=200,default='')
    latitude = models.CharField(max_length=200,default='0')
    longitude = models.CharField(max_length=200,default='0')
    city = models.CharField(max_length=200,default='')
    state = models.CharField(max_length=200,default='')
    county = models.CharField(max_length=200,default='')
    description = models.CharField(max_length=2000,blank=False, default='')
    created_at = models.DateTimeField(auto_now_add=True)