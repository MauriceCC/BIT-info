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
- **Fotos:** guarda `assets/mauricio.jpg` y `assets/jesus.jpg` y en `index.html` cambia
  `<div class="candidate__photo" data-initials="MC" ...>` por
  `<div class="candidate__photo" style="background-image:url(assets/mauricio.jpg)" ...>`.
- Busca `TODO` y `[pendiente]` en `index.html` para ver lo que falta.

## Ver en local

Abre `index.html` en el navegador (no necesita servidor).

## Publicar (GitHub Pages)

Settings → Pages → Branch `main` / root.
