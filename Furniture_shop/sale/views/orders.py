from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from sale.Serializer.orders import OrdersSerializer
# Create your views here.
from sale.models import  Customer, Orders
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

@api_view(['POST'])
def taskUpdate(request, pk):
	item=Orders.objects.get(id=pk)
	serializer =OrdersSerializer(instance=item, data=request.data)

	if serializer.is_valid():
		serializer.save()




@api_view(['DELETE'])
def taskDelete(request, pk):
	item = Orders.objects.get(id=pk)
	item.delete()

	return Response('Item succsesfully delete!')


