const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "src/dist/bundle.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: ["./src/app/main.ts", "./src/css/main.scss"],
    output: {
        filename: "src/dist/bundle.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { 
                test: /\.tsx?$/, 
                loader: "ts-loader" 
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        extractSass,
        new webpack.ContextReplacementPlugin(
            // if you have anymore problems tweet me at @gdi2290
            // The (\\|\/) piece accounts for path separators for Windows and MacOS
            /(.+)?angular(\\|\/)core(.+)?/,
            path.join(__dirname, 'src'), // location of your src
            {} // a map of your routes 
        )
    ]    
};