import axios from 'axios'

/* eslint-disable import/no-anonymous-default-export */
export default async function (req: any, res: any) {
  try {
    const { username, password } = req.body

    let tempErrors = {
      emptyUsername: false,
      emptyPassword: false,
      invalidEmail: false,
      invalidPassword: false,
    }
    let hasError = false

    // Input Validation
    if (!username.length || !password.length) {
      hasError = true
      tempErrors.emptyUsername = username.length == 0
      tempErrors.emptyPassword = password.length == 0
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(username)) {
      hasError = true
      tempErrors.invalidEmail = true
    }

    if (password.length < 8) {
      hasError = true
      tempErrors.invalidPassword = true
    }

    if (hasError) {
      return res.status(400).json(tempErrors)
    }

    await axios.post(
      'https://fn-uks-dev-eng-fe-mock-svc.azurewebsites.net/api/sign-in',
      {
        email: username,
        password,
      }
    )

    if (!hasError) {
      return res.status(200).json({ message: 'Sign in successful' })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'An error occurred. Please try again.' })
  }
}
