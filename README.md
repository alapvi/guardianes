# Guardianes de la Tierra / Guardians de la Terra

Web estática bilingüe para presentar al tribunal el proceso de creación original de seis guardianes educativos: Trasto, Flora, Doris, Aeris, Gota y Chispas.

## Estado de desarrollo

La primera versión está preparada: portada, origen del proyecto, making of con modelado/impresión/pintura, galería interactiva y finalidad educativa. Incluye fotografías y vídeos originales proporcionados por la persona autora.

**Pendiente:** incorporar al repositorio los archivos del paquete de publicación (HTML, CSS, JS y medios optimizados). El boceto original de la primera fase sigue pendiente.

## Configuración de Cloudflare Workers

- Proyecto: `guardianes`
- Rama: `main`
- Directorio raíz: `/`
- Build command: vacío
- Deploy command: `npx wrangler deploy`
- Assets directory en Wrangler: `./public`

La clonación fallaba mientras este repositorio no tenía ningún commit. Este README inicializa la rama `main`; una vez incorporada la web y `wrangler.jsonc`, el despliegue podrá continuar. Si sigue fallando la clonación, revisar permisos de Cloudflare en GitHub.
