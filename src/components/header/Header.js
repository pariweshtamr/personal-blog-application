import { Button, Container } from "react-bootstrap"
import Link from "next/link"
import { Nav, Navbar } from "react-bootstrap"
import { HeaderStyles } from "./headerStyles"
import { useSelector } from "react-redux"

const Header = () => {
  const { user } = useSelector((state) => state.auth)

  console.log(user)

  const signOut = () => {}
  return (
    <HeaderStyles>
      <Navbar expand="lg" className="navbar bg-light">
        <Container fluid className="nav-container">
          <div className="nav-left">
            <h1>Boosting Success</h1>
            <p>Thoughts on Coding & Lifestyle</p>
          </div>
          <Navbar.Toggle aria-controls="basic-navabr-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-items">
              <Link href="/">Home</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about">About</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/">Contact</Link>
              {user?._id ? (
                <>
                  <Button onClick={() => signOut()}>Sign out</Button>
                </>
              ) : (
                <Link href="/auth">Sign In</Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderStyles>
  )
}
export default Header
