module.exports = function (context, options) {
  return {
    name: 'webpack-loader',
    configureWebpack(config, isServer) {
      if (isServer) {
        return {
          resolve: {alias: {'msw/browser': false}},
        };
      }
    },
  };
};
