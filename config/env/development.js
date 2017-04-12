'use strict';

module.exports = {
  karma: {
    browsers: ['Chrome'],
    preprocessors: {
      'test/*.html' : ['html2js']
    },
    reporters: ['progress'],
    autoWatch: true,
    singleRun: false
  }
};
