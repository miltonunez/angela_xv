# Invitación Digital XV Años — Ángela

Invitación digital estática (HTML + CSS + JS mínimo) para celebración de XV años.
Estética inspirada en *El Lago de los Cisnes*.

---

## Estructura del proyecto

```
Invitación Angela/
├── index.html      ← Página principal
├── styles.css      ← Estilos
├── script.js       ← Animaciones de scroll
├── images/
│   ├── hero.jpg    ← Imagen de portada
│   └── closing.jpg ← Imagen de cierre
└── README.md       ← Este archivo
```

---

## Despliegue local

### Opción 1 — VS Code + Live Server
1. Abre esta carpeta en **VS Code**.
2. Instala la extensión **Live Server** (si aún no la tienes).
3. Haz clic derecho en `index.html` → **Open with Live Server**.
4. Se abrirá automáticamente en tu navegador.

### Opción 2 — Python
```bash
cd "Invitación Angela"
python -m http.server 8080
```
Abre en tu navegador: `http://localhost:8080`

### Opción 3 — Node.js
```bash
cd "Invitación Angela"
npx -y http-server . -p 8080
```
Abre en tu navegador: `http://localhost:8080`

---

## Editar datos de WhatsApp

En `index.html`, busca la sección **CONFIRMACIÓN DE ASISTENCIA** (sección 9).
El enlace del botón contiene el número y el mensaje pre-escrito:

```
https://wa.me/NÚMERO?text=MENSAJE_CODIFICADO
```

- **Número**: `5218110651395` (cambia por el número deseado con código de país)
- **Mensaje**: Edita el texto URL-encoded o cámbialo directamente

---

## Tecnologías

- HTML5 semántico
- CSS3 (Flexbox, custom properties, media queries)
- JavaScript vanilla (IntersectionObserver)
- Google Fonts (Great Vibes, Cormorant Garamond, Lato)
