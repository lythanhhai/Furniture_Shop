from django.urls import path
from . import views

urlpatterns = [
	path('', views.apiOverview, name="api-overview"),
	path('Address-list/', views.taskList, name="Address-list"),
	path('Address-detail/<int:pk>/', views.taskDetail, name="Address-detail"),
	path('Address-create/', views.taskCreate, name="Address-create"),

	path('Address-update/<int:pk>/', views.taskUpdate, name="Address-update"),
	path('Address-delete/<int:pk>/', views.taskDelete, name="Address-delete"),
]
