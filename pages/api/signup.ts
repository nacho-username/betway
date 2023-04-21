import axios from 'axios'

/* eslint-disable import/no-anonymous-default-export */
export default async function (req: any, res: any) {
  try {
    const { name, email, password, confirmationPassword } = req.body

    let tempErrors = {
      emptyName: false,
      emptyEmail: false,
      emptyPassword: false,
      emptyConfirmPassword: false,
      invalidEmail: false,
      invalidPassword: false,
      invalidConfirmPassword: false,
    }
    let hasError = false

    // Input Validation
    if (
      !name.length ||
      !email.length ||
      !password.length ||
      !confirmationPassword.length
    ) {
      hasError = true
      tempErrors.emptyName = name.length == 0
      tempErrors.emptyEmail = email.length == 0
      tempErrors.emptyPassword = password.length == 0
      tempErrors.emptyConfirmPassword = confirmationPassword.length == 0
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      hasError = true
      tempErrors.invalidEmail = true
    }

    if (password.length < 8) {
      hasError = true
      tempErrors.invalidPassword = true
    }

    if (password !== confirmationPassword) {
      hasError = true
      tempErrors.invalidConfirmPassword = true
    }

    if (hasError) {
      return res.status(400).json(tempErrors)
    }

    await axios.post(
      'https://fn-uks-dev-eng-fe-mock-svc.azurewebsites.net/api/sign-in',
      {
        name,
        email,
        password,
      }
    )

    if (!hasError) {
      return res.status(200).json({ message: 'Sign up successful' })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'An error occurred. Please try again.' })
  }
}
