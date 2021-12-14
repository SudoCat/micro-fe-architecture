const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('../../package.json').dependencies;
const webpackreact = require('@nrwl/react/plugins/webpack');

module.exports = (config, context) => {
  config = webpackreact(config, context);

  config.output = {
    uniqueName: 'orders',
    publicPath: 'http://localhost:3002/',
    clean: true,
  };
  config.optimization.runtimeChunk = false;

  config.devServer.port = 3002;

  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'orders',
      filename: 'entry.js',
      remotes: {},
      exposes: {
        './routes': './src/routes/index.tsx',
      },
      shared: {
        ...deps,
        react: { singleton: true, requiredVersion: deps.react },
        'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
        '@reward-platform/example2': {
          requiredVersion: require('../../libs/shared/ui/example2/package.json')
            .version,
        },
      },
    })
  );

  return config;
};
