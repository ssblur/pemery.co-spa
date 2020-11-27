/**
 * Webpack Config
 * @author Patrick Emery
 */
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports =  {
    entry: './src/index.js',
    output: {
        filename: 'index.pack.js',
        path: __dirname + '/dist',
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: { esModule: false },
                    },
                ]
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
}