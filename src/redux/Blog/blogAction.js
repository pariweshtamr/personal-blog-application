import { toast } from "react-toastify"
import blogAPI from "../../api/blogAPI"
import {
  createBlogSuccess,
  getBlogsSuccess,
  getSingleBlogSuccess,
  requestPending,
} from "./blogSlice"

export const getBlogsAction = () => async (dispatch) => {
  try {
    dispatch(requestPending())

    const { status, blogs } = await blogAPI.fetchBlogs()

    status === "success"
      ? dispatch(getBlogsSuccess(blogs))
      : dispatch(getBlogsSuccess([]))
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

export const getSingleBlogAction = (slug) => async (dispatch) => {
  try {
    dispatch(requestPending())

    const { status, blog } = await blogAPI.fetchSingleBlog(slug)

    status === "success"
      ? dispatch(getSingleBlogSuccess(blog))
      : dispatch(getSingleBlogSuccess({}))
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

export const createBlogAction = (post) => async (dispatch) => {
  try {
    dispatch(requestPending())

    const { status, message } = await blogAPI.createBlog(post)

    status === "success"
      ? dispatch(createBlogSuccess({ status, message })) &&
        dispatch(getBlogsAction()) &&
        toast[status](message)
      : dispatch(createBlogSuccess()) && toast[status](message)
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}
