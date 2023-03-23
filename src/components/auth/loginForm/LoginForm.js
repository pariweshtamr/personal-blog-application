import { useEffect, useRef, useState } from "react"
import { Container, Spinner } from "react-bootstrap"
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import "../authForms.scss"
import { loginAction } from "../../../redux/Auth/authAction"

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const emailRef = useRef()
  const passwordRef = useRef()
  const [reveal, setReveal] = useState(false)
  const { user, isLoading } = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = emailRef?.current?.value
    const password = passwordRef?.current?.value
    dispatch(loginAction({ email, password }))
  }

  useEffect(() => {
    user?._id && navigate("/auth/admin")
  }, [user, navigate])

  return (
    <div className="auth-form">
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
            {isLoading ? (
              <Spinner animation="grow" variant="light" />
            ) : (
              "SIGN IN"
            )}
          </button>
        </form>
        <p>
          No account? <Link to="/register">Register.</Link>
        </p>
      </Container>
    </div>
  )
}
export default LoginForm
