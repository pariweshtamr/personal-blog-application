import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { images } from "../../constants"
import "./recentPosts.scss"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getActiveBlogsAction } from "../../redux/Blog/blogAction"
import DOMPurify from "dompurify"
import parse from "html-react-parser"

const RecentPosts = () => {
  const dispatch = useDispatch()
  const { blogs } = useSelector((state) => state.blog)
  useEffect(() => {
    dispatch(getActiveBlogsAction())
  }, [dispatch])

  console.log(blogs)
  const sortedBlogs = [...blogs]
    .filter((blog) => blog.status === "active")
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

  return (
    <section className="recent-post-section">
      <Container>
        <h1 className="mb-5">Recent Posts</h1>

        <div className="recent-posts d-flex flex-column">
          {sortedBlogs.length &&
            sortedBlogs.map((blog) => (
              <div className="recent-post" key={blog._id}>
                <img src={images.rc1} alt="post-img" />
                <div className="post-right">
                  <p>
                    {new Date(blog?.createdAt).toDateString()} |{" "}
                    {blog?.read || "2 min read"}
                  </p>
                  <Link to={`/blog/${blog.slug}`} className="right-body mb-5">
                    <h3>{blog.title}</h3>
                    <div>
                      {parse(
                        DOMPurify.sanitize(blog.content, {
                          USE_PROFILES: { html: true },
                        })
                      )}
                    </div>
                  </Link>
                  <hr />
                  <p className="comments">0 comments</p>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </section>
  )
}
export default RecentPosts
