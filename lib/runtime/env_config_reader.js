var _     = require('lodash'),
    utils = require('../utils');

module.exports = function() {
  var maxParallel = parseInt(process.env.MAX_CONCURRENCY);
  var serverPort = parseInt(process.env.SERVER_PORT);
  var codeMaatOptions = process.env.CODEMAAT_OPTS;

  this.getConfiguration = function() {
    return {
      maxConcurrency: _.isInteger(maxParallel) ? maxParallel : undefined,
      debugMode: _.isUndefined(process.env.COMMAND_DEBUG) ? undefined : true,
      logEnabled: _.isUndefined(process.env.LOG_DISABLED) ? undefined : false,
      serverPort: _.isInteger(serverPort) ? serverPort : undefined,
      codeMaat: { options: _.isString(codeMaatOptions) ? utils.arrays.arrayPairsToObject(codeMaatOptions.split(' ')) : undefined }
    };
  };
};
