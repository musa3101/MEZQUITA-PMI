# Resumen de Sesión - Mezquita Arrahma

## Qué se ha hecho hoy
- Corrección de la posición y área de click de los botones del Hero en `index.html`.
- Ampliación y corrección del menú de navegación en la versión móvil (añadido scroll para evitar que se oculte el botón del Corán abajo).
- Conexión de todos los textos sueltos en español con el sistema internacional de traducciones (`data-i18n`) para la traducción al árabe (Suras del Corán, botones del Hero, aviso de Palma de Mallorca en Ramadán y placeholder de la tabla de Ramadán).
- Solución al bug visual en Safari iOS para móviles en versión árabe que ocultaba o duplicaba la primera diapositiva (imagen) al activar RTL, forzando la dirección LTR exclusivamente en el carrusel de imágenes del Hero.

## Archivos Modificados
- `index.html` (Traducciones, estructura del carrusel, estilos de botones, scroll de menú móvil).
- `ramadan.html` (Estructura de traducciones para el aviso y tabla sin datos).
- `assets/main.js` (Ajustes de traducción y comportamiento de los botones del Hero).
- `assets/i18n.js` (Nuevas cadenas de traducción para árabe y español).

## Problemas Solucionados
- Solapamiento de botones en el Hero resuelto.
- El botón de lectura del Corán del menú móvil ya es 100% accesible y visible al añadir scroll al contenedor.
- Textos sin traducir en la sección árabe corregidos al 100%.
- Bug crítico de Safari en móvil para árabe resuelto.

## Pendiente
- Comprobar que todos los cambios se muestren correctamente una vez que el usuario limpie la memoria caché del navegador de su dispositivo móvil.
