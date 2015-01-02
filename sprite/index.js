'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var DragonGenerator = yeoman.generators.NamedBase.extend({
  writing: function () {
    this.template(
      '_sprite.js',
      'src/sprites/' + this.name + '.js'
    );
  }
});

module.exports = DragonGenerator;
