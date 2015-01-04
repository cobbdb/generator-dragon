'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var DragonGenerator = yeoman.generators.NamedBase.extend({
  writing: function () {
    this.template(
      '_screen.js',
      'src/screens/' + this.name + '.js'
    );
  }
});

module.exports = DragonGenerator;
