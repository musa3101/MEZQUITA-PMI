# Roadmap - Mezquita Arrahma V2

## Tareas Completadas
- [x] Rediseño integral de la página principal (UI/UX) con estética premium (modo oscuro, dorados, verde esmeralda).
- [x] Implementación y vinculación del reloj de Mawaqit (vía API en `main.js`).
- [x] Construcción del Hero con carrusel híbrido (imágenes + vídeos) adaptable a móvil y escritorio.
- [x] Rediseño de la sección del Corán (5 suras destacadas con lógica de Viernes para Al-Kahf).
- [x] Ajustes de los horarios de rezo en formato de tarjetas premium (scroll dinámico en móvil).
- [x] Optimización de Google Maps (ocultación de la caja estándar y creación de un diseño a medida con estrellas e información de dirección).
- [x] Remodelación del formulario de Contacto con fondo unificado (`contacto_bg.webp`) en cristal esmerilado sin perder legibilidad.
- [x] Depuración del botón de WhatsApp (responsive).
- [x] Inicialización del cliente de Supabase para almacenar configuraciones (cookie consent, etc.).

## Tareas en Progreso
- [ ] Optimización final continua (Lazy Loading, limpieza de imágenes `.jpg` pesadas residuales).
- [ ] Monitorización del auto-scroll de los rezos en diferentes dispositivos móviles reales.
- [ ] Seguimiento del correcto guardado de datos en Supabase a medida que entre tráfico.

## Próximas Mejoras Prioritarias
1. **Sección de Donaciones:** Expandir las opciones de pago/colaboración (Bizum, Transferencia) de forma clara y accesible.
2. **Sistema de Blog / Avisos:** Implementar en el futuro un pequeño tablón de anuncios (o fetching desde Supabase) para que el Imán pueda publicar comunicados importantes.
3. **Sección PDF (Horario de Ramadán):** Automatizar o preparar una plantilla para cuando comience el mes de Ramadán, facilitando la descarga del calendario.
4. **Traducciones completas:** Revisar la implementación de idiomas (Español/Árabe) en todos los componentes dinámicos nuevos a través del archivo `i18n.js`.
