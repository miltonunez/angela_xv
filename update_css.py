import re

def update_css(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Image formats
    content = content.replace("images/hero.jpg", "images/hero.gif")
    content = content.replace("images/closing.jpg", "images/closing.gif")

    # Adding font-size to body
    content = re.sub(r'(body \{ \n  font-family: [^;]+;\n)', r'\1  font-size: 1.1rem;\n', content)

    # Dictionary of class font sizes to increase
    # Mobile first 
    replacements = {
        r'(\.hero__subtitle \{[\s\S]*?)font-size: 1rem;': r'\g<1>font-size: 1.15rem;',
        r'(\.hero__tagline \{[\s\S]*?)font-size: 1.05rem;': r'\g<1>font-size: 1.25rem;',
        r'(\.section__intro \{[\s\S]*?)font-size: 1.1rem;': r'\g<1>font-size: 1.25rem;',
        r'(\.section__label \{[\s\S]*?)font-size: 0\.85rem;': r'\g<1>font-size: 0.95rem;',
        r'(\.section__title \{[\s\S]*?)font-size: 1\.6rem;': r'\g<1>font-size: 1.8rem;',
        r'(\.parents__name \{[\s\S]*?)font-size: 1\.35rem;': r'\g<1>font-size: 1.5rem;',
        r'(\.spiritual-quote \{[\s\S]*?)font-size: 1\.15rem;': r'\g<1>font-size: 1.3rem;',
        r'(\.date-display \{[\s\S]*?)font-size: 1\.8rem;': r'\g<1>font-size: 2.1rem;',
        r'(\.event-time \{[\s\S]*?)font-size: 1\.5rem;': r'\g<1>font-size: 1.7rem;',
        r'(\.event-details__venue \{[\s\S]*?)font-size: 1\.1rem;': r'\g<1>font-size: 1.25rem;',
        r'(\.btn \{[\s\S]*?)font-size: 0\.9rem;': r'\g<1>font-size: 1rem;',
        r'(\.dresscode__main \{[\s\S]*?)font-size: 1\.5rem;': r'\g<1>font-size: 1.7rem;',
        r'(\.dresscode__detail \{[\s\S]*?)font-size: 0\.95rem;': r'\g<1>font-size: 1.1rem;',
        r'(\.invitados-badge__number \{[\s\S]*?)font-size: 2\.4rem;': r'\g<1>font-size: 2.6rem;',
        r'(\.invitados-note \{[\s\S]*?)font-size: 0\.95rem;': r'\g<1>font-size: 1.1rem;',
        r'(\.envelope-text \{[\s\S]*?)font-size: 1\.05rem;': r'\g<1>font-size: 1.2rem;',
        r'(\.confirm-text \{[\s\S]*?)font-size: 0\.95rem;': r'\g<1>font-size: 1.1rem;',
        r'(\.closing__text \{[\s\S]*?)font-size: 1\.2rem;': r'\g<1>font-size: 1.35rem;',
        r'(\.return-top__text \{[\s\S]*?)font-size: 0\.75rem;': r'\g<1>font-size: 0.85rem;',
        r'(\.countdown__number \{[\s\S]*?)font-size: 1\.6rem;': r'\g<1>font-size: 1.8rem;',
        r'(\.countdown__label \{[\s\S]*?)font-size: 0\.7rem;': r'\g<1>font-size: 0.85rem;'
    }

    # Apply general replacements
    for pattern, rep in replacements.items():
        content = re.sub(pattern, rep, content, count=1)

    # Desktop queries
    desktop_replacements = {
        r'(\.hero__tagline \{\n    font-size:) 1\.2rem;': r'\1 1.4rem;',
        r'(\.section__title \{\n    font-size:) 1\.9rem;': r'\1 2.1rem;',
        r'(\.date-display \{\n    font-size:) 2\.2rem;': r'\1 2.5rem;',
        r'(\.parents__name \{\n    font-size:) 1\.55rem;': r'\1 1.75rem;',
        r'(\.spiritual-quote \{\n    font-size:) 1\.3rem;': r'\1 1.5rem;',
        r'(\.closing__text \{\n    font-size:) 1\.4rem;': r'\1 1.6rem;',
        r'(\.countdown__number \{\n    font-size:) 2\.2rem;': r'\1 2.4rem;',
        r'(\.countdown__label \{\n    font-size:) 0\.85rem;': r'\1 1rem;'
    }

    # Apply desktop replacements
    for pattern, rep in desktop_replacements.items():
        content = re.sub(pattern, rep, content, count=1)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

update_css('styles.css')
