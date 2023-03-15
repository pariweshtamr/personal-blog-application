const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
  user: {},
  isLoading: false,
  isLoggedIn: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true
    },
    requestSuccess: (state, { payload }) => {
      state.isLoading = false
      state.isLoggedIn = true
      state.user = payload
    },
  },
})

const { reducer, actions } = authSlice

export const { requestPending, requestSuccess } = actions

export default reducer
