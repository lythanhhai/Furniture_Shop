from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CustomerSerializer
# Create your views here.
from .models import History
@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/Customer-list/',
		'Detail View':'/Customer-detail/<str:pk>/',
		'Create':'/Customer-create/',
		'Update':'/Customer-update/<str:pk>/',
		'Delete':'/Customer-delete/<str:pk>/',
		}

	return Response(api_urls)

@api_view(['GET'])
def taskList(request):
	Customer = History.objects.all().order_by('-id')
	serializer = CustomerSerializer(Customer,many=True)
	return Response(serializer.data)

@api_view(['GET'])
def taskDetail(request, pk):
	Customer= History.objects.get(id=pk)
	serializer =CustomerSerializer(Customer,many=False)
	return Response(serializer.data)


@api_view(['POST'])
def taskCreate(request):
	serializer = CustomerSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['POST'])
def taskUpdate(request, pk):
	Customer= History.objects.get(id=pk)
	serializer = CustomerSerializer(instance=Customer, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@api_view(['DELETE'])
def taskDelete(request, pk):
	Customer = History.objects.get(id=pk)
	Customer.delete()

	return Response('Item succsesfully delete!')

