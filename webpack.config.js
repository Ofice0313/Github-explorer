// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

// const isDevelopment = process.env.NODE_ENV !== 'production';

// module.exports = {
//     mode: isDevelopment ? 'development' : 'production',
//     devtool: isDevelopment ? 'eval-source-map' : 'source-map',
//     entry: path.resolve(__dirname, 'src', 'index.jsx'),
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js'
//     },
//     resolve: {
//         extensions: ['.js', '.jsx'],
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: path.resolve(__dirname, 'public', 'index.html')
//         })
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.jsx$/,
//                 exclude: /node_modules/,
//                 use: 'babel-loader',
//             },
//             {
//                 test: /\.css$/,

//                 use: ['style-loader', 'css-loader'],
//             }
//         ],
//     },
//     devServer: {
//         static: path.resolve(__dirname, 'dist'),
//         port: 3000,
//         open: true,
//     },
// };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                use: 'babel-loader',
            },
            {
                test: /\.scss$/, // loaders para CSS
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'), // HTML base
        }),
    ],
    mode: 'development', // ou 'production' no build
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 3000,
        open: true, // abre o navegador automaticamente
        hot: true,  // HMR (reload sem recarregar a página inteira)
    },
};