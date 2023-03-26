import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import "./categories.scss"
import { useEffect } from "react"
import { getCategoriesAction } from "../../../redux/Category/categoryAction"
const Categories = () => {
  const dispatch = useDispatch()
  const { categories } = useSelector((state) => state.category)

  useEffect(() => {
    !categories.length && dispatch(getCategoriesAction())
  }, [categories, dispatch])

  return (
    <>
      <Link to="/auth/create">
        <button variant="contained" className="create-btn">
          Create Blog
        </button>
      </Link>
      <Table className="cat-table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Link to="/auth/dashboard">All Categories</Link>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category._id}>
              <TableCell>
                <Link to={`/auth/dashboard?category=${category.name}`}>
                  {category.name}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
export default Categories
