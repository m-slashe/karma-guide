module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        wiredep: {
           dist: {
               src: 'index.html'
           }
        }
    });

    grunt.registerTask('default',['wiredep'])
};