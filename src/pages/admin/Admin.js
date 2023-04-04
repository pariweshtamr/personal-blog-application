import { useEffect, useRef, useState } from "react"
import { ButtonGroup, Col, Container, Form, Modal, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Widget from "../../components/widget/Widget"
import {
  createCategoryAction,
  getCategoriesAction,
} from "../../redux/Category/categoryAction"
import { DataGrid } from "@mui/x-data-grid"
import "./admin.scss"
import { getBlogsAction } from "../../redux/Blog/blogAction"

const columns = [
  { field: "index", headerName: "#", width: 90 },
  { field: "name", headerName: "Categories", width: 270 },
  { field: "numBlogs", headerName: "# of Blogs", width: 270 },
]

const categoryColumns = [
  { field: "index", headerName: "#", width: 100 },
  { field: "name", headerName: "Category Name", width: 194 },
  { field: "created", headerName: "Created Date", width: 194 },
]

const Admin = () => {
  const dispatch = useDispatch()
  const [cats, setCats] = useState([])
  const [data, setData] = useState([])
  const [shouldFetch, setShouldFetch] = useState(true)
  const { categories } = useSelector((state) => state.category)
  const { blogs } = useSelector((state) => state.blog)
  const [show, setShow] = useState(false)
  const catRef = useRef()

  const numberOfBlogs = blogs?.length
  const numberOfCategories = categories?.length

  const handleSubmit = async () => {
    const name = catRef?.current?.value
    if (!name) {
      return alert("Please enter a category name!")
    }

    dispatch(createCategoryAction({ name }))
    setShow(false)
  }

  useEffect(() => {
    shouldFetch && dispatch(getCategoriesAction()) && dispatch(getBlogsAction())
    setShouldFetch(false)

    const transformData = (data) => {
      return data.map((category, i) => ({
        id: category._id,
        index: i + 1,
        name: category.name,
        numBlogs: blogs.filter((blog) => blog.category === category.name)
          .length,
      }))
    }

    const transformCategory = (categ) => {
      return categ.map((category, i) => ({
        id: category._id,
        index: i + 1,
        name: category.name,
        created: new Date(category.createdAt).toLocaleDateString(),
      }))
    }
    const transaformedData = transformData(categories)
    setData(transaformedData)

    const transformedCat = transformCategory(categories)
    setCats(transformedCat)
  }, [dispatch, categories, shouldFetch, blogs])

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column gap-4">
          <Form>
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              placeholder="Category name..."
              required
              ref={catRef}
              className="cat-input"
              autoFocus
            />
          </Form>
          <ButtonGroup className="d-flex gap-3 ms-auto">
            <button className="main-btn" onClick={() => setShow(false)}>
              Cancel
            </button>
            <button className="main-btn cat-btn" onClick={handleSubmit}>
              Create
            </button>
          </ButtonGroup>
        </Modal.Body>
      </Modal>
      <Container className="pt-3 pb-5 d-flex flex-column gap-4">
        <Link to="/auth/dashboard" className="main-btn dash-btn me-0">
          Go to Admin Dashboard
        </Link>
        <div className="widgets mb-3">
          <Widget type="categories" number={numberOfCategories} />
          <Widget type="blogs" number={numberOfBlogs} />
        </div>

        <button className="main-btn m-0" onClick={() => setShow(true)}>
          Create a new category
        </button>

        <Row className="justify-content-between">
          <Col lg={6} md={12} style={{ height: 400, width: "50%" }}>
            <DataGrid
              columns={categoryColumns}
              rows={cats}
              checkboxSelection
              disableRowSelectionOnClick
              className="category-data"
            />
          </Col>
          <Col lg={6} md={12} style={{ height: 400, width: "50%" }}>
            <DataGrid
              columns={columns}
              rows={data}
              disableRowSelectionOnClick
              className="category-data"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Admin
