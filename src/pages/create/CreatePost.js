import { Container, Form } from "react-bootstrap"
import { AddCircle } from "@mui/icons-material"
import { useEffect, useRef, useState } from "react"
import blogAPI from "../../api/blogAPI"
import JoditEditor from "jodit-react"
import "./createPost.scss"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { getCategoriesAction } from "../../redux/Category/categoryAction"

const config = {
  readonly: false,
  placeholder: "Start typing...",
}

const CreatePost = () => {
  const dispatch = useDispatch()
  const [file, setFile] = useState("")
  const titleRef = useRef()
  const editor = useRef(null)
  const [category, setCategory] = useState("")
  const [cats, setCats] = useState([])
  const { categories } = useSelector((state) => state.category)

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
    const content = editor?.current?.value
    const post = { title, category, content }

    if (title.trim() === "") {
      return toast.warning("Title is required!")
    }
    if (!category) {
      return toast.warning("Please select a category for the post!")
    }

    // submit the form to server
    const { status, message } = await blogAPI.createBlog(post)

    status && toast[status](message)

    console.log(status, message)
  }

  return (
    <Container className="create-container pb-5">
      <img src={url} alt="" />

      <Form className="my-3 create-form">
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
                <option value={cat._id} key={cat._id}>
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
