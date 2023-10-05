// const path = require('path');

// module.exports = {
//     entry: "./src/app/main.ts",
//     output: {
//         path: path.resolve(__dirname, 'src/dist'),
//         filename: "bundle.js"
//     },
//     resolve: {
//         // Add '.ts' and '.tsx' as a resolvable extension.
//         extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
//     },
//     module: {
//         rules: [
//             // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
//             { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }
//         ]
//     }
// };

const path = require('path');

module.exports = {
  entry: './src/app/main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/dist'),
  },
};