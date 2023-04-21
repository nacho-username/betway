import Head from 'next/head'
import Header from './Header'
import Navbar from './Navbar'
import { useState } from 'react'
import Modal from './Modal'
import Offer from './Offer'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

type NavigationItem = {
  id: string
  title: string
  href: string
  accentColor: string
}

const Layout = ({ children, nav, offer }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formType, setFormType] = useState('')
  const [activeNavItem, setActiveNavItem] = useState<NavigationItem>({
    id: '0',
    title: 'sports',
    href: '#',
    accentColor: '00a826',
  })

  const handleOpenModal = (formType) => {
    setFormType(formType)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleNavClick = (item: NavigationItem) => {
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
        />
      )}
      <Offer offer={offer} activeNavItem={activeNavItem} />
    </div>
  )
}
export default Layout
