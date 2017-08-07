const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: "./src/index.tsx",

    output: {
        filename: "app.js",
        path: path.resolve(__dirname, './dist')
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.scss']
    },

    module: {
        loaders: [{
            test: /\.tsx$/,
            loader: 'ts-loader',
            options: {
                configFileName: 'tsconfig.json'
            }
        },
        {
            test: /\.s?css$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader",
            ]
        }],
    },
    devServer: {
        proxy: {
            '/api': 'http://localhost:3000'
        },
        stats: 'errors-only'
    }
};