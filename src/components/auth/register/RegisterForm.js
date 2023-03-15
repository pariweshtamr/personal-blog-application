import { registerUser } from "@/utils/axiosHelper"
import Link from "next/link"
import { useState } from "react"
import { Container, Spinner } from "react-bootstrap"
import { toast } from "react-toastify"
import { AuthStyles } from "../authStyles"
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material"

const initialState = {
  fName: "",
  lName: "",
  email: "",
  password: "",
  confirmPassword: "",
}
const RegisterForm = () => {
  const [formData, setFormData] = useState(initialState)
  const [isLoading, setIsLoading] = useState(false)
  const [reveal, setReveal] = useState(false)
  const [meter, setMeter] = useState(false)

  const atLeastOneUpperCase = /[A-Z]/g // capital letters from A - Z
  const atLeastOneLowerCase = /[a-z]/g // capital letters from a - z
  const atleastOneNumeric = /[0-9]/g // numbers from 0 - 9
  const atLeastOneSpecialChar = /[!@#$%^&*()_+?./-]/g // any of the special characters with the square brackets
  const sevenCharsOrMore = /.{7,}/g // seven or more characters

  const passwordTracker = {
    uppercase: formData.password.match(atLeastOneUpperCase),
    lowercase: formData.password.match(atLeastOneLowerCase),
    numeric: formData.password.match(atleastOneNumeric),
    specialChar: formData.password.match(atLeastOneSpecialChar),
    sevenOrMoreChars: formData.password.match(sevenCharsOrMore),
  }

  const passwordStrength = Object.values(passwordTracker).filter(
    (value) => value
  ).length

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { confirmPassword, ...rest } = formData
    if (confirmPassword !== rest.password) {
      return toast.error("Passwords do not match!")
    }

    if (passwordStrength !== 5) return
    setIsLoading(true)
    const { status, message } = await registerUser(rest)
    status === "success" && toast[status](message)
    setIsLoading(false)
    setFormData(initialState)
  }

  return (
    <AuthStyles passwordStrength={passwordStrength}>
      <Container className="auth-container">
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fName"
            placeholder="First name"
            onChange={handleChange}
            value={formData.fName}
            required
          />
          <input
            type="text"
            name="lName"
            placeholder="Last name"
            onChange={handleChange}
            value={formData.lName}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <div className="pw-input">
            <input
              type={reveal ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onKeyDown={() => setMeter(true)}
              value={formData.password}
              required
            />
            {!reveal ? (
              <VisibilityOffOutlined
                className="show-pw"
                onClick={() => setReveal(true)}
              />
            ) : (
              <VisibilityOutlined
                className="show-pw"
                onClick={() => setReveal(false)}
              />
            )}
          </div>
          {meter && formData.password && (
            <>
              <div className="password-strength-text mt-2">
                Password Strength:{" "}
                {passwordStrength === 1
                  ? "Poor"
                  : passwordStrength === 2
                  ? "Fair"
                  : passwordStrength === 3
                  ? "Good"
                  : passwordStrength === 4
                  ? "Good"
                  : passwordStrength === 5
                  ? "Excellent"
                  : ""}
              </div>
              <div className="password-strength-meter"></div>

              <div className="password-rules">
                {passwordStrength < 5 && "Must contain "}
                {!passwordTracker.uppercase && "uppercase, "}
                {!passwordTracker.lowercase && "lowercase, "}
                {!passwordTracker.specialChar && "special character, "}
                {!passwordTracker.numeric && "number, "}
                {!passwordTracker.sevenOrMoreChars && "seven character or more"}
              </div>
            </>
          )}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={formData.confirmPassword}
            required
          />

          <button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Spinner animation="grow" variant="light" />
            ) : (
              "REGISTER"
            )}
          </button>
        </form>
        <p>
          Have an account? <Link href="/login">Sign In.</Link>
        </p>
      </Container>
    </AuthStyles>
  )
}
export default RegisterForm
