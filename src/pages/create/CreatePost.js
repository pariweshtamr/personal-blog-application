import { FormControl, InputBase, TextareaAutosize } from "@mui/material"
import { Container } from "react-bootstrap"
import { AddCircle } from "@mui/icons-material"
import "./createPost.scss"
import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import blogAPI from "../../api/blogAPI"

const initialState = {
  userId: "",
  title: "",
  desc: "",
  img: "",
  category: "",
}

const CreatePost = () => {
  const [post, setPost] = useState(initialState)
  const [file, setFile] = useState("")
  const titleRef = useRef()
  const descRef = useRef()
  const { search } = useLocation()
  const { user } = useSelector((state) => state.auth)

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
  }, [file, post])

  console.log(post)

  const savePost = async () => {
    const title = titleRef?.current?.value
    const desc = descRef?.current?.value
    const category = search?.split("=")[1] || "All"
    const userId = user?._id

    const response = await blogAPI.createPost({ title, desc, category, userId })
    console.log(response)
  }

  return (
    <Container className="create-container">
      <img src={url} alt="" />

      <FormControl className="my-3 create-form">
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

        <InputBase
          placeholder="Title..."
          className="title-input"
          name="title"
          ref={titleRef}
        />

        <button className="main-btn publish-btn" onClick={savePost}>
          Publish
        </button>
      </FormControl>

      <TextareaAutosize
        minRows={5}
        placeholder="Tell your story..."
        className="text-area my-4"
        name="desc"
        ref={descRef}
      />
    </Container>
  )
}
export default CreatePost
