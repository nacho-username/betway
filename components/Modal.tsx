import Link from 'next/link'
import { useState } from 'react'

interface ModalProps {
  handleCloseModal: () => void
  isModalOpen: boolean
}

interface FormValues {
  [key: string]: string
}

const Modal: React.FC<ModalProps> = ({ isModalOpen, handleCloseModal }) => {
  const [activeForm, setActiveForm] = useState('login')
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formValues)
  }

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
        <form onSubmit={handleFormSubmit}>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700 text-sm mb-2'>
              Username
            </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Username'
              value={formValues.email}
              onChange={handleInputChange}
              className='border rounded w-full py-2 px-3 text-gray-700'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-gray-700 text-sm mb-2'
            >
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Username'
              value={formValues.password}
              onChange={handleInputChange}
              className='border rounded w-full py-2 px-3 text-gray-700'
            />
          </div>
          <button
            type='submit'
            className='bg-betway-green text-white py-2 w-52 block mx-auto hover:bg-green-700'
          >
            Login
          </button>
          <Link
            href='/'
            className='text-xs block text-center mt-2 text-betway-green'
          >
            Forgot password/username?
          </Link>
        </form>
      </div>
    </div>
  )
}
export default Modal
