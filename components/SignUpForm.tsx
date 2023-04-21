import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-toastify'

interface FormValues {
  [key: string]: string
}

const SignupForm = ({ setFormType }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [errors, setErrors] = useState({
    emptyName: false,
    emptyEmail: false,
    emptyPassword: false,
    emptyConfirmPassword: false,
    invalidEmail: false,
    invalidPassword: false,
    invalidConfirmPassword: false,
  })
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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
        emptyName: false,
        emptyEmail: false,
        emptyPassword: false,
        emptyConfirmPassword: false,
        invalidEmail: false,
        invalidPassword: false,
        invalidConfirmPassword: false,
      })

      if (res.data.success) {
        setFormValues({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
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
        emptyName: err.response.data.emptyName || '',
        emptyEmail: err.response.data.emptyEmail || '',
        emptyPassword: err.response.data.emptyPassword || '',
        emptyConfirmPassword: err.response.data.emptyConfirmPassword || '',
        invalidEmail: err.response.data.invalidEmail || '',
        invalidPassword: err.response.data.invalidPassword || '',
        invalidConfirmPassword: err.response.data.invalidConfirmPassword || '',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEmailErrors = () => {
    if (errors.emptyName) {
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
    } else if (errors.invalidConfirmPassword) {
      return (
        <p className='text-red-500 text-xs italic mt-1'>
          Your passwords do not match
        </p>
      )
    }
  }

  return (
    <>
      <h2 className='text-2xl font-bold text-center'>Register</h2>
      <p className='mb-4 text-sm font-light text-center'>
        Already have an account?{' '}
        <span
          onClick={() => setFormType('login')}
          className='underline text-betway-green cursor-pointer'
        >
          Login here
        </span>
      </p>
      <form onSubmit={handleFormSubmit}>
        <div className='mb-2'>
          <label htmlFor='name' className='block text-gray-700 text-sm mb-2'>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Full name'
            value={formValues.name}
            onChange={handleInputChange}
            className={`border rounded w-full py-2 px-3 text-gray-700 ${
              errors.emptyName ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 text-sm mb-2'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email address'
            value={formValues.email}
            onChange={handleInputChange}
            className={`border rounded w-full py-2 px-3 text-gray-700 ${
              errors.emptyEmail ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {handleEmailErrors()}
        </div>
        <div className='mb-2'>
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
          <input
            type='password'
            name='confirmPassword'
            id='confirmPassword'
            placeholder='confirmPassword'
            value={formValues.confirmPassword}
            onChange={handleInputChange}
            className={`border rounded w-full mt-2 py-2 px-3 text-gray-700 ${
              errors.emptyConfirmPassword ? 'border-red-500' : 'border-gray-300'
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
          Register
        </button>
        <Link
          href='/'
          className='text-xs block text-center mt-2 text-betway-green'
        ></Link>
      </form>
    </>
  )
}
export default SignupForm
