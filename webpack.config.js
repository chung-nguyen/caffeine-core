var path = require('path');
var webpack = require('webpack');

console.log(process.env.NODE_ENV);

module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: "dist/bundle.js",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ["es2015"],
                    plugins: ["babel-plugin-syntax-flow", "babel-plugin-transform-flow-strip-types", 'transform-class-properties', 'transform-runtime']
                }
            }
        ]
    }
};
