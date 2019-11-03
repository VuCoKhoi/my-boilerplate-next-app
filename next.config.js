module.exports = {
  poweredByHeader: false,

  // deploy to github page
  assetPrefix:
    process.env.NODE_ENV === 'production' ? '/my-boilerplate-next-app' : '',
  // publicRuntimeConfig: {
  //   // used in '/components/Link.js/', for more details go to the component itself
  //   linkPrefix: process.env.NODE_ENV === "production" ? "/test-deploy" : ""
  // }
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    // eslint-disable-next-line no-param-reassign
    config.node = {
      fs: 'empty',
    };
    return config;
  },
};
