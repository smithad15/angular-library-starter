import fs from 'fs';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
const peerDeps = Object.keys(packageJson.peerDependencies);

export default {
  entry: './build/angular-library-starter.js',
  dest: './dist/angular-library-starter.js',
  format: 'es',
  sourceMap: true,
  plugins: [resolve({ jsnext: true, main: true }), commonjs()],
  external: peerDeps,
};
