const path = require('path');
const PATHS = {
    build: path.join(__dirname, 'target', 'classes', 'META-INF', 'resources', 'webjars')
};

module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ts[x]?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico|svg|woff|svg|eot|ttf|woff2)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', "postcss-loader"]
            }
        ]
    },
    devServer: {
        contentBase: './src/static',
        historyApiFallback: true
    }
};
