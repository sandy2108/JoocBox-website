/** @type {import('next').NextConfig} */

const withVideos = require('next-videos');
const nextConfig = {
  reactStrictMode: true,
  // other Next.js configuration options
};

module.exports = withVideos(nextConfig, {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/videos/',
          },
        },
      ],
    });

    return config;
  },
});
