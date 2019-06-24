module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-font-base64')({
          // no options yet
    }),
    require('cssnano')({
      preset: ['default', {
        reduceTransforms: true
      }]
    })
  ]
};
