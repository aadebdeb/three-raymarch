const path = require('path');
const EsmWebpackPlugin = require('@purtuga/esm-webpack-plugin');

const development = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'umd'),
    filename: 'three-raymarch.js',
    library: 'THREE_RAYMARCH',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.ts(x*)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.umd.json'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
};

const production = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'umd'),
    filename: 'three-raymarch.min.js',
    library: 'THREE_RAYMARCH',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.ts(x*)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.umd.json'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
};

const devJsm = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'umd'),
    filename: 'three-raymarch.module.js',
    library: 'THREE_RAYMARCH',
    libraryTarget: 'var',
  },
  module: {
    rules: [
      {
        test: /\.ts(x*)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.umd.json'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new EsmWebpackPlugin()
  ]
};

module.exports = [development, production, devJsm];