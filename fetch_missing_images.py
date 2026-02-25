import urllib.request
import os

images = {
    'palnadu-special.jpg': 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80',
    'godavari-special.jpg': 'https://images.unsplash.com/photo-1610190886591-645068222eb6?w=800&q=80',
    'rayalaseema-special.jpg': 'https://images.unsplash.com/photo-1589301773099-0b1bfedb5cfa?w=800&q=80',
    'coastal-andhra.jpg': 'https://images.unsplash.com/photo-1626200418648-5c420bd4ad58?w=800&q=80',
    'veg-pickles.jpg': 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800&q=80',
    'nonveg-pickles.jpg': 'https://images.unsplash.com/photo-1606859196155-7033cb73de15?w=800&q=80',
    'sweets.jpg': 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80',
    'snacks.jpg': 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=800&q=80',
    'fryums.jpg': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80',
    'curries.jpg': 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80'
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
