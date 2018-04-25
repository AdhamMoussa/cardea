const path = require('path');

module.exports = {
    entry: {
        App: './app/assets/scripts/app.js',
        Vendor: './app/assets/scripts/Vendor.js'
    },
    output: {
        path: path.resolve(__dirname, 'app/temp/scripts'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
};