const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'), // ficheiro principal
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true, // limpa dist a cada build
    },
    resolve: {
        extensions: ['.js', '.jsx'], // permite importar sem extensão
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Babel para JS/JSX
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                },
            },
            {
                test: /\.scss$/, // loaders para CSS
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'), // HTML base
        }),
    ].filter(Boolean),
    mode: 'development', // ou 'production' no build
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 3000,
        open: true, // abre o navegador automaticamente
        hot: true,  // HMR (reload sem recarregar a página inteira)
    },
};