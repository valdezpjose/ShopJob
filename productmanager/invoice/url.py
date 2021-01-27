from rest_framework import routers
from .api import InvoiceViewSet
from .api import ProductViewOnly

router = routers.DefaultRouter()
router.register('api/invoice',InvoiceViewSet,'invoice')
router.register('only/invoice',ProductViewOnly,'invoice')

urlpatterns = router.urls