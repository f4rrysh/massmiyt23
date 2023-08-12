require('dotenv').config();

const { resolve } = require('node:path');
const { readdirSync } = require('node:fs');

const webpack = require('webpack');
const Terser = require('terser-webpack-plugin');

/**
 * Get the entry points of the website
 *
 * @returns {webpack.EntryObject}
 */
function getEntryObject() {
    const entry = {};

    readdirSync(resolve(process.cwd(), 'pages'))
        .filter((file) => file.endsWith('.tsx'))
        .map((file) => {
            const fileName = filePath.split('.').shift().toLowerCase();
            const filePath = resolve(process.cwd(), 'pages', file);

            entry[fileName] = filePath;
        });

    return entry;
}

/**
 * Get the mode for webpack by checking the environemtal variables and will
 * fallback to `'development'`
 *
 * @returns {'development' | 'production' | 'none'}
 */
function getMode() {
    const mode = process.env['NODE_ENV'] || process.env['ENV'] || 'development';

    switch (mode.toLowerCase()) {
        case 'development':
        case 'production':
        case 'none':
            return mode.toLowerCase();

        default:
            return 'none';
    }
}

// Constant(s)
const IS_DEV = getMode() === 'development';
const IS_PROD = !IS_DEV;

/** @type {webpack.Configuration} */
const config = {
    ignoreWarnings: IS_PROD,
    devtool: IS_DEV ? 'source-map' : false,
    entry: getEntryObject(),
    mode: getMode(),
    output: {
        filename: `scripts/[${IS_DEV ? 'name' : 'contenthash'}].js`,
        path: resolve(process.cwd(), 'build/static'),
        clean: IS_PROD
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
        alias: {}
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: 'esbuild-loader',
                options: {
                    target: 'es2020',
                    loader: 'tsx'
                }
            }
        ]
    },
    optimization: {
        minimizer: [new Terser()]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        hot: true
    }
};

module.exports = config;
