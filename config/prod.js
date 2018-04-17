module.exports = {
  "googleWebOauth": {
    "client_id": process.env.GOOGLE_CLIENT_ID,
    "client_secret": process.env.GOOGLE_CLIENT_SECRET
  },
  "mlabURI": process.env.MLAB_URI,
  "cookieKey": process.env.COOKIE_KEY,
  "stripe": {
    "pubKey": process.env.STRIPE_PUB_KEY,
    "secretKey": process.env.STRIPE_SECRET_KEY
  }
}