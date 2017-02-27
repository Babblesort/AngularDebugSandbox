module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: ['test/**/*Spec.js'],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    autoWatchBatchDelay: 300,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
