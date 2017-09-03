# Angular Library Starter

This starter lays out a project structure for libraries that are to be consumed by Angular. It will output files that correspond to the Angular Package Format.

## Features
- FESM (Flat ECMAScript Module) with ES5 code
- FESM with ES2015 code
- [TSLint](https://palantir.github.io/tslint/)
- [Prettier](https://github.com/prettier/prettier)
- Should work on Windows/Linux/Mac
- Code can be consumed by AOT
- Tree Shakeable
- Support for Closure Compiler

## Getting Started

All of the code inside of `src` will be bundled up for you automatically. The entry point for the end package is `src/index.ts`. All files that are to be included must be part of that entry point.

Of course, you will probably not want to have `angular-library-starter` be your package name. Change it to your own library name in the following places:
- `package.json`
  - `name`
  - `module` path
  - `es2015` path
  - `typings` path
- `tsconfig.json` and `tsconfig.es2015.json`
  - `angularCompilerOptions`
    - `flatModuleOutFile`
    - `flatModuleId`

Any packages that you include in your `peerDependencies` will not be included in your published bundle automatically.

## Publishing Your Package

This repo has been designed to be published on npm. It is recommended to use the procedure described [here](https://docs.npmjs.com/getting-started/publishing-npm-packages). For release note tracking, it is recommended to use GitHub's releases feature due to the extra niceties that come along with it (easy release note management, automatic source code bundling, etc.)

## Scripts
- `npm run build`: Run through the entire build process
- `npm run lint`: Runs all linters
- `npm run prettify`: Runs prettier over the entire codebase

## Resources
- [Angular Package Format v4](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview)
- [Packaging Angular - Jason Aden - ngconf 2017](https://www.youtube.com/watch?v=unICbsPGFIA&t=2s)
