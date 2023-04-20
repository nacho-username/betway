import Link from 'next/link'
import { useState } from 'react'
import LoginForm from './LoginForm'

interface ModalProps {
  handleCloseModal: () => void
  isModalOpen: boolean
}

const Modal: React.FC<ModalProps> = ({ isModalOpen, handleCloseModal }) => {
  const [activeForm, setActiveForm] = useState('login')

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isModalOpen ? 'block' : 'hidden'
      }`}
    >
      <div className='relative bg-white p-8 w-full max-w-lg'>
        <button
          className='absolute top-0 right-2 p-2'
          onClick={handleCloseModal}
        >
          <span className='text-lg'>X</span>
        </button>
        <h2 className='text-2xl font-bold text-center'>Login</h2>
        <p className='mb-4 text-sm font-light text-center'>
          New customer{' '}
          <span className='underline text-betway-green'>Register here</span>
        </p>
        <LoginForm />
      </div>
    </div>
  )
}
export default Modal
