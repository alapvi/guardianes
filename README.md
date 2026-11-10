# Guardianes de la Tierra / Guardians de la Terra

Web estática bilingüe (castellano/valenciano) para presentar al tribunal el proceso de creación de los seis guardianes educativos: Trasto, Flora, Doris, Aeris, Gota y Chispas.

## Estado actual (10/11/2026)

✅ Web funcional en `public/` con cinco secciones: portada, origen, making of, galería de los seis guardianes y del taller al aula.

✅ Textos en castellano y valenciano; tarjetas de personajes interactivas, diseño responsive y vídeos con reproducción manual.

✅ **Multimedia en la rama `main`**: fotografía grupal, seis retratos individuales, cinco fotografías de proceso, dos carteles de vídeo y dos vídeos MP4.

✅ La acción de GitHub `.github/workflows/importar-multimedia.yml` completó correctamente la importación y creó los recursos en `public/assets/`.

✅ Comprobadas en GitHub todas las rutas de recursos utilizadas por `public/index.html`.

⚠️ Sigue pendiente incorporar una imagen real del boceto inicial. La web presenta esa fase como pendiente, sin inventar un boceto.

⚠️ La publicación definitiva debe verificarse en Cloudflare Workers y probarse desde un teléfono antes de generar el QR del tribunal.

## Cloudflare Workers

- Repositorio: `alapvi/guardianes`
- Rama: `main`
- Directorio raíz: `/`
- Comando de compilación: vacío
- Comando de despliegue: `npx wrangler deploy`
- Directorio de recursos estáticos: `./public`
- Worker: `guardianes`

## Desarrollo local

```bash
npm install
npm run dev
```

## Despliegue

```bash
npm run deploy
```

Los recursos se servirán como activos estáticos. Los vídeos usan reproducción manual y no se cargan completamente de forma anticipada. El visor STL queda reservado para una versión posterior.

## Cloudflare Workers Builds: despliegue correcto

Configura **Workers y Pages > guardianes > Configuración > Compilaciones** con:

- Rama de producción: `main`
- Directorio raíz: `/` (raíz del repositorio)
- Comando de compilación: ninguno (web estática sin bundler)
- Comando de despliegue: `npx wrangler deploy --config ./wrangler.jsonc --assets ./public`

La carpeta `public` contiene `index.html`, `assets/css/styles.css`, `assets/js/main.js` y recursos básicos. La configuración de Wrangler también declara `assets.directory = "./public"`.

El error `Could not detect a directory containing static files` puede aparecer al compilar un commit inicial anterior a que existieran esos archivos, o si la compilación se ejecuta en otro directorio. El comando explícito elimina la ambigüedad de detección de directorio. El comando equivalente de `package.json` es `npm run deploy`, que primero ejecuta `npm run check`.

**IMPORTANTE:** los recursos gráficos y los vídeos siguen pendientes de incorporarse a GitHub; esta configuración facilita el despliegue del sitio, pero no sustituye esos archivos.

## Importación automática de fotografías y vídeos

La importación desde `guardianes-web-v1.zip` ya se completó correctamente. El flujo `.github/workflows/importar-multimedia.yml` queda disponible para futuras reposiciones del paquete multimedia.

Los recursos se sirven en `/assets/img/` y `/assets/video/`. No es necesario volver a subirlos para el despliegue actual.
