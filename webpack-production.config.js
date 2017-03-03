var path = require('path');
// TODO 
var config = [{
    context: path.join(__dirname, 'src'),
    entry: [
        './main.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']}
        ]
    }
}];

module.exports = config;
