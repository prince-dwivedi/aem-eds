// const esbuild = require('esbuild');
import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['./blocks/button//button.src.jsx'],
  bundle: true,
  outfile: './blocks/button/button.bundle.js',
  format: 'esm',
}).catch(() => process.exit(1));
