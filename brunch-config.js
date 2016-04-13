module.exports = {
  // See http://brunch.io for documentation.
  files: {
    javascripts: {
      joinTo: {
        'app.js': 'app/scripts/*.js'
      }
    },
    stylesheets: {joinTo: 'app.css'},
    templates: {joinTo: 'app.js'}
  },
  plugins: {
    rollup: {
      format: 'iife',
      moduleName: 'none'
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
