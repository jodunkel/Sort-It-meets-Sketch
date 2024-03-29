![alt test](Sort-It.png)

# Sort-It meets Sketch

## Installation

- [Download](../../releases/latest/download/sort-it-plugin.sketchplugin.zip) the latest release of the plugin
- Un-zip
- Double-click on sort-it-plugin.sketchplugin

## Usage

The plagin is used to import [Sort-It](https://sort-it.intuity.de/) files into Sketch.

To import a file, select the Sort-It plugin and choose "Sort-It to Sketch". After that you will be asked for a Sort-It file.

> Please note that this is currently only possible with second generation Sort-It files. If you have an older file, you can upgrade to the latest version of Sort-It and download it again. With the new file it should now be possible to import the files into Sketch.

It may take a few seconds to import the Sort-It file correctly.

After the process is complete, a new file has been created and will open in your Sketch window. The New File will be saved to your desktop at the same time.

> **Important:** If you want to import another file, you must rename the previous file or save it to a different location, otherwise it will be overwritten.

### Customize your cards

To customize your exported cards, go to the "Symbols" page. Here you will find the individual building blocks that make up the cards. Please note that the individual building blocks should not be deleted, otherwise the links to the cards will not exist anymore, and therefore no more central modifications are possible.

For more information: [Sketch Symbols](https://www.sketch.com/docs/symbols/)

## Development Guide

_This plugin was created using `skpm`. For a detailed explanation on how things work, checkout the [skpm Readme](https://github.com/skpm/skpm/blob/master/README.md)._

### Usage

Install the dependencies

```bash
npm install
```

Once the installation is done, you can run some commands inside the project folder:

```bash
npm run build
```

To watch for changes:

```bash
npm run watch
```

Additionally, if you wish to run the plugin every time it is built:

```bash
npm run start
```

### Custom Configuration

#### Babel

To customize Babel, you have two options:

- You may create a [`.babelrc`](https://babeljs.io/docs/usage/babelrc) file in your project's root directory. Any settings you define here will overwrite matching config-keys within skpm preset. For example, if you pass a "presets" object, it will replace & reset all Babel presets that skpm defaults to.

- If you'd like to modify or add to the existing Babel config, you must use a `webpack.skpm.config.js` file. Visit the [Webpack](#webpack) section for more info.

#### Webpack

To customize webpack create `webpack.skpm.config.js` file which exports function that will change webpack's config.

```js
/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {boolean} isPluginCommand - whether the config is for a plugin command or a resource
 **/
module.exports = function(config, isPluginCommand) {
  /** you can change config here **/
};
```

### Debugging

To view the output of your `console.log`, you have a few different options:

- Use the [`sketch-dev-tools`](https://github.com/skpm/sketch-dev-tools)
- Run `skpm log` in your Terminal, with the optional `-f` argument (`skpm log -f`) which causes `skpm log` to not stop when the end of logs is reached, but rather to wait for additional data to be appended to the input

### Publishing your plugin

```bash
skpm publish <bump>
```

(where `bump` can be `patch`, `minor` or `major`)

`skpm publish` will create a new release on your GitHub repository and create an appcast file in order for Sketch users to be notified of the update.

You will need to specify a `repository` in the `package.json`:

```diff
...
+ "repository" : {
+   "type": "git",
+   "url": "git+https://github.com/ORG/NAME.git"
+  }
...
```
