import Link from 'next/link'
import { useState } from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

interface ModalProps {
  handleCloseModal: () => void
  isModalOpen: boolean
  formType: string
  setFormType: (formType: string) => void
}

const Modal: React.FC<ModalProps> = ({
  isModalOpen,
  handleCloseModal,
  formType,
  setFormType,
}) => {
  const [activeForm, setActiveForm] = useState('login')

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-10 ${
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
        {formType === 'login' ? (
          <LoginForm setFormType={setFormType} />
        ) : (
          <SignupForm setFormType={setFormType} />
        )}
      </div>
    </div>
  )
}
export default Modal
