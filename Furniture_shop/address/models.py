from django.db import models

# Create your models here.
class Address(models.Model):
    id= models.IntegerField(default=0, primary_key=True)
    address= models.TextField()