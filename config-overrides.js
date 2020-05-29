const path = require('path');

const resolve = (dir) => path.resolve(__dirname, dir);

// CamelCase code from https://github.com/Wolox/react-bootstrap/blob/development/generators/app/templates/rescriptsrc.js
const createLoaderMatcher = (loader) => (rule) =>
  rule.loader && rule.loader.indexOf(`${path.sep}${loader}${path.sep}`) !== -1;

const oneOfFileLoaders = (config) =>
  config.module.rules.find((rule) => rule.oneOf).oneOf;

const cssLoaderMatcher = createLoaderMatcher('css-loader');

const sassLoaderMatcher = createLoaderMatcher('sass-loader');

const addCamelCaseToCSSModules = (config) => {
  const fileLoaders = oneOfFileLoaders(config);

  fileLoaders.forEach((loader) => {
    if (loader.test && loader.use && loader.use.constructor === Array) {
      loader.use.forEach((use) => {
        if (cssLoaderMatcher(use) && use.options.modules) {
          use.options.localsConvention = 'camelCase';
        }
        if (sassLoaderMatcher(use)) {
          use.options.sassOptions = {
            ...use.options.sassOptions,
            includePaths: [path.resolve(__dirname, 'src/scss')],
          };
        }
      });
    }
  });
};
// End camelCase code

module.exports = function (config) {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    '@components': resolve('src/components'),
    '@config': resolve('src/config'),
    '@constants': resolve('src/constants'),
    '@services': resolve('src/services'),
    '@assets': resolve('src/assets'),
  });

  addCamelCaseToCSSModules(config);

  return config;
};
