from rest_framework import serializers
from sale.models import Products

class ProductsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Products
		fields ='__all__'