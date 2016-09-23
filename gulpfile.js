var gulp = require('gulp');
var Server = require('karma').Server;

gulp.task('run-test', function () {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }).start();
});