from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse

# Create your views here.
def test(request):
    return JsonResponse({"message": "test!"}, status=200)