from rest_framework import serializers
from products.models import Product

# Product serializer
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product   
        fields = '__all__'