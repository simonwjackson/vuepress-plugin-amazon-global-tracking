const { path } = require('@vuepress/shared-utils')

module.exports = (options = {}, context) => {
  return {
    define() {
      return {
        AMAZON_INSTANCE_ID: options.id
      }
    },

    enhanceAppFiles: [
      path.resolve(__dirname, 'inject.js')
    ]
  }
}