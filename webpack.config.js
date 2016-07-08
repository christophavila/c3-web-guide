var config = {
    entry: './index.jsx',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|src\/pages\/)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.md$/,
                loader: 'html!highlight!markdown'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    }
};

module.exports = config;
