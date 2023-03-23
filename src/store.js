import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./redux/Auth/authSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

export default store
