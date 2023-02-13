import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCSSLoaders } from './loaders/buildCSSLoaders';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [['i18next-extract', {
                    locales: ['ru', 'en'],
                    keyAsDefaultValue: true,
                }]],
            },
        },
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const scssLoader = buildCSSLoaders(isDev);

    const typecriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [babelLoader, typecriptLoader, scssLoader, svgLoader, fileLoader];
}
