from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from sale.Serializer.customer import CustomerSerializer
# Create your views here.
from sale.models import Customer
@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List Customer':'/Customer-list/',
		'Detail View Customer':'/Customer-detail/<int:pk>/',
		'Create Customer':'/Customer-create/',
		'Update Customer':'/Customer-update/<int:pk>/',
		'Delete Customer':'/Customer-delete/<int:pk>/',
		'Get Id_Address':'/customer-get/<str:pk/',
		}

	return Response(api_urls)



api_view(['GET'])
def taskList(request):
	item = Customer.objects.all().order_by('-phone_number')
	serializer = CustomerSerializer(item,many=True)
	return Response(serializer.data)


@api_view(['GET'])
def taskDetail(request, pk):
	item = Customer.objects.get(phone_number=pk)
	serializer =CustomerSerializer(item,many=False)
	return Response(serializer.data)


@api_view(['POST'])
def taskCreate(request):
	serializer = CustomerSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['POST'])
def taskUpdate(request, pk):
	item=Customer.objects.get(id=pk)
	serializer =CustomerSerializer(instance=item, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@api_view(['DELETE'])
def taskDelete(request, pk):
	item = Customer.objects.get(phone_number=pk)
	item.delete()

	return Response('Item succsesfully delete!')

api_view(['GET'])
def taskGetIdAddress(request,pk):
	item = Customer.objects.get(phone_number=pk)
	id_add= item.id_address
	return Response(id_add)

