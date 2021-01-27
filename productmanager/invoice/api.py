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

class ProductViewOnly(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = InvoiceSerializer

    def get_queryset(self):
        return self.request.user.invoice.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)