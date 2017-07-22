import fs from 'fs';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
const packageName = packageJson.name;
const peerDeps = Object.keys(packageJson.peerDependencies);

export default {
  entry: `./build/${packageName}.js`,
  dest: `./dist/${packageName}.js`,
  format: 'es',
  sourceMap: true,
  plugins: [resolve({ jsnext: true, main: true }), commonjs()],
  external: peerDeps,
};
