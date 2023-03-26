import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  blogs: [],
  selectedBlog: {},
  isLoading: false,
}

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true
    },
    getBlogsSuccess: (state, { payload }) => {
      state.blogs = payload
      state.isLoading = false
    },
    getSingleBlogSuccess: (state, { payload }) => {
      state.isLoading = false
      state.selectedBlog = payload
    },
  },
})

const { reducer, actions } = blogSlice

export const { requestPending, getBlogsSuccess, getSingleBlogSuccess } = actions
export default reducer
