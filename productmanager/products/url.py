from rest_framework import routers
from .api import ProductViewSet
from .api import ProductViewAll

router = routers.DefaultRouter()
router.register('api/products',ProductViewSet,'products')
router.register('all/products',ProductViewAll,'products')

urlpatterns = router.urls
