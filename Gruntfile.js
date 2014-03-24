'use strict'

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          hostname: 'localhost',
          livereload: 35729,
          base: ''
        }
      }
    },

    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.server.options.livereload %>'
        },
        files: [
          '{,*/}*.html'
        ]
      },
      js:{
      files:['{,*/}*.js'],
      options: {
        livereload: true
      }
      }
    }
  });

  grunt.registerTask('server', [
    'connect:server',
    'watch'
  ]);
}