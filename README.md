# umi-plugin-autopolyfill

[![NPM version](https://img.shields.io/npm/v/umi-plugin-autopolyfill.svg?style=flat)](https://npmjs.org/package/umi-plugin-autopolyfill)
[![NPM downloads](http://img.shields.io/npm/dm/umi-plugin-autopolyfill.svg?style=flat)](https://npmjs.org/package/umi-plugin-autopolyfill)

> Get only the polyfills that are needed by the requesting browser.

Umi plugin for [polyfill.io](https://polyfill.io)

## Install

```
npm i umi-plugin-autopolyfill --save-dev
```

## Usage

Configure in `.umirc.js`,

```js
export default {
  plugins: [
    ['umi-plugin-autopolyfill', {
      features: ['es5', 'es6', 'Array.from'],
      flags: 'gated'
    }],
  ],
}
```

## Options

- **features**: Array<string> Polyfill you want to request. See all [available polyfills](https://polyfill.io/v3/url-builder/)
- **flags**: `gated` | `always` Configuration settings for every polyfill being requested. Possible values are `always` and `gated`. Setting `always` will return all requested polyfills to every browser. Setting `gated` will wrap every polyfill within a feature detection, only adding the polyfill if the feature was not detected. To enable both settings, separate them with a comma E.G. `always,gated`.

## LICENSE

MIT
