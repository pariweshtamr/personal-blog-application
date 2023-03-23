import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const RequireAuth = ({ children }) => {
  const { isLoggedIn, user } = useSelector((state) => state.auth)

  return isLoggedIn ? children : <Navigate to="/auth" />
}
export default RequireAuth
