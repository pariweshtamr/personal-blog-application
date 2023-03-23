import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { Link, useSearchParams } from "react-router-dom"
import { categories } from "../../../constants/data"
import "./categories.scss"
const Categories = () => {
  const [searchParams] = useSearchParams()
  const category = searchParams.get("category")

  return (
    <>
      <Link to={`/auth/create?category=${category}`}>
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
            <TableRow key={category.id}>
              <TableCell>
                <Link to={`/auth/dashboard?category=${category.type}`}>
                  {category.type}
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
