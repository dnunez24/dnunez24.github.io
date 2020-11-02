// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require("@next/mdx")();

module.exports = withMDX({
  extension: /\.mdx?$/,
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      // eslint-disable-next-line no-param-reassign
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
});
