import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getSingleBlogAction } from "../../redux/Blog/blogAction"
import { MoreVert, FavoriteBorder } from "@mui/icons-material"
import "./singleBlog.scss"
import images from "../../constants/images"
const SingleBlog = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [comment, setComment] = useState("")
  const { selectedBlog } = useSelector((state) => state.blog)
  const { _id } = useParams()

  useEffect(() => {
    dispatch(getSingleBlogAction(_id))
  }, [dispatch, _id])
  return (
    <Container className="px-5 single-blog-container">
      <h6 onClick={() => navigate("/auth/dashboard")}>All Posts</h6>

      <Row className="blog-content-container">
        <div className="d-flex justify-content-between">
          <div className="blog-date">
            <p>{new Date(selectedBlog?.createdAt).toLocaleDateString()}</p>
            <div className="mb-3"></div>
            <span>{selectedBlog?.read || "2 min read"}</span>
          </div>
          <MoreVert />
        </div>

        <div className="titles">
          <h1>{selectedBlog?.title}</h1>
          <h6></h6>
        </div>

        <div className="blog-content">
          <img src={selectedBlog?.img || images.blog1} alt="blog-img" />
          <div className="content">{selectedBlog?.content}</div>
        </div>

        <div className="share mt-5">sdf</div>
        <div className="like-view d-flex justify-content-between align-items-center">
          <p>{selectedBlog?.views} views</p>
          <p>
            {selectedBlog?.likes ? selectedBlog.likes : "0"} likes{" "}
            <FavoriteBorder />
          </p>
        </div>
      </Row>

      <Row className="blog-comments">
        <h5 className="mb-3">Comments</h5>
        <hr />
        <input
          type="text"
          name="comment"
          placeholder="Write a comment..."
          className="my-3"
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <div className="button-group">
          <button>Cancel</button>
          <button disabled={!comment}>Publish</button>
        </div>
      </Row>
    </Container>
  )
}
export default SingleBlog
