import Link from 'next/link'
import { useState } from 'react'

interface ModalProps {
  isModalOpen: boolean
}

interface FormValues {
  [key: string]: string
}

const Modal: React.FC<ModalProps> = ({ isModalOpen }) => {
  const [activeForm, setActiveForm] = useState('login')
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
  })

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isModalOpen ? 'block' : 'hidden'
      }`}
    >
      <div className='bg-white rounded-lg p-8 w-full max-w-lg'>
        <h2 className='text-2xl font-bold mb-4'>Login</h2>
        <p className='mb-4 text-lg font-bold'>
          New customer
          <span className='underline text-betway-green'>Register here</span>
        </p>
      </div>
    </div>
  )
}
export default Modal
