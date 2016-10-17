module.exports = function(config) {
  config.set({

    // basepath. Este valor no debe ser modificado.
    basePath: '../../',

    // frameworks. Este valor no debe ser modificado.
    frameworks: ['angular', 'requirejs', 'jasmine'],

    // list of files / patterns to load in the browser
    files: [
      { pattern: 'lqv/node_modules/angular/angular.min.js', included: false },
      { pattern: 'lqv/node_modules/angular-ui-router/release/angular-ui-router.min.js', included: false },
      { pattern: 'lqv/node_modules/jquery/dist/jquery.min.js', included: false },
      { pattern: 'lqv/node_modules/bootstrap/dist/js/bootstrap.min.js', included: false },
      { pattern: 'lqv/node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js', included: false },
      { pattern: 'lqv/node_modules/angular-animate/angular-animate.min.js', included: false },
      { pattern: 'lqv/node_modules/underscore/underscore-min.js', included: false },
      { pattern: 'lqv/node_modules/angular-smart-table/dist/smart-table.min.js', included: false },

      { pattern: 'lqv/node_modules/quickmock/src/quickmock.js', included: true },
      { pattern: 'lqv/node_modules/quickmock/src/quickmock.mockHelper.js', included: true },
      { pattern: 'lqv/node_modules/angular-mocks/angular-mocks.js', included: true },
      { pattern: 'lqp/config/**/mocks.js', included: true },

      { pattern: 'ljs/ljs.main.module.js', included: false },

      { pattern: 'lqp/lqp.public.module.js', included: false },
      { pattern: 'lqp/decorators.js', included: false },
      { pattern: 'lqp/lqp.public.constants.js', included: false },

      { pattern: 'lqp/config/**/*.js', included: false },

      { pattern: 'lqp/components/**/*.js', included: false },
      { pattern: 'lqp/shared/**/*.js', included: false },
      { pattern: 'lqp/*.js', included: false },

      { pattern: 'ljs/config/**/*.js', included: false },
      { pattern: 'ljs/components/**/*.js', included: false },
      { pattern: 'ljs/shared/**/*.js', included: false },

      'lqv/require-config.js',
    ],


    // list of files to exclude
    exclude: [
      'lqp/config/**/*.spec.js',
      'lqp/components/**/*.spec.js',
      'lqp/shared/**/*.spec.js',
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'ljs/components/**/*.service.js': ['coverage'],
      'ljs/components/**/*.directive.js': ['coverage'],
      'ljs/components/**/*.controller.js': ['coverage'],
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
      'progress',
    ],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['IE'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
  });
};
