const url = process.env.STRAPIBASE_URL

export async function fetchHomepageData() {
  const fetchParams = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      {
        homepage {
          data {
            attributes {
              Navigation {
                id
                title
                href
                accentColor
              }
              homepageOffer {
                subText
                text
                btnText
                btnHref
              }
            }
          }
        }
      }
      `,
    }),
  }

  try {
    const res = await fetch(`${url}/graphql`, fetchParams)
    const data = await res.json()

    return {
      homepageData: data,
    }
  } catch (error) {
    console.log(error)
    return {
      error: {
        message: error.message,
      },
    }
  }
}
