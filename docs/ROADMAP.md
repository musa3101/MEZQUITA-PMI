# ROADMAP — Mezquita Arrahma Web

## ✅ Completado

### Funcionalidades principales
- [x] Hero con scroll horizontal animado
- [x] Sección de horarios de rezo con widget Mawaqit
- [x] Horario mensual de rezos (tabla detallada)
- [x] Sección "Leer el Quran" con tarjetas de Suras populares
- [x] Botón "Leer el Quran" con efecto marquee (btn-23)
- [x] Donar — botón con estilos animados
- [x] Menú móvil con botones de Quran y Escuchar
- [x] Loading screen con nombre de la Mezquita (2 segundos)
- [x] Sección de cookies + modo privacidad
- [x] Selector de idioma (ES / AR / EN / FR)
- [x] Dark mode / Light mode

### SEO y rendimiento
- [x] Meta tags Open Graph y Twitter Card
- [x] JSON-LD schema de tipo `Mosque` para SEO local Palma de Mallorca
- [x] Preload de assets críticos
- [x] Preconnect a Google Fonts y CDNs
- [x] H1 semántico oculto para accesibilidad y SEO

### Arquitectura
- [x] CSS extraído a `assets/style.css`
- [x] JavaScript extraído a `assets/main.js`
- [x] Documentación de sesión en `docs/`

### Deployment
- [x] GitHub: `musa3101/MEZQUITA-PMI`
- [x] GitLab: `mynextbymusa/w-mezquita-arrahma`
- [x] Cloudflare Pages: `mequita-pmi-v2.pages.dev`

---

## 🔄 En progreso / Pendiente cercano
- [ ] Verificar en Google Search Console que el JSON-LD está validado
- [ ] Probar en producción (Cloudflare Pages) que no hay regresiones visuales

---

## 🔮 Próximas mejoras (futuras)
- [ ] Añadir `sitemap.xml` para mejorar crawling local
- [ ] Comprimir imágenes a WebP para mejorar Lighthouse score
- [ ] Implementar Service Worker / PWA para uso offline
- [ ] Añadir Google Analytics o Plausible para métricas
- [ ] Página de detalle del Imán / sobre nosotros
