const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('../../package.json').dependencies;
const webpackreact = require('@nrwl/react/plugins/webpack');

module.exports = (config, context) => {
  config = webpackreact(config, context);

  config.entry = './src/index';

  config.output = {
    uniqueName: 'host',
    publicPath: 'http://localhost:3000/',
    clean: true,
  };

  config.optimization.runtimeChunk = false;

  if (config.devServer) {
    config.devServer.port = 3000;
  }

  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'shared',
      filename: 'entry.js',
      remotes: {
        search: 'search@http://localhost:3001/entry.js',
        orders: 'orders@http://localhost:3002/entry.js',
      },
      exposes: {
        './Wrapper': './src/Components/Wrapper',
        './Router': './src/Components/Router',
      },
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom'],
        },
      },
    })
  );

  return config;
};
