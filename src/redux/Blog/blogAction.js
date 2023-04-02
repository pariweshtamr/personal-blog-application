import { toast } from "react-toastify"
import blogAPI from "../../api/blogAPI"
import {
  getBlogsSuccess,
  getSingleBlogSuccess,
  requestPending,
  requestSuccess,
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
      ? dispatch(requestSuccess({ status, message })) &&
        dispatch(getBlogsAction()) &&
        toast[status](message)
      : dispatch(requestSuccess()) && toast[status](message)
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

export const editBlogAction = (updatedPost) => async (dispatch) => {
  try {
    dispatch(requestPending())

    const { status, message, updatedBlog } = await blogAPI.editBlog(updatedPost)

    status === "success"
      ? dispatch(getSingleBlogSuccess(updatedBlog)) && toast[status](message)
      : dispatch(getSingleBlogSuccess({})) &&
        toast.error("Unable to edit blog post!")
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

export const deleteBlogAction = (_id) => async (dispatch) => {
  try {
    dispatch(requestPending())

    const { status, message } = await blogAPI.deleteBlog(_id)

    status === "success"
      ? dispatch(requestSuccess({ status, message })) &&
        dispatch(getBlogsAction()) &&
        toast[status](message)
      : dispatch(requestSuccess()) && toast[status](message)
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}
