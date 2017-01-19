'use strict';

var generators = require('yeoman-generator');
var fs = require('fs');
var assign = require('object.assign').getPolyfill();
var inflect = require('i')();
var transform = require('../../lib/transform');
var updateMixin = require('../../lib/updateMixin');

module.exports = generators.Base.extend({
  constructor: function(args, opts) {
    // this.pluginNameTest = '../reazy-' + opts.plugin;
    this.pluginName = 'reazy-' + opts.plugin;
    generators.Base.apply(this, arguments);
    updateMixin.extend(this);
  },

  initializing: function () {

  },

  prompting: function () {

  },

  writing: function () {
    const self = this;
    this.npmInstall([this.pluginName], {save: true}, function () {
      const pkg = self.fs.readJSON(self.destinationPath('node_modules', self.pluginName, 'package.json'), {});
      if(pkg.scripts.postadd) {
        // self.destinationRoot(self.destinationPath('node_modules', self.pluginName));
        let postaddScriptPath = pkg.scripts.postadd.split('/');
        postaddScriptPath = self.destinationPath('node_modules', self.pluginName, ...postaddScriptPath);
        // const cmd = postaddCommand[0];
        // const args = postaddCommand.slice(1);
        self.spawnCommandSync('node', [postaddScriptPath]);
        // self.destinationRoot('../../');
      } else {
        self.log('No postadd script found. This plugin might require additional setup.');
      }
    });
  }
});
