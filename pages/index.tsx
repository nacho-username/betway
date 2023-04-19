import Image from 'next/image'
import Layout from '../components/Layout'
import Offer from '../components/Offer'

function Homepage() {
  return (
    <Layout>
      <Image
        className='object-cover mt-24 z-0'
        src='/assets/the-hunch-mobile.webp'
        alt='The Hutch Mobile'
        fill
      />
      <Offer />
    </Layout>
  )
}

export default Homepage
