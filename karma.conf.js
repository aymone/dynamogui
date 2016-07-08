'use strict';

module.exports = function(karma) {
    karma.set({

        frameworks: ['jasmine', 'browserify'],

        files: [
            // 'app/**/*.js',
            'app/**/*.spec.js'
        ],

        reporters: ['dots'],

        preprocessors: {
            'test/**/*Spec.js': ['browserify']
        },

        browsers: ['PhantomJS'],

        logLevel: 'LOG_DEBUG',

        singleRun: true,
        autoWatch: false,

        // browserify configuration
        browserify: {
            debug: true,
            transform: ['brfs', 'browserify-shim']
        }
    });
};
