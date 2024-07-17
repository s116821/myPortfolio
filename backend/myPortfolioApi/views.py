from rest_framework.response import Response
from rest_framework.views import APIView

class DemoView(APIView):
    def get(self, request):
        try:
            return Response({"message": "Hello from Django!"})
        except Exception as e:
            return Response({"error": str(e)}, status=500)