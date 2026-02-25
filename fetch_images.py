import os
import requests
from duckduckgo_search import DDGS
import time

QUERIES = {
    'andhra-food-hero.jpg': 'traditional south indian village food spread high resolution photography',
    'veg-pickles.jpg': 'authentic indian mango pickle jar high quality',
    'nonveg-pickles.jpg': 'spicy indian chicken pickle jar red high resolution',
    'sweets.jpg': 'indian traditional sweets laddu banana leaf HD',
    'snacks.jpg': 'indian traditional snack murukulu bowl HD',
    'fryums.jpg': 'indian fryums papad raw HD',
    'curries.jpg': 'indian village chicken curry clay pot HD',
    'palnadu-special.jpg': 'guntur red chillies spicy HD',
    'godavari-special.jpg': 'south indian village greenery river HD',
    'rayalaseema-special.jpg': 'ragi mudda food HD',
    'coastal-andhra.jpg': 'coastal andhra prawn curry fish HD',
    'combo1.jpg': 'three indian pickle jars HD',
    'combo2.jpg': 'spicy meat pickle jars HD',
    'combo3.jpg': 'indian sweets gift box premium HD',
    'gongura-pickle.jpg': 'gongura pachadi pickle HD',
    'avakaya.jpg': 'andhra mango avakaya pickle HD',
    'chicken-pickle.jpg': 'chicken roast dish HD',
    'mutton-pickle.jpg': 'spicy mutton fry dish HD',
    'bobbatlu.jpg': 'bobbatlu puran poli HD',
    'boondi-laddu.jpg': 'boondi laddu HD',
    'murukulu.jpg': 'murukulu chakli snack HD',
    'gallery1.jpg': 'south indian village food preparation HD',
    'gallery2.jpg': 'making traditional indian pickle hands HD',
    'gallery3.jpg': 'sun drying red chillies india HD',
    'gallery4.jpg': 'traditional indian woman cooking clay pot village HD'
}

dest_dir = 'public/images'
os.makedirs(dest_dir, exist_ok=True)

ddgs = DDGS()

for filename, query in QUERIES.items():
    dest_path = os.path.join(dest_dir, filename)
    print(f"Fetching {filename}...")
    try:
        results = list(ddgs.images(query, max_results=3))
        downloaded = False
        for res in results:
            url = res['image']
            try:
                response = requests.get(url, timeout=5)
                if response.status_code == 200:
                    with open(dest_path, 'wb') as f:
                        f.write(response.content)
                    print(f"  Saved {filename}")
                    downloaded = True
                    break
            except Exception as e:
                print(f"  Failed URL {url}")
        if not downloaded:
            print(f"  Failed to download {filename}")
    except Exception as e:
        print(f"  DDGS failed for {filename}: {e}")
    time.sleep(0.5)
