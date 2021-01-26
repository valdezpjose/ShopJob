from django.db import models
from django.contrib.auth.models import User
from products.models import Product

class Invoice(models.Model):
    name = models.CharField(max_length=100)
    nit = models.CharField(max_length=100)
    direction = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    total = models.DecimalField(max_digits=8, decimal_places=2)
    product = models.ForeignKey(Product, related_name="invoice", on_delete=models.CASCADE)
    seller = models.ForeignKey(User, related_name="invoice", on_delete=models.CASCADE)