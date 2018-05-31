let webpack = require("webpack");
let path = require('path');

let DIST_DIR = path.resolve(_dirname, 'dist');
let SRC_DIR = path.resolve(_dirname, 'src');

let config = {
    entry: SRC_DIR + '/App/index.js',
    output: {
        path: DIST_DIR + '/App',
        filename: 'bundle.js',
        publicPath: '/App/'
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env', 'stage-2']
                }
            }
        ]
    }
};

module.exports = config;
