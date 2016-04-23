module.exports = {
  // See http://brunch.io for documentation.
  files: {
    javascripts: {
      joinTo: {
        'scripts/app.js': 'app/scripts/*.js'
      }
    },
    stylesheets: {joinTo: 'styles/app.css'},
    templates: {joinTo: 'scripts/app.js'}
  },
  plugins: {
    rollup: {
      format: 'iife',
      moduleName: 'none'
    },
    // autoprefixer: {
    //   browsers: ["last 3 version"]
    // }
    // TODO: change to postcss-brunch, but it doesn't seem to work at the moment
    postcss: {
      processors: [
        require('autoprefixer')(['last 3 versions'])
      ]
    }
  },
  modules: {
    wrapper: false,
    definition: false
  },
  conventions: {
    ignored: [
      /[\\/]_/,
      /vendor[\\/]node[\\/]/,
      /vendor[\\/](j?ruby-.*|bundle)[\\/]/,
      'app/scripts/lib/**/*'
    ]
  }
}
