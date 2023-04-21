import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-toastify'

interface FormValues {
  [key: string]: string
}

const LoginForm = ({ setFormType }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [errors, setErrors] = useState({
    emptyUsername: false,
    emptyPassword: false,
    invalidEmail: false,
    invalidPassword: false,
  })
  const [formValues, setFormValues] = useState<FormValues>({
    username: '',
    password: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await axios.post('/api/signin', formValues)
      setSuccessMessage(res.data.message)
      setErrors({
        emptyUsername: false,
        emptyPassword: false,
        invalidEmail: false,
        invalidPassword: false,
      })

      if (res.data.success) {
        setFormValues({
          username: '',
          password: '',
        })
      }
      toast('Login Successful', {
        hideProgressBar: true,
        autoClose: 2000,
        type: 'success',
      })
      console.log(`%cWelcome, ${formValues.username}`, `color: lightgreen`)
    } catch (err: any) {
      console.log('Error ->', errors)
      setErrors({
        emptyUsername: err.response.data.emptyUsername || '',
        emptyPassword: err.response.data.emptyPassword || '',
        invalidEmail: err.response.data.invalidEmail || '',
        invalidPassword: err.response.data.invalidPassword || '',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEmailErrors = () => {
    if (errors.emptyUsername) {
      return (
        <p className='text-red-500 text-xs italic mt-1'>
          Plese enter an email address
        </p>
      )
    } else if (errors.invalidEmail) {
      return (
        <p className='text-red-500 text-xs italic mt-1'>
          Plese enter a valid email
        </p>
      )
    }
  }

  const handlePasswordErrors = () => {
    if (errors.emptyPassword) {
      return (
        <p className='text-red-500 text-xs italic mt-1'>
          Plese enter a password
        </p>
      )
    } else if (errors.invalidPassword) {
      return (
        <p className='text-red-500 text-xs italic mt-1'>
          Your password must be at least 8 characters
        </p>
      )
    }
  }

  return (
    <>
      <h2 className='text-2xl font-bold text-center'>Login</h2>
      <p className='mb-4 text-sm font-light text-center'>
        New customer{' '}
        <span
          onClick={() => setFormType('signup')}
          className='underline text-betway-green'
        ></span>
      </p>
      <form onSubmit={handleFormSubmit}>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 text-sm mb-2'>
            Username
          </label>
          <input
            type='email'
            name='username'
            id='username'
            placeholder='Username'
            value={formValues.email}
            onChange={handleInputChange}
            className={`border rounded w-full py-2 px-3 text-gray-700 ${
              errors.emptyUsername ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {handleEmailErrors()}
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
            placeholder='Password'
            value={formValues.password}
            onChange={handleInputChange}
            className={`border rounded w-full py-2 px-3 text-gray-700 ${
              errors.emptyPassword ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {handlePasswordErrors()}
        </div>
        {successMessage && (
          <p className='text-green-300 font-light italic -mt-2 mb-2'>
            {successMessage}
          </p>
        )}
        <button
          type='submit'
          className='bg-betway-green text-white py-2 w-52 block mx-auto hover:bg-green-700'
          disabled={isSubmitting}
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
    </>
  )
}
export default LoginForm
