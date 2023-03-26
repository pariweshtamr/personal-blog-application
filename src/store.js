import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./redux/Auth/authSlice"
import categoryReducer from "./redux/Category/categorySlice"
import blogReducer from "./redux/Blog/blogSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    blog: blogReducer,
  },
})

export default store
