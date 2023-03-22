import { Routes, Route, Navigate } from "react-router-dom"
import About from "../pages/about/About"
import Auth from "../pages/auth/Auth"
import Blog from "../pages/blog/Blog"
import Home from "../pages/home/Home"

const Routers = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  )
}
export default Routers
