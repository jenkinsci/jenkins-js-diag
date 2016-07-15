// See https://github.com/bigpipe/enabled
var enabled = require('enabled');

exports.logger = function (category) {
    if (category === undefined) {
        throw new Error('Cannot create logger. Log "category" name must be specified.');
    }
    
    var LOGGER = {};
    var debugIsEnabled = enabled(category);
    
    LOGGER.isDebugEnabled = function () {
        return debugIsEnabled;
    };

    LOGGER.debug = function (message) {
        if (debugIsEnabled) {
            console.debug.apply(this, [category].concat(arguments));
        }
    };
    
    LOGGER.error = function (message) {
        console.error.apply(this, [category].concat(arguments));
    };    
    
    return LOGGER;
};