import { Col, Container } from "react-bootstrap"
import BlogCard from "../../components/blogComps/blogCard/BlogCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getBlogsAction } from "../../redux/Blog/blogAction"
import { getCategoriesAction } from "../../redux/Category/categoryAction"
import { motion } from "framer-motion"
import "./blog.scss"

const Blog = () => {
  const dispatch = useDispatch()
  const { blogs } = useSelector((state) => state.blog)
  const { categories } = useSelector((state) => state.category)
  const [animateCard, setAnimateCard] = useState({ y: 0, opactiy: 1 })
  const [activeFilter, setActiveFilter] = useState("All")
  const [filteredBlogs, setFilteredBlogs] = useState(blogs)

  const handleCategoryFilter = (category) => {
    setActiveFilter(category)
    setAnimateCard([{ y: 100, opacity: 0 }])

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }])
      if (category === "All") {
        setFilteredBlogs(blogs)
      } else {
        setFilteredBlogs(blogs.filter((blog) => blog.category === category))
      }
    }, 500)
  }

  useEffect(() => {
    dispatch(getCategoriesAction())
    !blogs.length && dispatch(getBlogsAction())
    setFilteredBlogs(blogs)
  }, [dispatch, blogs])

  return (
    <section className="blog-section">
      <Container className="blog-container">
        <div>
          <h1>Blog</h1>
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
        <motion.div
          className="blog-cards"
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
        >
          {filteredBlogs?.length ? (
            filteredBlogs?.map((blog) => (
              <Col
                lg={6}
                key={blog._id}
                className="d-flex justify-content-center g-4 p-3"
              >
                <BlogCard blog={blog} />
              </Col>
            ))
          ) : (
            <h3 style={{ textDecoration: "underline" }} className="text-center">
              No Blogs Found!
            </h3>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
export default Blog
