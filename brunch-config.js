module.exports = {
  // See http://brunch.io for documentation.
  files: {
    javascripts: {
      joinTo: {
        'scripts/app.js': 'app/scripts/*.ts'
      }
    },
    stylesheets: {joinTo: 'styles/app.css'},
    templates: {joinTo: 'scripts/app.js'}
  },
  plugins: {
    rollup: {
      extension: 'ts',
      format: 'iife',
      moduleName: 'none',
      plugins: [require('rollup-plugin-typescript')()]
    },
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
  npm: {
    enabled: false
  },
  conventions: {
    ignored: [
      /[\\/]_/,
      /vendor[\\/]node[\\/]/,
      /vendor[\\/](j?ruby-.*|bundle)[\\/]/
    ]
  }
}
