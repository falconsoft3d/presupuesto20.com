# Presupuesto20 - Software de Presupuestos Open Source

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)

Web oficial de **Presupuesto20**, el software de código abierto para gestión de presupuestos.

## 🚀 Tecnologías

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos modernos y responsivos
- **Markdown** - Sistema de blog con archivos .md
- **Lucide React** - Iconos modernos

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar en producción
npm start
```

## 🏗️ Estructura del Proyecto

```
presupuesto20.com/
├── app/                    # Páginas y rutas (App Router)
│   ├── page.tsx           # Homepage
│   ├── blog/              # Blog pages
│   ├── features/          # Características
│   ├── docs/              # Documentación
│   ├── download/          # Descargas
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Estilos globales
├── components/            # Componentes reutilizables
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/                   # Utilidades
│   └── posts.ts          # Funciones para el blog
├── posts/                # Artículos del blog (Markdown)
│   ├── welcome.md
│   ├── first-budget.md
│   └── open-source-benefits.md
├── public/               # Archivos estáticos
│   └── presupuesto20.png # Imagen destacada
└── package.json
```

## ✨ Características

- **Diseño Moderno**: Interfaz elegante y tecnológica con gradientes y efectos
- **Blog con Markdown**: Sistema completo de blog usando archivos .md
- **Responsive**: Optimizado para todos los dispositivos
- **SEO Optimizado**: Meta tags y Open Graph
- **Modo Oscuro**: Por defecto con soporte para tema claro
- **Rendimiento**: Optimizado con Next.js 14

## 📝 Agregar Posts al Blog

Crea un nuevo archivo `.md` en la carpeta `posts/`:

```markdown
---
title: "Título del Post"
date: "2024-12-12"
author: "Tu Nombre"
excerpt: "Descripción breve del artículo"
image: "/blog/imagen.jpg"
tags: ["tag1", "tag2"]
---

# Contenido del Post

Tu contenido en Markdown aquí...
```

## 🌐 Despliegue

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Otros Servicios

El proyecto es compatible con cualquier servicio que soporte Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway

## 📧 Contacto

- **Web**: [www.presupuesto20.com](https://www.presupuesto20.com)
- **Email**: mfalconsoft@gmail.com
- **GitHub**: [github.com/presupuesto20](https://github.com/presupuesto20)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

Hecho con ❤️ por el equipo de Presupuesto20
