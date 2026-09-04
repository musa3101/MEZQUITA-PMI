# ROADMAP Mezquita Arrahma

## Tareas Completadas
- Rediseño general V2 de la portada.
- Integración del calendario dinámico del Ramadán (cálculo lunar sin APIs externas).
- Actualización de assets del Hero para optimización multidispositivo (Responsive: Móvil, Tablet, Ordenador).
- Botones de descargar en PDF (optimizado para impresión).
- Soporte completo para multilenguaje en contador de Ramadán, aviso de ubicación, Suras y botones.
- Solución definitiva al bug de visualización del carrusel del Hero en iOS Safari para el modo árabe (RTL).
- Optimización de accesibilidad en el menú de navegación móvil (scroll activado).
- Optimización de velocidad del preloader (500ms) y restauración automática de scroll con hash tras la pantalla de carga.
- Separadores decorativos marroquíes (Zellige) con colores de la bandera de Marruecos para transiciones entre secciones.
- Nueva sección de Horarios de Oración en fondo verde oscuro elegante y tarjetas de oración glassmorphic integradas.
- Catálogo extendido de 14 Suras con filtrado interactivo por categorías y paginación con botón expandible.
- Sección de Jutba del Viernes (Bento Grid con 3 tarjetas y lector modal interactivo en árabe y español).
- Internacionalización (i18n) 100% sincronizada (201 claves ES/AR, nombres de oraciones y fecha reactivas).
- **Auditoría de Seguridad y Privacidad:** Saneamiento de credenciales en Git, protección RGPD de Microsoft Clarity (opt-in tras cookies), limpieza de endpoints huérfanos de Supabase y endurecimiento de cabeceras HTTP (HSTS, Permissions-Policy).

## Tareas en Progreso
- Verificación del despliegue en producción en Cloudflare Pages tras el push.

## Próximas Mejoras Prioritarias
- Nuevas publicaciones de Jutbas semanales a medida que el Imán las comparta.
- Refinar el SEO y Structured Data para eventos comunitarios.
- Configuración de dominios y políticas adicionales de CSP según sea necesario.