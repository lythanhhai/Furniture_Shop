from django.db import models

from Furniture_shop.address.models import Address

# Create your models here.
class Customer(models.Model):
    phone_number=models.CharField(max_length=30,primary_key=True)
    user_name= models.CharField(max_length=100)
    pass_word= models.CharField(max_length=100)
    id_address=models.ForeignKey(Address,on_delete=models.CASCADE)