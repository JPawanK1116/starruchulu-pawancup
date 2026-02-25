import os

replacements = {
    'var(--color-primary-red)': 'var(--color-primary-green)',
    'var(--color-dark-text)': 'var(--color-text-primary)',
    'var(--color-cream)': 'var(--color-bg-white)'
}

def process_directory(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.jsx'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Safely replace
                for k in replacements.keys():
                    content = content.replace(k, f"TMP_{k}")

                for k, v in replacements.items():
                    content = content.replace(f"TMP_{k}", v)

                # Special rule for old primary green
                content = content.replace('TMP_var(--color-primary-green)', 'var(--color-secondary-green)')

                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)

process_directory('src')
print("Replaced variables in JSX files.")
