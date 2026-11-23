# BIT · Bienestar, Innovación y Transparencia

> "Construyendo soluciones, BIT a bit"

Web informativa del partido **BIT**, candidato a la Presidencia y Vicepresidencia del Centro de Estudiantes de la Escuela Profesional de Ciencia de la Computación (UNSA), periodo 2027-A – 2028-A.

- **Presidente:** Mauricio Andrés Cornejo Álvarez
- **Vicepresidente:** Jesús Alberto Alfaro Buiza

## Estructura

```
index.html        Página única con todas las secciones
css/styles.css    Estilos (colores del partido en :root)
js/data.js        Lista de propuestas (editar aquí)
js/main.js        Menú, filtros, cuenta regresiva, cronograma
assets/           Logo, favicon y fotos de los candidatos
```

## Cómo editar

- **Propuestas:** `js/data.js`.
- **Colores:** variables `--brand`, `--brand-2`, `--b`, `--i`, `--t` en `css/styles.css`.
- **Fotos:** usa versiones optimizadas de 600×800 px (3:4) en `assets/img/`, en `.jpg` y `.webp`
  (p. ej. `mauricio-cornejo.jpg` + `mauricio-cornejo.webp`). Una foto de celular sin optimizar pesa más de 1 MB.
- Busca `TODO` y `[pendiente]` en `index.html` para ver lo que falta.

## Ver en local

Abre `index.html` en el navegador (no necesita servidor).

## Publicar (GitHub Pages)

URL: **https://mauricecc.github.io/BIT-info/**

1. En GitHub: **Settings → Pages**.
2. *Source*: **Deploy from a branch** → Branch **`main`**, carpeta **`/ (root)`** → **Save**.
3. Espera 1–2 minutos; cada `git push` a `main` actualiza la web automáticamente.

Archivos de soporte: `.nojekyll` (sirve los archivos tal cual), `404.html` (página de error) y
`assets/og-image.png` (vista previa al compartir el link en WhatsApp/redes).
