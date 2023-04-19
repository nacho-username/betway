import Head from 'next/head'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Betway | 100% deposit match up to R1,000 | Sports Betting</title>
        <meta
          name='description'
          content='Bet with Betway, the best online sports betting platform and get up to R1,000 when you register as a 100% 1st deposit match. '
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  )
}
export default Layout