import Link from 'next/link'
import { useState } from 'react'

interface FormValues {
  [key: string]: string
}

const LoginForm = () => {
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
    <>
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
    </>
  )
}
export default LoginForm
