import { images } from "../../../constants"
import { MoreVert, FavoriteBorder } from "@mui/icons-material"
import "./blogCard.scss"
import { Link } from "react-router-dom"
import DOMPurify from "dompurify"
import parse from "html-react-parser"
const BlogCard = ({ blog }) => {
  let clean = DOMPurify.sanitize(blog.content, {
    USE_PROFILES: { html: true },
  })

  return (
    <div className="blog-card">
      <Link to={`/auth/blog/${blog.slug}`}>
        <img src={blog?.img || images.rc1} alt="blog-img" />
      </Link>

      <div className="card-bottom">
        <div className="d-flex justify-content-between align-items-start">
          <div className="blog-date">
            <p>{new Date(blog?.createdAt).toLocaleDateString()}</p>
            <span>{blog?.read || "2 min read"}</span>
          </div>
          <MoreVert />
        </div>
        <Link to={`/auth/blog/${blog?.slug}`}>
          <h5>{blog?.title}</h5>
          <div className="content-preview">{parse(clean)}</div>
        </Link>
        <hr className="mt-5" />
        <div className="d-flex justify-content-between blog-likes">
          <div>{blog?.views} views</div>
          <div className="d-flex align-items-center gap-1">
            {blog?.likes} <FavoriteBorder />
          </div>
        </div>
      </div>
    </div>
  )
}
export default BlogCard
