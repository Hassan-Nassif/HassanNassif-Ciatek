from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# Create your views here.

@api_view(['GET', 'POST'])

def customers(request):
    if request.method == 'GET':
        customersdata= Customer.objects.all()

        serializer = CustomerSerializer(customersdata, context={'request': request}, many=True)

        return Response(serializer.customersdata)

    elif request.method == 'POST':
        serializer = CustomerSerializer(data=request.customersdata)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def dispatchers(request):
       if request.method== 'GET':
          dispatchersdata=Dispatcher.objects.all()
          serializer = DispatcherSerializer(dispatchersdata,context={'request':request},many=True)
          return Response(serializer.dispatchersdata)

     elif request.method == 'POST':
        serializer = DispatcherSerializer(data=request.dispatchersdata)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def products(request):
       if request.method== 'GET':
          productsdata=Product.objects.all()
          serializer = ProductSerializer(productsdata,context={'request':request},many=True)
          return Response(serializer.productssdata)

     elif request.method == 'POST':
        serializer = ProductSerializer(data=request.productssdata)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def drivers(request):
       if request.method== 'GET':
          driversdata=Driver.objects.all()
          serializer = DriverSerializer(driversdata,context={'request':request},many=True)
          return Response(serializer.driversdata)

     elif request.method == 'POST':
        serializer = DriverSerializer(data=request.driversdata)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def orders(request):
       if request.method== 'GET':
          ordersdata=Order.objects.all()
          serializer = OrderSerializer(ordersdata,context={'request':request},many=True)
          return Response(serializer.ordersdata)

     elif request.method == 'POST':
        serializer = OrderSerializer(data=request.ordersdata)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)





 

@api_view(['PUT', 'DELETE'])

