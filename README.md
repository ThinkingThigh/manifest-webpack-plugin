# html5-manifest-webpack-plugin

A Webpack plugin for generating a Html5 Manifest Appcache file.

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
	// an example entry definition
	entry: ['app.js'],
  ...
  plugins: [
    new ManifestWebpackPlugin(options)
  ]
};
```
