import Head from 'next/head'
import Header from './Header'
import Navbar from './Navbar'
import { useState } from 'react'
import Modal from './Modal'
import Offer from './Offer'

// import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import AnimateMoney from './AnimateMoney'

type NavigationItem = {
  id: string
  title: string
  href: string
  accentColor: string
}

const Layout = ({ children, nav, offer }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formType, setFormType] = useState('')
  const [moneyAnimate, setMoneyAnimate] = useState(false)
  const [activeNavItem, setActiveNavItem] = useState<NavigationItem>({
    id: '0',
    title: 'sports',
    href: '#',
    accentColor: '00a826',
  })

  const handleMoneyAnimation = () => {
    setMoneyAnimate(!moneyAnimate)
  }

  const handleOpenModal = (formType) => {
    setFormType(formType)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    moneyAnimate && setMoneyAnimate(false)
  }

  const handleNavClick = (item: NavigationItem) => {
    console.log(item.href)
    setActiveNavItem(item)
  }

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
      <AnimateMoney moneyAnimate={moneyAnimate} />
      <ToastContainer />
      <Header
        onOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
      />
      <Navbar
        nav={nav}
        handleNavClick={handleNavClick}
        activeNavItem={activeNavItem}
      />
      <main>{children}</main>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          handleCloseModal={handleCloseModal}
          formType={formType}
          setFormType={setFormType}
          handleMoneyAnimation={handleMoneyAnimation}
        />
      )}
      <Offer
        offer={offer}
        activeNavItem={activeNavItem}
        onOpenModal={handleOpenModal}
        handleMoneyAnimation={handleMoneyAnimation}
      />
    </div>
  )
}
export default Layout
