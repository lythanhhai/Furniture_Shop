from rest_framework import serializers
from sale.models import Orders

class OrdersSerializer(serializers.ModelSerializer):
	class Meta:
		model = Orders
		fields ='__all__'