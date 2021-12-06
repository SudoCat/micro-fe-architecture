const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('../../package.json').dependencies;
const webpackreact = require('@nrwl/react/plugins/webpack');

module.exports = (config, context) => {
  config = webpackreact(config, context);

  config.output = {
    uniqueName: 'search',
    publicPath: 'http://localhost:3001/',
    clean: true,
  };
  config.optimization.runtimeChunk = false;

  config.devServer.port = 3001;

  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'search',
      filename: 'entry.js',
      remotes: {},
      exposes: {
        './routes': './src/routes.tsx',
        './Button': './src/components/Button.tsx',
      },
      shared: {
        ...deps,
        react: { singleton: true, requiredVersion: deps.react },
        'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
      },
    })
  );

  return config;
};
