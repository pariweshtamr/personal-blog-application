import { Col, Row } from "react-bootstrap"
import "./quote.scss"
const Quote = () => {
  return (
    <section className="quote-section">
      <Row className="quote-row">
        <Col lg={6} className="quote-text">
          <h1 className="text-center">
            “Make it work, make it right, make it fast.”
          </h1>
          <p>– Kent Beck</p>
        </Col>
        <Col lg={6} className="quote-img"></Col>
      </Row>
    </section>
  )
}
export default Quote
