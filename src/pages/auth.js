import Layout from "@/components/layout/Layout"
import LoginForm from "@/components/auth/login/LoginForm"
import { Container, Tab, Tabs } from "react-bootstrap"
import { AuthPageStyles } from "@/styles/authPageStyles"
import RegisterForm from "@/components/auth/register/RegisterForm"

const Auth = () => {
  return (
    <Layout>
      <AuthPageStyles>
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
      </AuthPageStyles>
    </Layout>
  )
}

export default Auth
