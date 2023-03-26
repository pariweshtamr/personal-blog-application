import "./header.scss"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@mui/material"
import { logoutAction } from "../../redux/Auth/authAction"
const Header = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  return (
    <header>
      <Navbar expand="lg" className="navbar bg-light">
        <Container fluid className="nav-container">
          <div className="nav-left">
            <h1>Boosting Success</h1>
            <p>Thoughts on Coding & Lifestyle</p>
          </div>
          <Navbar.Toggle aria-controls="basic-navabr-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-items">
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/about">About</Link>
              <Link to="/resources">Resources</Link>
              {user?._id ? (
                <Button onClick={() => dispatch(logoutAction())}>
                  Sign Out
                </Button>
              ) : (
                <Link to="/auth">Sign In</Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
export default Header
