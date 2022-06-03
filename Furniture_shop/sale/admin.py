from ast import Or
from django.contrib import admin

# Register your models here.
from .models import  Customer, History, Products, Orders

# admin.site.register(Address)
admin.site.register(Customer)
admin.site.register(History)
admin.site.register(Products)
admin.site.register(Orders)