module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/jquery/dist/jquery.js',
      'bower_components/bootstrap/dist/css/bootstrap.css',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'module/index.js'
    ],
    preprocessors: {
      'module/index.js' : ['webpack','sourcemap']
    },
    exclude: [
    ],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                enforce: 'post',
                test: /\.js$/,
                exclude: /((node_modules|bower_components)\/|spec)/,
                loader: 'istanbul-instrumenter-loader'
            }
        ],
      }
    },
    reporters: ['spec','coverage'],
    port: 9876,
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    plugins: [
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-spec-reporter',
      'karma-coverage',
      'karma-webpack',
      'karma-sourcemap-loader'
    ],
    singleRun: false,
    concurrency: Infinity
  })
};
