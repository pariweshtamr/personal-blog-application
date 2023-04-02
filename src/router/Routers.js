import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"
import About from "../pages/about/About"
import Admin from "../pages/admin/Admin"
import Auth from "../pages/auth/Auth"
import Blog from "../pages/blog/Blog"
import SingleBlog from "../pages/blog/SingleBlog"
import CreatePost from "../pages/create/CreatePost"
import Dashboard from "../pages/dashboard/Dashboard"
import Home from "../pages/home/Home"
import { autoLoginAction } from "../redux/Auth/authAction"
import EditPost from "../pages/edit/EditPost"

const Routers = () => {
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state) => state.auth)

  useEffect(() => {
    !isLoggedIn && dispatch(autoLoginAction())
  }, [isLoggedIn, dispatch])

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route
          path="auth/blog/:slug"
          element={isLoggedIn ? <SingleBlog /> : <Auth />}
        />
        <Route
          path="auth/create"
          element={isLoggedIn ? <CreatePost /> : <Auth />}
        />
        <Route
          path="auth/blog/edit/:slug"
          element={isLoggedIn ? <EditPost /> : <Auth />}
        />
        <Route
          path="auth/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Auth />}
        />
        <Route path="auth/admin" element={isLoggedIn ? <Admin /> : <Auth />} />
      </Route>
    </Routes>
  )
}
export default Routers
