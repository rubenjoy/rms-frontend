const path = require('path');

const config = [{
    entry: [
        path.join(__dirname, '/src/app/app.js')
    ],
    eslint: {
        configFile: './.eslintrc'
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
        ],
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']}
        ]
    }
}];

module.exports = config;
