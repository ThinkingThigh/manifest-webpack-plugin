# html5-manifest-webpack-plugin

A webpack plugin for generating a Html5 Manifest Appcache file.

## Install

Using npm:

```console
npm install html5-manifest-webpack-plugin --save-dev
```

## Usage

Make your `webpack.config.js` file like:

```js
const ManifestWebpackPlugin = require('html5-manifest-webpack-plugin');
const options = {
    // ...
 };

module.exports = {
  ...
  plugins: [
    new ManifestWebpackPlugin(options)
  ]
  ...
};
```

When using webpack chain you may make your `webpack.config.js` file like this

```js
...
const ManifestWebpackPlugin = require("html5-manifest-webpack-plugin");
module.exports = {

...
  configureWebpack: config => {
  ...
    config.plugins.push(new ManifestWebpackPlugin());
  },
  ...
};
```
