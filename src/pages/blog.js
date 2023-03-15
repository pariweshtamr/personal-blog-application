import BlogCard from "@/components/blogComps/blogCard/BlogCard"
import Layout from "@/components/layout/Layout"
import { BlogStyles } from "@/styles/blogStyles"
import { Container, Row } from "react-bootstrap"

const Blog = () => {
  return (
    <Layout>
      <BlogStyles>
        <Container className="blog-container">
          <h1>Blog</h1>

          <Row className="blog-cards">
            <BlogCard />
            <BlogCard />
          </Row>
        </Container>
      </BlogStyles>
    </Layout>
  )
}
export default Blog
