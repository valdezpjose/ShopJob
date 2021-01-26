from rest_framework import routers
from .api import InvoiceViewSet

router = routers.DefaultRouter()
router.register('api/invoice',InvoiceViewSet,'invoice')

urlpatterns = router.urls