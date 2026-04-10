// const esbuild = require('esbuild');
import esbuild from 'esbuild';

// esbuild.build({
//   entryPoints: ['./blocks/button//button.src.jsx'],
//   bundle: true,
//   outfile: './blocks/button/button.bundle.js',
//   format: 'esm',
// }).catch(() => process.exit(1));

esbuild.build({
  entryPoints: ['./blocks/accordion//accordion.src.jsx'],
  bundle: true,
  outfile: './blocks/accordion/accordion.bundle.js',
  format: 'esm',
}).catch(() => process.exit(1));

esbuild.build({
  entryPoints: ['./blocks/header//header.src.jsx'],
  bundle: true,
  outfile: './blocks/header/header.bundle.js',
  format: 'esm',
}).catch(() => process.exit(1));
