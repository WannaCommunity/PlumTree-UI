/**
 * Prefix the image with the API gateway route to get the resized/optimized
 * image.
 */
const getUploadedImageUri = (image, dimensions) => {
  if (!image) return null

  return dimensions ? `/api/upload/${dimensions}/${image}` : `https://{DOMAIN}/uploads/${image}`
}

/**
 * Gets the original uploaded image URI (pre-processed original size)
 */
const getOrigUploadedImageUri = (image) => {
  if (!image) return null

  return `https://{DOMAIN}/uploads-orig/${image}`
}

/**
 * Checks an email string is valid.
 */
const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const sendGoogleAnalyticsPageView = page => {
  if (window.ga) {
    window.ga('set', 'page', location.pathname + location.search)
    window.ga('send', 'pageview')
  }
}

export {
  getUploadedImageUri,
  getOrigUploadedImageUri,
  isValidEmail,
  sendGoogleAnalyticsPageView
}
