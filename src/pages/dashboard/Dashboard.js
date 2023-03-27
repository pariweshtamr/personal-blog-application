import { Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import Banner from "../../components/dashboard/banner/Banner"
import "./dashboard.scss"
import { useEffect, useState } from "react"
import { getCategoriesAction } from "../../redux/Category/categoryAction"
import { getBlogsAction } from "../../redux/Blog/blogAction"
import BlogCard from "../../components/blogComps/blogCard/BlogCard"

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { categories } = useSelector((state) => state.category)
  const { blogs } = useSelector((state) => state.blog)
  const [filteredBlogs, setFilteredBlogs] = useState(blogs)
  const [activeFilter, setActiveFilter] = useState("All")

  useEffect(() => {
    // load all categories and blogs from the server of not available in redux store
    !categories.length && dispatch(getCategoriesAction())
    !blogs.length && dispatch(getBlogsAction())
    setFilteredBlogs(blogs)
  }, [dispatch, categories, blogs])

  const handleCategoryFilter = (category) => {
    setActiveFilter(category)
    if (category === "All") {
      setFilteredBlogs(blogs)
    } else {
      setFilteredBlogs(blogs.filter((blog) => blog.category === category))
    }
  }
  return (
    <>
      <Banner />
      <Container className="py-4">
        <div className="d-flex justify-content-between">
          <button className="back-btn" onClick={() => navigate("/auth/admin")}>
            &lt; <span>Back</span>
          </button>

          <Link to="/auth/create">
            <button variant="contained" className="create-btn">
              Create Blog
            </button>
          </Link>
        </div>

        <div className="category-tabs">
          <div
            className={
              activeFilter === "All" ? "category-tab active" : "category-tab"
            }
            onClick={() => handleCategoryFilter("All")}
          >
            All
          </div>

          {categories.length ? (
            categories.map((category) => (
              <div
                className={
                  activeFilter === category.name
                    ? "category-tab active"
                    : "category-tab"
                }
                key={category._id}
                onClick={() => handleCategoryFilter(category.name)}
              >
                {category.name}
              </div>
            ))
          ) : (
            <h1 style={{ textDecoration: "underline" }}>
              No Categories Found!
            </h1>
          )}
        </div>

        <div className="blogs-list d-flex justify-content-center gap-4">
          {filteredBlogs?.length ? (
            filteredBlogs?.map((blog) => (
              <BlogCard blog={blog} key={blog._id} />
            ))
          ) : (
            <h1 style={{ textDecoration: "underline" }}>No Blogs Found!</h1>
          )}
        </div>
      </Container>
    </>
  )
}
export default Dashboard
