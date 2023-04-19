import Image from 'next/image'
import Layout from '../components/Layout'

function Homepage() {
  return (
    <Layout>
      <Image
        className=''
        src='/assets/the-hunch-mobile.webp'
        alt='The Hutch Mobile'
        width={1920}
        height={1080}
      />
    </Layout>
  )
}

export default Homepage
