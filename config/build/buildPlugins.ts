import webpack, { WebpackPluginInstance, ProgressPlugin, DefinePlugin } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

export function buildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
    const plugins = [];
    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }
    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        ...plugins,
    ];
}
