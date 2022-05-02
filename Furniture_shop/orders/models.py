from django.db import models

from Furniture_shop.customer.models import Customer
from Furniture_shop.product.models import Products

# Create your models here.
class Orders(models.Model):
    id= models.IntegerField(primary_key=True)
    id_person=models.ForeignKey(Customer, on_delete=models.CASCADE)
    id_product=models.ForeignKey(Products,on_delete=models.CASCADE)
    number_product=models.IntegerField(default=0)
    total_price= models.FloatField()
    status=models.BooleanField()