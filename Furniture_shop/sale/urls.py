from django.urls import path
from .views import address,customer,history,orders,product

urlpatterns = [
	path('', address.apiOverview, name="api-overview"),
	path('Address-list/', address.taskList, name="Address-list"),
	path('Address-detail/<int:pk>/', address.taskDetail, name="Address-detail"),
	path('Address-create/', address.taskCreate, name="Address-create"),
	path('Address-update/<int:pk>/', address.taskUpdate, name="Address-update"),
	path('Address-delete/<int:pk>/', address.taskDelete, name="Address-delete"),
	###
	path('Customer-list/', customer.taskList, name="Customer-list"),
	path('Customer-detail/<int:pk>/', customer.taskDetail, name="Customer-detail"),
	path('Customer-create/', customer.taskCreate, name="Customer-create"),
	path('Customer-update/<int:pk>/', customer.taskUpdate, name="Customer-update"),
	path('Customer-delete/<int:pk>/', customer.taskDelete, name="Customer-delete"),
	path('Customer-get/<str:pk>/', customer.taskGetIdAddress, name="Customer-get"),
	###
	path('History-list/', history.taskList, name="History-list"),
	path('History-detail/<int:pk>/',  history.taskDetail, name="History-detail"),
	path('History-person/<int:pk>/',  history.taskDetailPerson, name="History-person"),
	path('History-create/',  history.taskCreate, name="History-create"),
	path('History-update/<int:pk>/',  history.taskUpdate, name="History-update"),
	path('History-delete/<int:pk>/',  history.taskDelete, name="History-delete"),

	###
	path('Product-list/', product.taskList, name="Product-list"),
	path('Product-detail/<int:pk>/', product.taskDetail, name="Product-detail"),
	path('Product-create/', product.taskCreate, name="Product-create"),
	path('Product-update/<int:pk>/', product.taskUpdate, name="Product-update"),
	path('Product-delete/<int:pk>/', product.taskDelete, name="Product-delete"),

	###
	path('Orders-list/', orders.taskList, name="Orders-list"),
	path('Orders-detail/<int:pk>/', orders.taskDetail, name="Orders-detail"),
	path('Orders-create/', orders.taskCreate, name="Orders-create"),
	path('Orders-update/<int:pk>/', orders.taskUpdate, name="Orders-update"),
	path('Orders-delete/<int:pk>/', orders.taskDelete, name="Orders-delete"),
] 