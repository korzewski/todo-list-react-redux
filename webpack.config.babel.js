import base from './webpack.base.config.babel.js';

const devServer = {
  port: 8080,
  host: 'localhost',
  contentBase: `${__dirname}/example`,
  stats: {
    chunks: false,
    children: false,
  },
};

const config = base.getConfig({
  devServer,
  devtool: 'eval',
  debug: true,
});

export default config;
