from rest_framework import serializers
from .models import *

class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customer
        fields = ('pk','name', 'phone', 'email', 'date_created')

class DispatcherSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Dispatcher
        field =('pk','name', 'phone', 'email', 'date_created')

class DriverSerializer(serializers.ModelSerialzer):

    class Meta:
        model = Driver
        field = ('pk','name', 'phone', 'email', 'date_created')

class OrderSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Order
        field = ('STATUS','customer','product','date_created','status')

class TagSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Tag
        field = ('name')