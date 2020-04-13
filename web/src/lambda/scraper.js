const metascraper = require('metascraper')([
  require('metascraper-title')(),
  require('metascraper-logo')(),
  require('metascraper-logo-favicon')(),
])

const got = require('got')

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST'
}

export async function handler(event) {
  try {
    const hostnames = JSON.parse(event.body)
    const metadata = hostnames.map(async hostname => {
      try {
        const { body: html, url } = await got(hostname)
        const { title, logo } = await metascraper({ html, url })
        return { hostname, title, logo }
      } catch {
        return { hostname, logo: null }
      }
    })

    const response = await Promise.all(metadata)
      .catch(err => { console.log('err', JSON.stringify(err))})

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(response)
    }
  } catch (err) {
    console.log(err)

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ msg: err.message })
    }
  }
}
