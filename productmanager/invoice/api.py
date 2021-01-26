from invoice.models import Invoice
from rest_framework import viewsets, permissions
from .serializers import InvoiceSerializer

#Invoice ViewSet
class InvoiceViewSet(viewsets.ModelViewSet):
    queryset = Invoice.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = InvoiceSerializer
