from rest_framework.response import Response
from rest_framework.views import APIView
import random

class RngView(APIView):
    def get(self, request):
        try:
            random_number = random.randint(1, 10) 
            return Response({"random_number": random_number})
        except Exception as e:
            return Response({"error": str(e)}, status=500)
     
class DoubleView(APIView):
    def post(self, request):
        try:
            posted_number = int(request.data.get("number", 0))  # get the posted number from the request data
            doubled_number = posted_number * 2 
            
            # Limit doubled value to specified value to prevent crashes
            if (doubled_number > 1024):
               doubled_number = posted_number 

            return Response({"doubled_number": doubled_number})
        except Exception as e:
            return Response({"error": str(e)}, status=500)