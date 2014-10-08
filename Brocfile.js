/* global require, module */
var path = require('path'),
    fs   = require('fs');

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var pickFiles = require('broccoli-static-compiler');
//var mergeTrees = require('broccoli-merge-trees');
var unwatchedTree = require('broccoli-unwatched-tree');

var app = new EmberApp({
  'ember-cli-bootstrap': {
    importBootstrapCSS: false,
    // importBootstrapTheme: true,
    importBootstrapJS: true
  }
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

// var bootstrapFonts = pickFiles('bower_components/bootstrap-sass-official/assets/fonts/bootstrap', {
//   srcDir: '/',
//   destDir: '/fonts/bootstrap'
// });

app.import('bower_components/socket.io-client/socket.io.js');

var bootflat = pickFiles(unwatchedTree('bower_components/Bootflat/bootflat'), {
  srcDir: '/',
  files: ['img/**/*.png'],
  destDir: '/bootflat',
});

app.import('bower_components/Bootflat/bootflat/js/icheck.min.js');
app.import('bower_components/Bootflat/bootflat/js/jquery.fs.selecter.min.js');
app.import('bower_components/Bootflat/bootflat/js/jquery.fs.stepper.min.js');

module.exports = app.toTree(bootflat);
