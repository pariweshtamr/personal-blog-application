import { Col, Row } from "react-bootstrap"
import { images } from "../../constants"
import { Link } from "react-router-dom"
import "./hero.scss"
const Hero = () => {
  return (
    <section>
      <div className="hero-container">
        <Row>
          <Col lg={6} className="hero-left">
            <img src={images.hero} alt="hero-img" />
          </Col>
          <Col lg={6} className="hero-right bg-light">
            <h2 className="text-center">My Thoughts</h2>
            <img src={images.blog1} alt="blog1" />
            <h4 className="px-4">Detoxing my social media feed</h4>
            <p className="px-4 text-secondary">
              Create a blog post subtitle that summarizes your post in a few
              short, punchy sentences and entices your audience to continue
              reading....
            </p>

            <Link to="/blog">
              <button className="main-btn">All Posts</button>
            </Link>
          </Col>
        </Row>
      </div>
    </section>
  )
}
export default Hero
