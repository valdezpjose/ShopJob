from rest_framework import serializers
from invoice.models import Invoice

# Invoic serializer
class InvoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invoice   
        fields = '__all__'