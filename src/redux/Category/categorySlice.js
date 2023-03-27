const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
  categories: [],
  selectedCategory: {},
  isLoading: false,
  response: {},
}

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true
    },
    requestSuccess: (state, { payload }) => {
      state.isLoading = false
      state.response = payload
    },
    getCategoriesSuccess: (state, { payload }) => {
      state.isLoading = false
      state.categories = payload
    },
    getSingleCategorySuccess: (state, { payload }) => {
      state.selectedCategory = payload
      state.isLoading = false
    },
  },
})

const { reducer, actions } = categorySlice

export const {
  requestPending,
  getSingleCategorySuccess,
  getCategoriesSuccess,
  requestSuccess,
} = actions

export default reducer
