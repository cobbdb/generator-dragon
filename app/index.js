'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

// Styles
var font = {
  primary: chalk.blue.blue,
  success: chalk.bold.green,
  info: chalk.bold.cyan,
  warning: chalk.bold.yellow,
  error: chalk.bold.red
};

var DragonGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the dazzling Dragon generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'What would you like to ' + font.info('name') + ' your game?',
      default: this.appname
    }];

    this.prompt(prompts, function (props) {
      this.name = props.name;
      done();
    }.bind(this));
  },
  writing: {
    app: function () {
      this.dest.mkdir('src');
      this.dest.mkdir('dist');
      this.dest.mkdir('tests');
      this.dest.mkdir('tasks');

      this.template('_package.json', 'package.json');
      this.template('_bower.json', 'bower.json');
      this.src.copy('_gruntfile.js', 'gruntfile.js');
      this.template('_index.html', 'index.html');
      this.template('tasks/_browserify.js', 'tasks/browserify.js');
      this.template('tasks/_uglify.js', 'tasks/uglify.js');
    }
  },
  end: function () {
    this.installDependencies();
  }
});

module.exports = DragonGenerator;
