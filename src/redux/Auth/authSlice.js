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
    loginSuccess: (state, { payload }) => {
      state.isLoading = false
      state.isLoggedIn = true
      state.user = payload
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false
      state.user = {}
      state.isLoading = false
    },
  },
})

const { reducer, actions } = authSlice

export const { requestPending, loginSuccess, logoutSuccess } = actions

export default reducer
