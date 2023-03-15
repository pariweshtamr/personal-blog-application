import { Col, Row } from "react-bootstrap"
import { HeroStyles } from "./heroStyles"
import { images } from "@/constants"
import Image from "next/image"

const Hero = () => {
  return (
    <HeroStyles>
      <div className="hero-container">
        <Row>
          <Col lg={6} className="hero-left">
            <Image
              src={images.hero}
              alt="hero-img"
              width={1000}
              height={1000}
            />
          </Col>
          <Col lg={6} className="hero-right bg-light">
            <h2 className="text-center">My Thoughts</h2>
            <Image src={images.blog1} alt="blog1" width={1000} height={1000} />
            <h4 className="px-4">Detoxing my social media feed</h4>
            <p className="px-4 text-secondary">
              Create a blog post subtitle that summarizes your post in a few
              short, punchy sentences and entices your audience to continue
              reading....
            </p>

            <button className="main-btn">All Posts</button>
          </Col>
        </Row>
      </div>
    </HeroStyles>
  )
}
export default Hero
