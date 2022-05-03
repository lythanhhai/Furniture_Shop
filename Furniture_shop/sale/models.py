from django.db import models

# Create your models here.
class Address(models.Model):
    id= models.IntegerField(default=0, primary_key=True)
    address= models.TextField()
class Customer(models.Model):
    phone_number=models.CharField(max_length=30,primary_key=True)
    user_name= models.CharField(max_length=100)
    pass_word= models.CharField(max_length=100)
    id_address=models.ForeignKey(Address,on_delete=models.CASCADE)
class History(models.Model):
    id=models.IntegerField(default=0,primary_key=True)
    id_person=models.ForeignKey(Customer, on_delete=models.CASCADE)
    total_price= models.FloatField()
    product=models.TextField()
    
class Products(models.Model):
    id=models.IntegerField(default=0,primary_key=True)
    name_product=models.CharField(max_length=100)
    price=models.FloatField()
    desc=models.TextField()
    url= models.ImageField()
class Orders(models.Model):
    id= models.IntegerField(primary_key=True)
    id_person=models.ForeignKey(Customer, on_delete=models.CASCADE)
    id_product=models.ForeignKey(Products,on_delete=models.CASCADE)
    number_product=models.IntegerField(default=0)
    total_price= models.FloatField()
    status=models.BooleanField()
