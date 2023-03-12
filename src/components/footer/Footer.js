import { Col, Container, Row } from "react-bootstrap"
import { FooterStyles } from "./footerStyles"
import { FacebookRounded, LinkedIn, GitHub } from "@mui/icons-material"

const Footer = () => {
  return (
    <FooterStyles className="py-5" id="contact">
      <Container>
        <Row>
          <Col lg={5} className="footer-left">
            <div className="socials">
              <FacebookRounded />
              <LinkedIn />
              <GitHub />
            </div>
            <div className="info">
              <h3>Boosting Success</h3>
              <p>tamrpariwesh.com</p>
            </div>
            <div className="copyright">
              <div>&copy; 2023 by Pariwesh Tamrakar</div>
              <>All Rights Reserved</>
            </div>
          </Col>
          <Col lg={7} className="footer-right">
            <h3>Contact</h3>
            <p>Ask me anything</p>

            <form className="d-flex flex-column gap-5">
              <div className="d-flex gap-5">
                <div className="d-flex flex-column w-100 gap-3">
                  <label>Full Name</label>
                  <input type="text" name="fullName" />
                </div>
                <div className="d-flex flex-column w-100 gap-3">
                  <label>Email*</label>
                  <input type="email" name="email" required />
                </div>
              </div>
              <div className="d-flex flex-column w-100 gap-3">
                <label>Leave a Message...</label>
                <input type="text" name="message" required />
              </div>

              <button className="me-0">Submit</button>
            </form>
          </Col>
        </Row>
      </Container>
    </FooterStyles>
  )
}
export default Footer
