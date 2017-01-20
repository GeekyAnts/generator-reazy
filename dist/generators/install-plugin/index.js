'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var generators = require('yeoman-generator');
var fs = require('fs');
var assign = require('object.assign').getPolyfill();
var inflect = require('i')();
var transform = require('../../lib/transform');
var updateMixin = require('../../lib/updateMixin');

module.exports = generators.Base.extend({
  constructor: function constructor(args, opts) {
    // this.pluginNameTest = '../reazy-' + opts.plugin;
    this.pluginName = 'reazy-' + opts.plugin;
    generators.Base.apply(this, arguments);
    updateMixin.extend(this);
  },

  initializing: function initializing() {},

  prompting: function prompting() {},

  writing: function writing() {
    var self = this;
    this.npmInstall([this.pluginName], { save: true }, function () {
      var pkg = self.fs.readJSON(self.destinationPath('node_modules', self.pluginName, 'package.json'), {});
      if (pkg.scripts.postadd) {
        // self.destinationRoot(self.destinationPath('node_modules', self.pluginName));
        var postaddScriptPath = pkg.scripts.postadd.split('/');
        postaddScriptPath = self.destinationPath.apply(self, ['node_modules', self.pluginName].concat(_toConsumableArray(postaddScriptPath)));
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