import path from 'path';
import webpack from 'webpack';
import express from 'express';
import session from 'express-session';
import graphQLHTTP from 'express-graphql';
import WebpackDevServer from 'webpack-dev-server';
import historyApiFallback from 'connect-history-api-fallback';
import chalk from 'chalk';
import cors from 'cors';
import webpackConfig from '../webpack.config';
import config from './config/environment';
import schema from './app/schema';

require('babel-polyfill');
let relayServer = null;

const graphql = express();
graphql.use(cors());
graphql.use(session({ secret: 'some unusual secret', cookie: { maxAge: 60000 } }));
graphql.use('/', graphQLHTTP(request => ({
  graphiql: true,
  pretty: true,
  schema,
  context: { request },
  formatError: (error) => {
    console.log('formatError', error);
    return error;
  },
})));
graphql.listen(config.graphql.port, () =>
  console.log(chalk.green(`GraphQL is listening on port ${config.graphql.port}`))
);

if (config.env === 'development') {
  // Launch GraphQL

  // Launch Relay by using webpack.config.js
  relayServer = new WebpackDevServer(webpack(webpackConfig), {
    contentBase: '/build/',
    public: '172.20.2.75',
    proxy: {
      '/graphql': `http://localhost:${config.graphql.port}`
    },
    // stats: {
    //   colors: true,
    //   hash: false,
    //   version: false,
    //   timings: false,
    //   assets: false,
    //   chunks: false,
    //   modules: false,
    //   reasons: false,
    //   children: false,
    //   source: false,
    //   errors: false,
    //   errorDetails: false,
    //   warnings: false,
    //   publicPath: false
    // },
    hot: true,
    inline: true,
    historyApiFallback: true
  });

  // Serve static resources
  relayServer.use('/', express.static(path.join(__dirname, '../build')));
  relayServer.use('/graphiql', express.static(path.join(__dirname, '../public/graphiql')));
} else if (config.env === 'production') {
  // Launch Relay by creating a normal express server
  relayServer = express();
  relayServer.use(cors());
  relayServer.use(historyApiFallback());
  relayServer.use('/', express.static(path.join(__dirname, '../build')));
}

relayServer.listen(config.port, () =>
  console.log(chalk.green(`Relay is listening on port ${config.port}`))
);