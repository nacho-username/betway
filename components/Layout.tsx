import Head from 'next/head'
import Header from './Header'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className='h-screen'>
      <Head>
        <title>Betway | 100% deposit match up to R1,000 | Sports Betting</title>
        <meta
          name='description'
          content='Bet with Betway, the best online sports betting platform and get up to R1,000 when you register as a 100% 1st deposit match. '
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Navbar />
      <main className='h-screen'>{children}</main>
    </div>
  )
}
export default Layout
