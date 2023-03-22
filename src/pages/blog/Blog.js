import { Container, Row } from "react-bootstrap"
import BlogCard from "../../components/blogComps/blogCard/BlogCard"
import "./blog.scss"
const Blog = () => {
  return (
    <section className="blog-section">
      <Container className="blog-container">
        <h1>Blog</h1>
        <Row className="blog-cards">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Row>
      </Container>
    </section>
  )
}
export default Blog
