# Portafolio Web

## Descripción

Portafolio web personal e interactivo diseñado para exhibir mi trayectoria, proyectos y habilidades como Desarrollador Full Stack, DevOps y Cloud Computing. El objetivo es ofrecer una experiencia de usuario rápida, moderna y accesible, con navegación fluida, soporte bilingüe en tiempo real, modo oscuro/claro y un backend serverless seguro en el Edge.

## Características

- **Diseño moderno y responsivo**: Layout estructurado y minimalista estilizado con Tailwind CSS v4, cuadrícula técnica de habilidades y contenedores unificados para una lectura óptima.
- **Internacionalización completa (i18n)**: Soporte bilingüe dinámico e instantáneo en español e inglés sin recargar la página.
- **Modo oscuro y claro**: Sistema de temas con persistencia en localStorage y sincronización fluida de tokens de color.
- **Formulario de contacto seguro en el Edge**: API serverless sobre Hono y Cloudflare Pages Functions, validación estricta de esquemas con Zod, protección anti-spam con Cloudflare Turnstile y entrega transaccional vía Resend.
- **Catálogo de proyectos interactivo**: Muestra de aplicaciones en producción con enlaces directos a demos en vivo, repositorios y detalles técnicos.
- **Calidad de código y CI/CD**: Formateo y linting ultrarrápidos con Biome, pruebas automatizadas con Vitest y Testing Library, y pipeline de despliegue continuo en Cloudflare Pages mediante GitHub Actions.

## Secciones

1. **Inicio**: Presentación profesional con Hero section, disponibilidad laboral ("Open to work"), enlaces directos a redes y contacto rápido.
2. **Sobre Mí**: Visión personal y profesional, trayectoria en desarrollo Full Stack y Cloud, y enfoque metodológico.
3. **Experiencia**: Historial profesional detallado con roles, responsabilidades y logros técnicos en proyectos reales.
4. **Proyectos**: Galería interactiva con los proyectos más destacados, filtros por tecnología, especificaciones y enlaces directos.
5. **Skills**: Cuadrícula técnica visual de habilidades clasificadas por Frontend, Backend, DevOps/Cloud, Bases de Datos y Herramientas.
6. **Formación**: Registro de estudios académicos, certificaciones profesionales y cursos relevantes en tecnologías del software.
7. **Contacto**: Formulario validado con captcha y datos de contacto directo para propuestas laborales o colaboraciones.
8. **Legal**: Términos de servicio y política de privacidad del sitio web.

## Uso

- **Visualizar Contenido**: La aplicación ya está activa y puedes explorarla en vivo aquí: [Portafolio Web](https://portafolioweb.mgdc.site/).
- **Explorar Proyectos y Experiencia**: Navega entre las distintas secciones usando el menú principal para conocer mis proyectos en producción y sus arquitecturas.
- **Alternar Idioma y Tema**: Utiliza los selectores del encabezado para alternar entre español e inglés, así como entre el modo claro y oscuro.
- **Enviar Mensaje**: Completa el formulario de contacto para comunicarte directamente; el sistema valida la seguridad mediante Turnstile y envía el mensaje de inmediato.

## Tecnologías Utilizadas

- **Frontend**: React 19, Vite 8, React Router 7, Tailwind CSS 4, Zustand 5, Lucide React, @iconify/tailwind4
- **Backend**: Cloudflare Pages Functions (Hono 4)
- **Seguridad**: Cloudflare Turnstile CAPTCHA, validación de esquemas con Zod 4 y sanitización de entradas
- **Servicios**: Resend (email transaccional)
- **Testing**: Vitest 5, Testing Library, jsdom
- **Herramientas**: Bun, Biome 2, TypeScript 7
- **Infra & CI/CD**: Cloudflare Pages, GitHub Actions

## Instalación

1. **Clonar el Repositorio**: Descarga el código de este proyecto en tu máquina usando Git:

```bash
git clone https://github.com/ivndv/ivandev.git
```

2. **Instalar Dependencias**: Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
bun install
```

3. **Variables de Entorno**: Crea un archivo `.env` o `.dev.vars` en la raíz con las siguientes variables:

```env
# Frontend (.env)
VITE_TURNSTILE_SITE_KEY=tu_turnstile_site_key

# Backend / Pages Functions (.dev.vars)
RESEND_API_KEY=tu_resend_api_key
RESEND_TO_EMAIL=ivangtx19@proton.me
TURNSTILE_SECRET_KEY=tu_turnstile_secret_key
```

4. **Iniciar el Proyecto**:

```bash
# Solo frontend:
bun run dev

# Full stack con API (Cloudflare Pages Functions):
bun run dev:full
```

## Despliegue

La aplicación está construida para ser sumamente ligera y se encuentra desplegada de forma global a través de Cloudflare Pages. Puedes usarla directamente aquí: [portafolioweb.mgdc.site](https://portafolioweb.mgdc.site/)

## Licencia

Licencia de Uso Personal:

Este software es propiedad de **Ivan Cruz**. Se permite el uso de este software solo para fines personales y no comerciales. No se permite la distribución, modificación ni uso comercial de este software sin el consentimiento expreso de **Ivan Cruz**.

Cualquier uso no autorizado puede resultar en acciones legales.
