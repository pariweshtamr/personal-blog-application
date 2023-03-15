import Layout from "@/components/layout/Layout"
import { images } from "@/constants"
import { SingleBlogStyles } from "@/styles/singleBlogStyles"
import Image from "next/image"
import { MoreVert, FavoriteBorder } from "@mui/icons-material"
import { Container, Row } from "react-bootstrap"

const SingleBlog = () => {
  return (
    <Layout>
      <SingleBlogStyles>
        <Container className="single-blog-container">
          <Row>
            <div>All Posts</div>
          </Row>

          <Row className="blog-content-container">
            <div className="d-flex justify-content-between align-items-start">
              <div className="blog-date">
                <p>Nov 29, 2023</p>
                <span>2 min read</span>
              </div>
              <MoreVert />
            </div>

            <div className="titles">
              <h1>Detoxing my social media feed</h1>
              <h6>
                Create a blog post subtitle that summarizes your post in a few
                short, punchy sentences and entices your audience to continue
                reading.
              </h6>
            </div>

            <div className="blog-content">
              <Image
                src={images.blog1}
                alt="blog-img"
                width={2000}
                height={2000}
              />

              <div className="content"></div>
            </div>

            <div className="share mt-5">sdf</div>

            <div className="like-view d-flex justify-content-between align-items-center">
              <p>12 views</p>
              <p>
                7 views <FavoriteBorder />
              </p>
            </div>
          </Row>

          <Row className="blog-comments">
            <h5>Comments</h5>
            <hr />
            <input
              type="text"
              name=""
              placeholder="Write a comment..."
              className="my-3"
            ></input>
            <div className="button-group">
              <button>Cancel</button>
              <button disabled>Publish</button>
            </div>
          </Row>
        </Container>
      </SingleBlogStyles>
    </Layout>
  )
}
export default SingleBlog
