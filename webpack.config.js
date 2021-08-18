const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    const isDevelopment = argv.mode === "development";
    const hashByMode = argv.mode === "development" ? "hash" : "contenthash";

    return {
        entry: "./assets/javascripts/application.js",
        output: {
            filename: `[name].[${hashByMode}].bundle.js`,
            path: path.resolve(__dirname, "dist"),
        },
        devtool: isDevelopment ? "cheap-source-map" : "source-map",
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            open: true,
            port: 9000
        },
        mode: isDevelopment ? 'development' : 'production',
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-proposal-object-rest-spread']
                        }
                    }
                },
                {
                    test: /\.html$/i,
                    loader: 'html-loader',
                },
                {
                    test: /\.scss/,
                    use: [
                        isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
                        "css-loader",
                        {
                            loader: "postcss-loader",
                        },
                        "sass-loader",
                    ],
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: `[name].[${hashByMode}].css`,
            }),
            new HTMLWebpackPlugin({
                title: "Prueba Técnica The Cocktail",
                template: "./index.html"
            })
        ]
    }
}