import Link from "next/link"
import { useRef, useState } from "react"
import { Container, Spinner } from "react-bootstrap"
import { AuthStyles } from "../authStyles"
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material"
import { toast } from "react-toastify"
import { signIn } from "next-auth/react"

const LoginForm = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [reveal, setReveal] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    setLoading(true)
    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/admin",
    })
    setLoading(false)
    if (res?.error) {
      setLoading(false)
      toast.error(res.error)
      return
    }
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

          <button type="submit" disabled={loading}>
            {loading ? <Spinner animation="grow" variant="light" /> : "SIGN IN"}
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
