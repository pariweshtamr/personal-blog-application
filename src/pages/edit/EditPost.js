import { Container, Form } from "react-bootstrap"
import { AddCircle } from "@mui/icons-material"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import JoditEditor from "jodit-react"
import "./editPost.scss"
import { getCategoriesAction } from "../../redux/Category/categoryAction"
import {
  editBlogAction,
  getSingleBlogAction,
} from "../../redux/Blog/blogAction"
import DOMPurify from "dompurify"
import { toast } from "react-toastify"
const EditPost = () => {
  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80 "
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [file, setFile] = useState("")
  const [shouldFetch, setShouldFetch] = useState(true)
  const [post, setPost] = useState({})
  const { categories } = useSelector((state) => state.category)
  const { selectedBlog } = useSelector((state) => state.blog)
  const [content, setContent] = useState(post?.content)
  const [form, setForm] = useState({})
  const { slug } = useParams()
  const editor = useRef(null)

  useEffect(() => {
    !categories.length && dispatch(getCategoriesAction())
  }, [categories, dispatch])

  useEffect(() => {
    !selectedBlog?._id && shouldFetch && dispatch(getSingleBlogAction(slug))
    setShouldFetch(false)
    setPost(selectedBlog)

    if (post) {
      setForm({
        title: post?.title,
        category: post?.category,
      })
      setContent(post?.content)
    }
  }, [dispatch, slug, selectedBlog, shouldFetch, post])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const editPost = (e) => {
    e.preventDefault()
    const cleanContent = DOMPurify.sanitize(content)

    const update = { ...form, cleanContent, slug }

    if (
      post?.title !== form?.title ||
      post?.category !== form?.category ||
      cleanContent !== post.content
    ) {
      dispatch(editBlogAction(update))
      navigate(`/auth/blog/${slug}`)
      return
    }
    toast.warning("No changes were made!")
  }

  return (
    <>
      <Container className="edit-container pb-5">
        <button
          className="back-btn mb-4"
          onClick={() => navigate(`/auth/blog/${slug}`)}
        >
          &lt; <span>Back to blog</span>
        </button>

        <img src={url} alt="banner-img" />

        <Form className="my-3 blog-form">
          <div className="d-flex align-items-center py-2 pb-5 gap-5">
            <label htmlFor="fileInput">
              <AddCircle
                fontSize="large"
                color="action"
                style={{ cursor: "pointer" }}
              />
            </label>
            {/* <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              name="file"
              onChange={(e) => setFile(e.target.files[0])}
            /> */}

            <input
              placeholder="Title..."
              className="title-input"
              name="title"
              value={form?.title}
              onChange={handleChange}
              required
            />

            <select
              name="category"
              className="post-select"
              value={form?.category}
              onChange={handleChange}
            >
              <option value={0} disabled>
                -- Select a category --
              </option>
              {categories.length &&
                categories.map((cat) => (
                  <option value={cat.name} key={cat._id}>
                    {cat.name}
                  </option>
                ))}
            </select>

            <button
              className="main-btn publish-btn"
              type="submit"
              onClick={editPost}
            >
              Edit
            </button>
          </div>
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
          />
        </Form>
      </Container>
    </>
  )
}
export default EditPost
