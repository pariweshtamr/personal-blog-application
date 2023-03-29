import { Container, Form } from "react-bootstrap"
import { AddCircle } from "@mui/icons-material"
import { useEffect, useRef, useState } from "react"
import JoditEditor from "jodit-react"
import "./createPost.scss"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { getCategoriesAction } from "../../redux/Category/categoryAction"
import { useNavigate } from "react-router-dom"
import { createBlogAction } from "../../redux/Blog/blogAction"
import DOMPurify from "dompurify"

const CreatePost = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [file, setFile] = useState("")
  const titleRef = useRef()
  const formRef = useRef()
  const editor = useRef(null)
  const [category, setCategory] = useState("")
  const { categories } = useSelector((state) => state.category)

  const config = {
    readonly: false,
    placeholder: "Start typing...",
  }

  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80 "

  useEffect(() => {
    const getImage = () => {
      if (file) {
        const data = new FormData()
        data.append("name", file.name)
        data.append("file", file)

        // call api to upload image
      }
    }
    getImage()
  }, [file])

  useEffect(() => {
    !categories.length && dispatch(getCategoriesAction())
  }, [categories, dispatch])

  const savePost = async (e) => {
    e.preventDefault()
    const title = titleRef?.current?.value
    const dirtyHtml = editor?.current?.value
    const cleanContent = DOMPurify.sanitize(dirtyHtml)

    const post = { title, category, cleanContent }

    if (title.trim() === "") {
      return toast.warning("Title is required!")
    }
    if (!category) {
      return toast.warning("Please select a category for the post!")
    }

    // submit the form to server

    dispatch(createBlogAction(post))
    formRef.current.reset()
  }

  return (
    <Container className="create-container pb-5">
      <button
        className="back-btn mb-4"
        onClick={() => navigate("/auth/dashboard")}
      >
        &lt; <span>Back</span>
      </button>
      <img src={url} alt="banner-img" />

      <Form className="my-3 create-form" ref={formRef}>
        <div className="d-flex align-items-center py-2 pb-5 gap-5">
          <label htmlFor="fileInput">
            <AddCircle
              fontSize="large"
              color="action"
              style={{ cursor: "pointer" }}
            />
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <input
            placeholder="Title..."
            className="title-input"
            name="title"
            ref={titleRef}
            required
          />

          <select
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            className="post-select"
            defaultValue={0}
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
            onClick={savePost}
          >
            Publish
          </button>
        </div>
        <JoditEditor ref={editor} config={config} required />
      </Form>
    </Container>
  )
}
export default CreatePost
