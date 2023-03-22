import { useRef, useState } from "react"
import { Container, Spinner } from "react-bootstrap"
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"
import "../authForms.scss"

const LoginForm = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [reveal, setReveal] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {}

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

          <button type="submit" disabled={loading}>
            {loading ? <Spinner animation="grow" variant="light" /> : "SIGN IN"}
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
