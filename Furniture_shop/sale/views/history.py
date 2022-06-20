# from django.shortcuts import render
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from sale.Serializer.history import HistorySerializer
# # Create your views here.
# from sale.models import History
# @api_view(['GET'])
# def apiOverview(request):
# 	api_urls = {
# 		'List Historyr':'/History-list/',
# 		'Detail View History':'/History-detail/<int:pk>/',
# 		'Detail History':'/History-person/<str:pk>/',
# 		'Create History':'/History-create/',
# 		'Update History':'/History-update/<int:pk>/',
# 		'Delete History':'/History-delete/<int:pk>/',
# 		}

# 	return Response(api_urls)

# @api_view(['GET'])
# def taskList(request):
# 	item = History.objects.all().order_by('-id')
# 	serializer = HistorySerializer(item,many=True)
# 	return Response(serializer.data)

# @api_view(['GET'])
# def taskDetail(request, pk):
# 	item = History.objects.get(id=pk)
# 	serializer =HistorySerializer(item,many=False)
# 	return Response(serializer.data)

# @api_view(['GET'])
# def taskDetailPerson(request, pk):
# 	item = History.objects.get(id_person=pk)
# 	serializer =HistorySerializer(item,many=True)
# 	return Response(serializer.data)
# @api_view(['POST'])
# def taskCreate(request):
# 	serializer = HistorySerializer(data=request.data)

# 	if serializer.is_valid():
# 		serializer.save()

# 	return Response(serializer.data)

# @api_view(['POST'])
# def taskUpdate(request, pk):
# 	item=History.objects.get(id=pk)
# 	serializer =HistorySerializer(instance=item, data=request.data)

# 	if serializer.is_valid():
# 		serializer.save()

# 	return Response(serializer.data)


# @api_view(['DELETE'])
# def taskDelete(request, pk):
# 	item = History.objects.get(id=pk)
# 	item.delete()

# 	return Response('Item succsesfully delete!')

