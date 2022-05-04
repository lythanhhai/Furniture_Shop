from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from sale.Serializer.product import ProductsSerializer
# Create your views here.
from sale.models import Products
@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List Products':'/Products-list/',
		'Detail View Products':'Products-detail/<int:pk>/',
		'Create Products':'/Products-create/',
		'Update Products':'/Products-update/<int:pk>/',
		'Delete Products':'/Products-delete/<int:pk>/',
		}

	return Response(api_urls)

@api_view(['GET'])
def taskList(request):
	item = Products.objects.all().order_by('-id')
	serializer = Products(item,many=True)
	return Response(serializer.data)

@api_view(['GET'])
def taskDetail(request, pk):
	item = Products.objects.get(id=pk)
	serializer =ProductsSerializer(item,many=False)
	return Response(serializer.data)


@api_view(['POST'])
def taskCreate(request):
	serializer = ProductsSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['POST'])
def taskUpdate(request, pk):
	item=Products.objects.get(id=pk)
	serializer =ProductsSerializer(instance=item, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@api_view(['DELETE'])
def taskDelete(request, pk):
	item = Products.objects.get(id=pk)
	item.delete()

	return Response('Item succsesfully delete!')

