from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import AddressSerializer
# Create your views here.
from .models import Address
@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/Address-list/',
		'Detail View':'/Address-detail/<int:pk>/',
		'Create':'/Address-create/',
		'Update':'/Address-update/<int:pk>/',
		'Delete':'/Address-delete/<int:pk>/',
		}

	return Response(api_urls)

@api_view(['GET'])
def taskList(request):
	address = Address.objects.all().order_by('-id')
	serializer = AddressSerializer(address,many=True)
	return Response(serializer.data)

@api_view(['GET'])
def taskDetail(request, pk):
	address = Address.objects.get(id=pk)
	serializer =AddressSerializer(address,many=False)
	return Response(serializer.data)


@api_view(['POST'])
def taskCreate(request):
	serializer = AddressSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['POST'])
def taskUpdate(request, pk):
	address= Address.objects.get(id=pk)
	serializer = AddressSerializer(instance=address, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@api_view(['DELETE'])
def taskDelete(request, pk):
	address = Address.objects.get(id=pk)
	address.delete()

	return Response('Item succsesfully delete!')

