module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['phantomjs-shim', 'mocha', 'chai'],
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/**/*.js',
      'test/**/*Spec.js'
    ],
    exclude: [],
    preprocessors: {
      'src/**/*.js': ['babel'],
      'test/**/*.js': ['babel']
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
      filename: function(file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function(file) {
        return file.originalPath;
      }
    },
    reporters: ['html'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    autoWatchBatchDelay: 300,
    browsers: [],
    client: {
      mocha: {
        reporter: 'html'
      }
    },
    singleRun: false,
    concurrency: Infinity
  })
}
