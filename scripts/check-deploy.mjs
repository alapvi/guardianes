import { existsSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

const expected = [
  'wrangler.jsonc',
  'public/index.html',
  'public/assets/css/styles.css',
  'public/assets/js/main.js'
];
let errors = 0;
for (const file of expected) {
  const full = resolve(process.cwd(), file);
  const ok = existsSync(full) && statSync(full).isFile();
  console.log(`${ok ? 'OK' : 'ERROR'}  ${file}`);
  if (!ok) errors++;
}

if (errors) {
  console.error(`Faltan ${errors} archivos necesarios para desplegar. Verifica la raíz del proyecto.`);
  process.exitCode = 1;
} else {
  console.log('Estructura estática correcta: public/ es el directorio de publicación.');
}
