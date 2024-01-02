from django.urls import path
from . import views  

urlpatterns = [
    path('list/', views.books),
    path('<int:id>', views.book),
    path('user', views.Users),
    path('user/<int:id>',views.UserActivity)
]