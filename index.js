// See https://github.com/bigpipe/diagnostics
var diagnostics = require('diagnostics');

exports.logDebug = function (category, message) {
    if (arguments.length > 1) {
        diagnostics(category).apply(this, arguments.slice(1));
    } else {
        console.error('Invalid call to @jenkins-cd/diag.logDebug(). Must provide category and message arguments at a minimum.');
    }
};

exports.logError = function (category, message) {
    console.error.apply(this, arguments);
};