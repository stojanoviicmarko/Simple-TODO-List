const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        main: './src/js/index.js'
    },
    devtool: 'inline-source-map',
    plugins: [
		new HtmlWebpackPlugin({
			title: 'My App',
			filename: 'index.html',
			template: './src/index.html'
		})
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    }
}