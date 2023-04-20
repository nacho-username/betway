import Image from 'next/image'
import Layout from '../components/Layout'
import Offer from '../components/Offer'
import { fetchHomepageData } from '../helper'

function Homepage({ homepageData }) {
  const { Navigation, homepageOffer } =
    homepageData.data.homepage.data.attributes
  return (
    <Layout nav={Navigation} offer={homepageOffer}>
      <Image
        className='object-cover mt-24 z-0'
        src='/assets/the-hunch-mobile.webp'
        alt='The Hutch Mobile'
        fill
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const { homepageData, error } = await fetchHomepageData()

  if (error) {
    return {
      props: { error },
    }
  }

  return {
    props: { homepageData },
  }
}

export default Homepage
