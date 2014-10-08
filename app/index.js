'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var OnePageGenerator = yeoman.generators.Base.extend({

  promptUser: function() {
    var done = this.async();

    // have Yeoman greet the user
    console.log(this.yeoman);

    var prompts = [{
      name: 'appName',
      message: 'What is your app\'s name?'
    }, {
      type: 'confirm',
      name: 'addDemoSection',
      message: 'Would you like to generate a demo section?',
      default: true
    }];

    this.prompt(prompts, function(props) {
      this.appName = props.appName;
      this.addDemoSection = props.addDemoSection;

      done();
    }.bind(this));
  },

  scaffoldFolders: function() {
    this.mkdir('app');
    this.mkdir('app/assets');
    this.mkdir('app/assets/css');
    this.mkdir('app/assets/js');
    this.mkdir('app/assets/img');
    this.mkdir('app/content');

    this.mkdir('build');
  },

  copyMainFiles: function() {
    this.copy("_footer.html", "app/footer.html");
    //this.copy("_gruntfile.js", "Gruntfile.js");
    this.copy("_package.json", "package.json");
    //this.copy("_main.css", "app/css/main.css");

    var context = {
      site_name: this.appName
    };

    this.template("_header.html", "app/header.html", context);
  }
});

module.exports = OnePageGenerator;