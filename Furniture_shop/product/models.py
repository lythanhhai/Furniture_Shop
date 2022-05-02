from django.db import models

# Create your models here.
class Products(models.Model):
    id=models.IntegerField(default=0,primary_key=True)
    name_product=models.CharField(max_length=100)
    price=models.FloatField()
    desc=models.TextField()
    url= models.ImageField()