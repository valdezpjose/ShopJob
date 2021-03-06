from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=10000, blank=True)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    image = models.FileField()
    owner = models.ForeignKey(User, related_name="products", on_delete=models.CASCADE, null=True)
    



