import urllib.request
import os

images = {
    'avakaya.jpg': 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=1000&q=80',
    'gongura-pickle.jpg': 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=1000&q=80',
    'chicken-pickle.jpg': 'https://images.unsplash.com/photo-1606859196155-7033cb73de15?w=1000&q=80',
    'mutton-pickle.jpg': 'https://images.unsplash.com/photo-1512485800893-b08ec1ea2b6e?w=1000&q=80',
    'bobbatlu.jpg': 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1000&q=80',
    'boondi-laddu.jpg': 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=1000&q=80',
    'murukulu.jpg': 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=1000&q=80',
    'andhra-food-hero.jpg': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1400&q=80',
    'combo1.jpg': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1000&q=80',
    'combo2.jpg': 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=1000&q=80',
    'combo3.jpg': 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=1000&q=80',
    'gallery1.jpg': 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=800&q=80',
    'gallery2.jpg': 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=800&q=80',
    'gallery3.jpg': 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&q=80',
    'gallery4.jpg': 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80',
    'placeholder.jpg': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80'
}

output_dir = 'public/images'
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

opener = urllib.request.build_opener()
opener.addheaders = [('User-agent', 'Mozilla/5.0')]
urllib.request.install_opener(opener)

for filename, url in images.items():
    filepath = os.path.join(output_dir, filename)
    print(f"Downloading {filename}...")
    try:
        urllib.request.urlretrieve(url, filepath)
        print(f"Success: {filename}")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")
