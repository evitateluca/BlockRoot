module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/landing',
        permanent: true, // Imposta su `true` se il redirect è permanente (301), `false` se è temporaneo (302)
      },
    ]
  },
}