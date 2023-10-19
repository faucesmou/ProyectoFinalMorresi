const path = require('path');

module.exports = {
  // Otras configuraciones de Webpack

/*   resolve: {
    fallback: {
      os: require.resolve('os-browserify/browser'),
      crypto: require.resolve('crypto-browserify'),
    },
  }, */
  resolve: {
    fallback: {
      crypto: false,
      os: false,
    },
  },

  // Otras configuraciones de Webpack
};
