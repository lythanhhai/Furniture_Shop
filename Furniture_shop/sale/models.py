from django.db import models


from Furniture_shop.customer.models import Customer

class History(models.Model):
    id=models.IntegerField(default=0,primary_key=True)
    id_person=models.ForeignKey(Customer, on_delete=models.CASCADE)
    total_price= models.FloatField()
    product=models.TextField()
# Create your models here.
