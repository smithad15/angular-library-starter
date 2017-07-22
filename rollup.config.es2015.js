import fs from 'fs';
import config from './rollup.config';

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
const packageName = packageJson.name;

export default Object.assign({}, config, {
  entry: `./build/${packageName}.es2015.js`,
  dest: `./dist/${packageName}.es2015.js`,
});
