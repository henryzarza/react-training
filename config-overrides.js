const path = require('path');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = function (config) {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    '@components': resolve('src/components'),
    '@config': resolve('src/config'),
    '@constants': resolve('src/constants'),
    '@services': resolve('src/services'),
    '@assets': resolve('src/assets'),
  });

  return config;
};
