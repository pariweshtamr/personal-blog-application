import blogAPI from "../../api/blogAPI"
import { getBlogsSuccess, requestPending } from "./blogSlice"

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
