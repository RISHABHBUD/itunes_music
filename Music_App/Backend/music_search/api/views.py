import logging
from django.http import JsonResponse
import requests
from django.views.decorators.csrf import csrf_exempt

logger = logging.getLogger('myapp')

@csrf_exempt
def search_music(request):
    print(request.POST)
    search_term = request.POST.get('term', '')
    logger.info('Search music API called with search term: %s', search_term)

    url = f'https://itunes.apple.com/search?term={search_term}&media=music&entity=album'
    response = requests.get(url)
    data = response.json()
    return JsonResponse(data)
