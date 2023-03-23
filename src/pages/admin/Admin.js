import { useRef, useState } from "react"
import { ButtonGroup, Form, Modal } from "react-bootstrap"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import categoryAPI from "../../api/categoryAPI"
import "./admin.scss"

const Admin = () => {
  const [show, setShow] = useState(false)
  const formRef = useRef()
  const catRef = useRef()

  const handleSubmit = async () => {
    const name = catRef?.current?.value
    if (!name) {
      return alert("Please enter a category name!")
    }

    const { status, message } = await categoryAPI.createCategory({ name })
    status && toast[status](message) && formRef.current.reset()
  }
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
          <Form ref={formRef}>
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
      <div className="d-flex">
        <button className="main-btn" onClick={() => setShow(true)}>
          Create a new category
        </button>
        <Link to="/auth/dashboard" className="main-btn">
          Go to Admin Dashboard
        </Link>
      </div>
    </>
  )
}
export default Admin
