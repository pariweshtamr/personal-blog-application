const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
  categories: [],
  selectedCategory: {},
  isLoading: false,
}

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true
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
} = actions

export default reducer
