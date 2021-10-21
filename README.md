## Vue.js + TypeScript (with decorators) + Parcel [![CI](https://github.com/daggerok/parcel-vue-ts-decorator-example/actions/workflows/ci.yaml/badge.svg)](https://github.com/daggerok/parcel-vue-ts-decorator-example/actions/workflows/ci.yaml)
Awesome Vue TypeScript Component usage (decorators) with parcel-bundler build 

<!-- old Travis status badge:
[![Build Status](https://travis-ci.org/daggerok/parcel-vue-ts-decorator-example.svg?branch=master)](https://travis-ci.org/daggerok/parcel-vue-ts-decorator-example)
-->

__Development__

```
npm i
npm start
```

__Production Build__

```bash
npm run build
# or: npm run serve
```

__Run Unit Tests__

```bash
npm t
```

Note that new components should be added to test_map.js in order to make them easily available to the unit tests.

__Write and Run Integration Tests__

Begin by running the parcel command to start serving the project locally on port 1234.

Then export an env var for the Cypress baseUrl

```bash
export CYPRESS_baseUrl=http://localhost:1234
```

or in PowerShell

```batch
$env:CYPRESS_baseUrl = "http://localhost:1234"
```

Then launch Cypress to run tests

```bash
./node_modules/.bin/cypress open
```

__TSLint Setup__

To run tslint manually (doesn't lint in .vue files yet)

```bash
npm run lint
```

__GitHub Pages__

See `.travis.yml`, but in short:

```bash
npm run gh-pages
```

__Links and Resources__

* [GitHub: vuejs/vue-class-component - see that example as a reference](https://github.com/vuejs/vue-class-component/blob/master/example/tsconfig.json)
* [Read Vue TypeScript article](https://github.com/Microsoft/TypeScript-Vue-Starter#using-decorators-to-define-a-component)
* [Parcel: interpolate %baseHref% variable into html](https://github.com/krotovic/parcel-plugin-interpolate-html)
