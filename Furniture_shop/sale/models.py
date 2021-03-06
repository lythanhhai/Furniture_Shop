from pyexpat import model
from django.db import models

def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

# # Create your models here.
# class Address(models.Model):
#     id= models.IntegerField(default=1, primary_key=True)
#     address= models.TextField(null= True, blank= True)

class Customer(models.Model):
    phone_number= models.CharField(max_length= 30, primary_key= True)
    user_name= models.CharField(max_length= 100)
    pass_word= models.CharField(max_length= 100)
    address= models.TextField(null=True)
    key_per=models.IntegerField(default= 0)

class History(models.Model):
    id=models.IntegerField(default= 1, primary_key= True)
    id_person=models.ForeignKey(Customer, on_delete=models.CASCADE)
    total_price= models.FloatField()
    product= models.TextField()
    
class Products(models.Model):
    id=models.AutoField(primary_key=True)
    name_product=models.CharField(max_length=100)
    price=models.FloatField()
    desc=models.TextField()
    url= models.ImageField(upload_to= upload_to, blank=True, null=True)

class Orders(models.Model):
    id= models.AutoField(primary_key=True)
    id_person=models.ForeignKey(Customer, on_delete=models.CASCADE)
    id_product=models.ForeignKey(Products, on_delete=models.CASCADE)
    number_product=models.IntegerField(default= 1)
    total_price= models.FloatField()
    status=models.BooleanField(default=0)
    datetime= models.DateTimeField(blank= True, null= True)
