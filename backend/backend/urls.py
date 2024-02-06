from django.contrib import admin
from django.urls import include, path
from account.views import UserLoginView,UserRegistrationView,SubmissionViewSet
from . import views
from rest_framework import routers


route =routers.DefaultRouter()
route.register("",SubmissionViewSet,basename='submissionview')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.index,name='index'),
    path('login/',UserLoginView.as_view(),name='login'),
    path('register/',UserRegistrationView.as_view(),name='register'),
    path('submit/',include(route.urls))
]
