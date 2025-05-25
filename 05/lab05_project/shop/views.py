from django.http import HttpResponse
from django.shortcuts import render
from .models import Product, Category

def index(request):
    products = Product.objects.all()
    output = "\n".join(f"{p.name} - {p.price} $" for p in products)
    return HttpResponse(output, content_type="text/plain")

def product_list(request):
    products = Product.objects.all()
    return render(request, 'shop/product.html', {'products': products})

def category_list(request):
    categories = Category.objects.all()
    return render(request, 'shop/category.html', {'categories': categories})
