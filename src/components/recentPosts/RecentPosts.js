import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { images } from "../../constants"
import "./recentPosts.scss"
const RecentPosts = () => {
  return (
    <section className="recent-post-section">
      {" "}
      <Container>
        <h1 className="mb-5">Recent Posts</h1>

        <div className="recent-posts d-flex flex-column">
          <div className="recent-post">
            <img src={images.rc1} alt="post-img" />
            <div className="post-right">
              <p>Nov 29 2022 2min</p>
              <Link to="/blogId" className="right-body mb-5">
                <h3>The one thing I would tell to my 16 year old self</h3>
                <p>
                  Create a blog post subtitle that summarizes your post in a few
                  short, punchy sentences and entices your audience to continue
                  reading....
                </p>
              </Link>
              <hr />
              <p className="comments">0 comments</p>
            </div>
          </div>
          <div className="recent-post">
            <img src={images.rc1} alt="post-img" />
            <div className="post-right">
              <p>Nov 29 2022 2min</p>
              <Link tp="/blogId" className="right-body mb-5">
                <h3>The one thing I would tell to my 16 year old self</h3>
                <p>
                  Create a blog post subtitle that summarizes your post in a few
                  short, punchy sentences and entices your audience to continue
                  reading....
                </p>
              </Link>
              <hr />
              <p className="comments">0 comments</p>
            </div>
          </div>
          <div className="recent-post">
            <img src={images.rc1} alt="post-img" />
            <div className="post-right">
              <p>Nov 29 2022 2min</p>
              <Link to="/blogId" className="right-body mb-5">
                <h3>The one thing I would tell to my 16 year old self</h3>
                <p>
                  Create a blog post subtitle that summarizes your post in a few
                  short, punchy sentences and entices your audience to continue
                  reading....
                </p>
              </Link>
              <hr />
              <p className="comments">0 comments</p>
            </div>
          </div>
          <div className="recent-post">
            <img src={images.rc1} alt="post-img" />
            <div className="post-right">
              <p>Nov 29 2022 2min</p>
              <Link to="/blogId" className="right-body mb-5">
                <h3>The one thing I would tell to my 16 year old self</h3>
                <p>
                  Create a blog post subtitle that summarizes your post in a few
                  short, punchy sentences and entices your audience to continue
                  reading....
                </p>
              </Link>
              <hr />
              <p className="comments">0 comments</p>
            </div>
          </div>
          <div className="recent-post">
            <img src={images.rc1} alt="post-img" />
            <div className="post-right">
              <p>Nov 29 2022 2min</p>
              <Link to="/blogId" className="right-body mb-5">
                <h3>The one thing I would tell to my 16 year old self</h3>
                <p>
                  Create a blog post subtitle that summarizes your post in a few
                  short, punchy sentences and entices your audience to continue
                  reading....
                </p>
              </Link>
              <hr />
              <p className="comments">0 comments</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
export default RecentPosts
