import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  blogs: [],
  selectedBlog: {},
  response: {},
  isLoading: false,
}

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true
    },
    createBlogSuccess: (state, { payload }) => {
      state.isLoading = false
      state.response = payload
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

export const {
  requestPending,
  getBlogsSuccess,
  getSingleBlogSuccess,
  createBlogSuccess,
} = actions
export default reducer
