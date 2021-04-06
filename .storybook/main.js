/**
 * @file Configuration.
 * @copyright IBM Security 2020 - 2021
 */

const { merge } = require('webpack-merge');
const { BRANCH, CIRCLE_BRANCH } = process.env;

// Pass the branch name from Netlify, CircleCI, or the local branch.
process.env.STORYBOOK_BRANCH =
  BRANCH || CIRCLE_BRANCH || require('git-branch').sync();

module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-google-analytics',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    './addons/addon-theme/register',
  ],
  stories: ['../src/**/*.stories.*'],
  webpackFinal: async configuration =>
    merge(configuration, {
      module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'sass-loader',
                options: {
                  implementation: require('sass'),
                  sassOptions: {
                    includePaths: ['node_modules'],
                  },
                },
              },
            ],
            sideEffects: true,
          },
        ],
      },
    }),
};
