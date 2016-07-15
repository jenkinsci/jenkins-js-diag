// See https://github.com/bigpipe/enabled
var enabled = require('enabled');

exports.logger = function (category) {
    if (category === undefined) {
        throw new Error('Cannot create logger. Log "category" name must be specified.');
    }
    
    var LOGGER = {};
    
    LOGGER.isDebugEnabled = function () {
        return enabled(category);
    };

    LOGGER.debug = function (message) {
        if (LOGGER.isDebugEnabled()) {
            console.debug.apply(console, [category].concat(arguments));
        }
    };
    
    LOGGER.error = function (message) {
        console.error.apply(console, [category].concat(arguments));
    };    
    
    return LOGGER;
};