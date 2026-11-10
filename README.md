# Guardianes de la Tierra / Guardians de la Terra

Web estática bilingüe (castellano/valenciano) para presentar al tribunal el proceso de creación de los seis guardianes educativos: Trasto, Flora, Doris, Aeris, Gota y Chispas.

## Estado real

✅ Código de la página, diseño responsive, cambio de idioma y galería interactiva incorporados a `main`.

✅ Configuración de Cloudflare Workers con Static Assets (`wrangler.jsonc`) y `package.json`.

⚠️ **Pendiente:** subir fotografías y vídeos originales al repositorio. El código ya tiene las rutas preparadas, pero los archivos multimedia todavía no están en GitHub, por lo que las imágenes no aparecerán en la web desplegada hasta completar esta etapa.

⚠️ Pendiente: el boceto original para la primera fase del making of.

## Multimedia pendiente (estructura prevista)

```text
public/assets/img/portada/fullguardianes.jpeg
public/assets/img/guardianes/guardian1.jpeg
public/assets/img/guardianes/guardian2.jpeg
public/assets/img/guardianes/guardian3.jpeg
public/assets/img/guardianes/guardian4.jpeg
public/assets/img/guardianes/guardian5.jpeg
public/assets/img/guardianes/guardian6.jpeg
public/assets/img/proceso/electricidad.png
public/assets/img/proceso/3dprint.png
public/assets/img/proceso/3dfinal.png
public/assets/img/proceso/pintura1.jpeg
public/assets/img/proceso/pintura2.jpeg
public/assets/img/proceso/poster-01.jpg
public/assets/img/proceso/poster-02.jpg
public/assets/video/impresion-01.mp4
public/assets/video/impresion-02.mp4
```

Los archivos de medios optimizados ya están incluidos en el ZIP `guardianes-web-v1.zip` que se facilitó en la conversación. No se debe subir el ZIP sin descomprimir: los recursos deben copiarse a sus rutas correspondientes.

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
