
from django.urls import path,re_path
from dispatchapp import views 
from django.contrib import admin
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^ api/products/$', views.products, name='products'),
    re_path(r'^api/customers/(?P<pk>[0-9]+)$', views.customers, name='customers'),
    re_path(r'^api/dispatchers/(?P<pk>[0-9]+)$',views.dispatchers,name='dispatchers'),
    re_path(r'^api/drivers/(?P<pk>[0-9]+)$',views.drivers,name="drivers"),

   
]
