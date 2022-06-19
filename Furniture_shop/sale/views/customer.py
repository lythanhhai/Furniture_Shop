from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from sale.Serializer.customer import CustomerSerializer
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
from sale.models import Customer
@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List Customer':'/Customer-list/',
		'Detail View Customer':'/Customer-detail/<int:pk>/',
		'Create Customer':'/Customer-create/',
		'Sign In':'/Customer-SignIn/',
		'Update Customer':'/Customer-update/<int:pk>/',
		'Delete Customer':'/Customer-delete/<int:pk>/',
		'Get Address':'/customer-get/<str:pk/',
	}

	return Response(api_urls)



# api_view(['GET'])
def taskList(request):
	if request.method == "GET":
		item = Customer.objects.all().order_by('-phone_number')
		serializer = CustomerSerializer(item, many=True)
		return JsonResponse(serializer.data, safe= False)


@api_view(['GET'])
def taskDetail(request, pk):
	item = Customer.objects.get(phone_number=pk)
	serializer = CustomerSerializer(item,many=False)
	return Response(serializer.data)

@api_view(['POST'])
@csrf_exempt
def signIn(request):
	input_data = JSONParser().parse(request)
	customer_list = list(Customer.objects.all())
	for item in customer_list:
		if input_data["phone_number"] == item.phone_number and input_data["pass_word"] == item.pass_word:
			return JsonResponse({"key_per": item.key_per, "phone_number": item.phone_number, "address": item.address}, safe= False)
			
	
	return JsonResponse("SignIn unsuccessful", safe= False)


@api_view(['POST'])
@csrf_exempt
def taskCreate(request):
	customer_data = JSONParser().parse(request)
	serializer = CustomerSerializer(data= customer_data)
	if serializer.is_valid():
		serializer.save()
		return JsonResponse("Add is successful", safe= False)
	else:
		return JsonResponse("Add is unsuccessful", safe= False)

@api_view(['POST'])
@csrf_exempt
def taskUpdate(request, pk):
	item= Customer.objects.get(phone_number=pk)
	customer_data = JSONParser().parse(request)
	serializer = CustomerSerializer(instance=item, data=customer_data)

	if serializer.is_valid():
		serializer.save()
		return JsonResponse(serializer.data, safe= False)
	else :
		return JsonResponse("Update is unsuccessful", safe= False)



@api_view(['DELETE'])
def taskDelete(request, pk):
	item = Customer.objects.get(phone_number=pk)
	item.delete()

	return Response('Item succsesfully delete!')

@api_view(['GET'])
def taskGetAddress(request, pk):
	item = Customer.objects.get(phone_number=pk)
	serializer = CustomerSerializer(item,many=False)
	return Response(serializer.data)

