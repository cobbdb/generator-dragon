'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var DragonGenerator = yeoman.generators.NamedBase.extend({
  writing: function () {
    this.title = this.name.charAt(0).toUpperCase() + this.name.slice(1);
    this.template(
      '_collision.js',
      'src/collisions/' + this.name + '.js'
    );
  }
});

module.exports = DragonGenerator;
