import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"
import About from "../pages/about/About"
import Admin from "../pages/admin/Admin"
import Auth from "../pages/auth/Auth"
import Blog from "../pages/blog/Blog"
import CreatePost from "../pages/create/CreatePost"
import Dashboard from "../pages/dashboard/Dashboard"
import Home from "../pages/home/Home"
import { autoLoginAction } from "../redux/Auth/authAction"
import RequireAuth from "./RequireAuth"

const Routers = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    !user?._id && dispatch(autoLoginAction())
  }, [user?._id, dispatch])
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />

        <Route
          path="auth/admin"
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        />
        <Route
          path="auth/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path="auth/create"
          element={
            <RequireAuth>
              <CreatePost />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  )
}
export default Routers
