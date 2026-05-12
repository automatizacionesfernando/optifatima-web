# Optifatima · Web

Web institucional de Optifatima — óptica y audiología en Alcobendas.

**Stack:** Astro + CSS puro · Sin frameworks de componentes ni Tailwind.
**Deploy final:** Hostinger (build estático).

---

## Estructura

```
src/
├── data/                 ← Fuente única de verdad
│   ├── negocio.js        ← Teléfono, dirección, horarios, Bruno
│   ├── especialidades.js ← Las 7 long-tail + servicios generales
│   └── faq.js            ← FAQ generales de la home
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   └── ContactoBlock.astro
├── layouts/
│   └── BaseLayout.astro  ← <head> + SEO + Schema.org
├── pages/
│   ├── index.astro                   ← Home (v1.0)
│   └── audifonos-alcobendas.astro    ← Sub-página piloto (v1.0)
└── styles/
    └── global.css        ← Variables, tipografía, utilidades
```

---

## Bootstrap (primera vez)

### 1 · Crear el proyecto Astro

```bash
npm create astro@latest optifatima-web -- --template minimal --no-typescript --no-install --no-git
cd optifatima-web
npm install
```

### 2 · Fusionar los archivos de este repo

Copiar todo el contenido de la carpeta entregada (excepto este README)
sobre el proyecto recién creado, sobrescribiendo cuando aplique.

### 3 · Levantar en local

```bash
npm run dev
```

Abrir http://localhost:4321

### 4 · Build de producción

```bash
npm run build
```

Genera `/dist` con la web estática lista para subir a Hostinger por FTP.

---

## Datos a confirmar antes de publicar

- [ ] Horarios L-V exactos (ahora hay placeholder en `negocio.js`)
- [ ] Coordenadas lat/lng exactas del local
- [ ] Listado nominal de marcas a mostrar (ahora "primeras marcas")
- [ ] 3 reseñas reales del GBP para destacar en home
- [ ] URL final del GBP para enlazar
- [ ] Fotos profesionales: Bruno, fachada, interior, audífonos

---

## Roadmap

- **v1.0** (esta entrega): Astro + home + sub-página piloto `/audifonos-alcobendas`
- **v1.1**: 6 sub-páginas restantes (ortoqueratología, miopía infantil, RGP, queratocono, baja visión, terapia visual)
- **v1.2**: Deploy en Hostinger + sitemap + Schema.org refinado + dominio
