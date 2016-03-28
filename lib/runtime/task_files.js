var Path = require('path');

module.exports = function(tempDir, outputDir) {
  var tempPath = function(path) {
    return Path.join(tempDir, path);
  };

  var outputPath = function(path) {
    return Path.join(outputDir, path);
  };

  return {
    temp: {
      gitlog: function(period) { return tempPath('gitlog_' + period.toString() + '.log'); },
      gitlogMessages: function(period) { return tempPath('gitlog_messages_' + period.toString() + '.log'); },
      sloc: function() { return tempPath('sloc-analysis.json'); },
      codeBoundaries: function() { return tempPath('code_boundaries.txt'); },
      javascriptComplexity: function() { return tempPath('javascript-complexity-analysis.json'); },
      rubyComplexity: function() { return tempPath('ruby-complexity-analysis.json'); },
      duplication: function() { return tempPath('duplication-analysis.json'); },
      revisions: function() { return tempPath('revisions-analysis.json'); },
      authors: function() { return tempPath('authors-analysis.json'); },
      sumCoupling: function(period) { return tempPath('sum-coupling-analysis_' + period.toString() + '.json'); },
      temporalCoupling: function(period) { return tempPath('temporal-coupling-analysis_' + period.toString() + '.json'); }
    },
    output: {
      revisionsHotspot: function() { return outputPath('revisions-hotspot-data.json'); },
      moduleComplexityTrend: function(path) { return outputPath(path.split("/").join("_") + '_complexity-trend-data.json'); },
      moduleTemporalCoupling: function(period, path) { return outputPath(path.split("/").join("_") + '_temporal-coupling-data_' + period.toString() + '.json'); },
      systemEvolution: function(boundaryName) { return outputPath(boundaryName + '_evolution-data.json'); },
      systemCoupling: function(boundaryName) { return outputPath(boundaryName + '_coupling-data.json'); },
      commitCloud: function(period) { return outputPath("commit-cloud-data_" + period.toString() + ".json"); }
    }
  };
};