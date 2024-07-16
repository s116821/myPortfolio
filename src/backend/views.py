from rest_framework.response import Response
from rest_framework.views import APIView

class DemoView(APIView):
    def get(self, request):
        return Response({"message": "Hello from Django!"})