module.exports = function(grunt) {
  grunt.initConfig({
    karma: {
      options: {
        configFile: 'test/karma.conf.js',
        reporters: [
          'progress',
          'coverage',
        ],
        coverageReporter: {
          type: 'html',
          dir: 'ljs/test/coverage/'
        }
      },
      continuous: {
        browsers: ['PhantomJS'],
        singleRun: true,
        logLevel: 'ERROR'
      },
      dev: {}
    },
    jshint: {
      all: [
        'components/**/*.js',
        '!components/**/*spec.js',
        'config/**/*.js',
        '!config/**/*spec.js',
        'shared/**/*.js',
        '!shared/**/*spec.js',
        '*.js'
      ],
      options: {
        jshintrc: 'C:/LBKIT/lbk-front-config/sublime/linters-config/.jshintrc',
        reporter: require('jshint-stylish')
      }
    }
  });
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', ['karma:dev']);
};
