from django.contrib import admin
from .models import*
# Register your models here.
admin.site.register(Customer)
admin.site.register(Product)
admin.site.register(Dispatcher)
admin.site.register(Order)
admin.site.register(Driver)
admin.site.register(Tag)
