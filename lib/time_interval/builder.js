var moment       = require('moment'),
    _            = require('lodash'),
    TimePeriod   = require('./time_period'),
    TimeSplitter = require('./time_splitter');

module.exports.Builder = function(dateFormat) {
  var dateFrom, frequency,
      dateTo = moment();

  this.from = function(from) {
    if (_.isString(from)) {
      dateFrom = moment(from, dateFormat);
    }
    return this;
  };

  this.to = function(to) {
    if (_.isString(to)) {
      dateTo = moment(to, dateFormat);
    }
    return this;
  };

  this.split = function(freq) {
    frequency = freq;
    return this;
  };

  this.build = function() {
    if (_.isUndefined(dateFrom)) throw "You must provide a starting date";
    if (dateTo.isBefore(dateFrom)) throw "The from Date must be earlier than the to Date";

    return _.map(new TimeSplitter(dateFrom, dateTo).split(frequency), function(period) {
      return new TimePeriod(period.start.format(dateFormat), period.end.format(dateFormat));
    });
  };
};