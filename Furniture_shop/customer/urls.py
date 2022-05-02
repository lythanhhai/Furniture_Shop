from django.urls import path
from . import views

urlpatterns = [
	path('', views.apiOverview, name="api-overview"),
	path('Customer-list/', views.taskList, name="Customer-list"),
	path('Customer-detail/<int:pk>/', views.taskDetail, name="Customer-detail"),
	path('Customer-create/', views.taskCreate, name="Customer-create"),

	path('Customer-update/<int:pk>/', views.taskUpdate, name="Customer-update"),
	path('Customer-delete/<int:pk>/', views.taskDelete, name="Customer-delete"),
]
