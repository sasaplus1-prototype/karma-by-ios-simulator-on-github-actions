const path = require('path');

module.exports = function(config) {
  config.set({
    basePath: path.resolve(__dirname),
    client: {
      mocha: {
        reporter: 'html'
      }
    },
    files: [
      {
        pattern: require.resolve('power-assert/build/power-assert.js'),
        type: 'js',
        watched: false
      },
      {
        pattern: 'test/index.js',
        type: 'js'
      }
    ],
    frameworks: ['mocha'],
    reporters: ['dots']
  });
};
