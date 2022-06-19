from django.shortcuts import render
from pyparsing import Or
from rest_framework.decorators import api_view
from rest_framework.response import Response
from sale.Serializer.orders import OrdersSerializer
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# from django.db.models.utils import li
# Create your views here.
from sale.models import  Customer, Orders, Products
@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List Orders':'/Orders-list/',
		'Detail View Orders':'/Orders-detail/<int:pk>/',
		'Create Orders':'/Orders-create/',
		'Update Orders':'/Orders-update/<int:pk>/',
		'Delete Orders':'/Orders-delete/<int:pk>/',
		}

	return Response(api_urls)

@api_view(["GET"])
def taskViewOrders(request,phone):
	person= Customer.objects.filter(phone_number=phone).values()
	# address= Address.objects.filter(id=person.phone_number)
	address=person.address


@api_view(['GET'])
def taskList(request):
	item = Orders.objects.all().order_by('-id')
	serializer = OrdersSerializer(item, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def taskListModalCart(request):
	# list_item = list(Orders.objects.all().order_by('-id'))
	list_item = list(Orders.objects.all())
	product_list = list(Products.objects.all())
	array = []
	count = 0
	for item_order in list_item:
		for item_product in product_list:
			if item_order.id_product_id == item_product.id:
				object = {
					'price': item_product.price,
					'id_product': item_order.id_product_id ,
					'id': item_order.id,
					'id_person': item_order.id_person_id,
					'status': item_order.status,
					'total_price': item_order.total_price,
					'number_product': item_order.number_product,
					'url': str(item_product.url),
					'name_product': item_product.name_product,
					'desc': item_product.desc,
				}
				count += 1
				array.append(object)
	# serializer = OrdersSerializer(array, many=True)
	return JsonResponse(array, safe= False)


@api_view(['GET'])
def taskDetail(request, pk):
	item = Orders.objects.get(id=pk)
	serializer =OrdersSerializer(item,many=False)
	return Response(serializer.data)


@api_view(['POST'])
def taskCreate(request):
	serializer = OrdersSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

# @api_view(['POST'])
# @csrf_exempt
# def taskCreate(request):
# 	order_data = JSONParser().parse(request)
# 	serializer = OrdersSerializer(data= order_data)
# 	if serializer.is_valid():
# 		serializer.save()
# 		return JsonResponse("Add is successful", safe= False)
# 	else:
# 		return JsonResponse("Add is unsuccessful", safe= False)

@api_view(['POST'])
def taskUpdate(request, pk):
	item = Orders.objects.get(id=pk)
	serializer = OrdersSerializer(instance=item, data= request.data)

	if serializer.is_valid():
		serializer.save()
		return JsonResponse("Update is successful", safe= False)
	else :
		return JsonResponse("Update is unsuccessful", safe= False)

# @api_view(['POST'])
# @csrf_exempt
# def taskUpdate(request, pk):
# 	item = Orders.objects.get(id=pk)
# 	order_data = JSONParser().parse(request)
# 	serializer = OrdersSerializer(instance= item, data= order_data)

# 	if serializer.is_valid():
# 		serializer.save()
# 		return JsonResponse("Update is successful", safe= False)
# 	else :
# 		return JsonResponse("Update is unsuccessful", safe= False)

@api_view(['DELETE'])
def taskDelete(request, pk):
	item = Orders.objects.get(id=pk)
	item.delete()

	return Response('Item succsesfully delete!')


