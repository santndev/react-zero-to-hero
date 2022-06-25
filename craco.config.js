const path = require('path');
const {ESLINT_MODES} = require("@craco/craco");

module.exports = {
  eslint: {
    mode: ESLINT_MODES.file,
  },
  webpack: {
    alias: {
      '@': path.join(path.resolve(__dirname, './src')),
      '@assets': path.join(path.resolve(__dirname, './src/assets')),
      '@routes': path.join(path.resolve(__dirname, './src/stores')),
      '@pages': path.join(path.resolve(__dirname, './src/pages')),
      '@layouts': path.join(path.resolve(__dirname, './src/layouts')),
      '@components': path.join(path.resolve(__dirname, './src/components')),
      '@redux': path.join(path.resolve(__dirname, './src/redux')),
      '@helpers': path.join(path.resolve(__dirname, './src/helpers')),
      '@services': path.join(path.resolve(__dirname, './src/services'))
    },
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = webpackConfig.output.path = path.join(path.resolve(__dirname, './dist'))
      return webpackConfig  // Important: return the modified config
    }
  },
};
