// See https://github.com/bigpipe/enabled
var enabled = require('enabled');
var logCategoryConfigCache = {};

// Some environments don't have a console.debug method.
// In this case, send messages to console.log. 
if (!console.debug) {
    console.debug = console.log;
}

function getCategoryConfig(category) {
    var config = logCategoryConfigCache[category];
    if (!config) {
        config = {
            category: category,
            enabled: enabled(category)
        };
        logCategoryConfigCache[category] = config;
    }
    return config;
}

exports.reloadConfig = function(category) {
    if (category) {
        // Reload a specific config
        getCategoryConfig(category).enabled = enabled(category);
    } else {
        // Reload all configs
        for (var categoryName in logCategoryConfigCache) {
            if (logCategoryConfigCache.hasOwnProperty(categoryName)) {
                exports.reloadConfig(categoryName);
            }
        }
    }
};

exports.logger = function (category) {
    if (category === undefined) {
        throw new Error('Cannot create logger. Log "category" name must be specified.');
    }
    
    var LOGGER = {};
    var categoryConfig = getCategoryConfig(category);
    
    LOGGER.isDebugEnabled = function () {
        return categoryConfig.enabled;
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