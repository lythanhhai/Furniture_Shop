from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from sale.Serializer.product import ProductsSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
# Create your views here.
from sale.models import Products
@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List Products':'/Product-list/',
		'Detail View Products':'Product-detail/<int:pk>/',
		'Create Products':'/Product-create/',
		'Update Products':'/Product-update/<int:pk>/',
		'Delete Products':'/Product-delete/<int:pk>/',
		}

	return Response(api_urls)

@api_view(['GET'])
def taskList(request):
	item = Products.objects.all().order_by('-id')
	serializer = ProductsSerializer(item, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def taskDetail(request, pk):
	item = Products.objects.get(id= pk)
	serializer = ProductsSerializer(item, many= False)
	return Response(serializer.data)

@api_view(['POST'])
def taskCreate(request):
	serializer = ProductsSerializer(data= request.data)

	if serializer.is_valid():
		serializer.save()
		return Response("Add Product successful")
	else:
		return Response("Add Product unsuccessful")

# @api_view(['POST'])
# @csrf_exempt
# def taskCreate(request):
# 	product_data = JSONParser().parse(request)
# 	serializer = ProductsSerializer(data= product_data)
# 	if serializer.is_valid():
# 		serializer.save()
# 		return JsonResponse("Add is successful", safe= False)
# 	else:
# 		return JsonResponse("Add is unsuccessful", safe= False)

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

