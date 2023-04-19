import Image from 'next/image'
import Layout from '../components/Layout'

function Homepage() {
  return (
    <Layout>
      <div className='w-full h-full'>
        <Image
          className='object-cover mt-24 z-0'
          src='/assets/the-hunch-mobile.webp'
          alt='The Hutch Mobile'
          fill
        />
      </div>
    </Layout>
  )
}

export default Homepage
