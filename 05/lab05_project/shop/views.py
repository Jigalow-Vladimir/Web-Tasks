from django.http import HttpResponse
from .models import Product

def index(request):
    products = Product.objects.all()
    output = "\n".join(f"{p.name} - {p.price} $" for p in products)
    return HttpResponse(output, content_type="text/plain")
