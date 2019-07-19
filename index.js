// ref:
// - https://umijs.org/plugin/develop.html

module.exports = function (api, options = {}) {

  const features = options.features || []
  const flags = options.flags || 'gated'

  const params = {
    flags
  }

  if (features && Array.isArray(features)) {
    params.features = features.join(',')
  }

  const querystring = Object.keys(params).map(key => {
    return `${key}=${params[key]}`
  }).join('&')

  // Example: output the webpack config
  api.addHTMLHeadScript({
    src: `//polyfill.io/v3/polyfill.min.js?${querystring}`
  })
}
