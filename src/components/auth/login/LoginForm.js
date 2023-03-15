import Link from "next/link"
import { useRef, useState } from "react"
import { Container } from "react-bootstrap"
import { AuthStyles } from "../authStyles"
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material"
import { loginUser } from "@/utils/axiosHelper"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { loginAction } from "@/redux/Auth/authAction"
import { signIn } from "next-auth/react"

const LoginForm = () => {
  const dispatch = useDispatch()
  const emailRef = useRef()
  const passwordRef = useRef()
  const [isLoading, setIsLoading] = useState(false)
  const [reveal, setReveal] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    dispatch(loginAction({ email, password }))
  }

  return (
    <AuthStyles>
      <Container className="auth-container">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            ref={emailRef}
          />
          <div className="pw-input">
            <input
              type={reveal ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              ref={passwordRef}
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

          <p className="ms-auto">Forgot your password?</p>

          <button type="submit" disabled={isLoading}>
            SIGN IN
          </button>
        </form>
        <p>
          No account? <Link href="/register">Register.</Link>
        </p>
      </Container>
    </AuthStyles>
  )
}
export default LoginForm
