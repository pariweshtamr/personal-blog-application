import { Container, Tab, Tabs } from "react-bootstrap"
import LoginForm from "../../components/auth/loginForm/LoginForm"
import RegisterForm from "../../components/auth/registerForm/RegisterForm"
import "./auth.scss"
const Auth = () => {
  return (
    <div className="auth">
      <Container className="px-5">
        <Tabs defaultActiveKey="login" className="mb-5" justify>
          <Tab eventKey="login" title="Login">
            <LoginForm />
          </Tab>
          <Tab eventKey="register" title="Register">
            <RegisterForm />
          </Tab>
        </Tabs>
      </Container>
    </div>
  )
}
export default Auth
