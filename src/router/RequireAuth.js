import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const RequireAuth = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth)

  return isLoggedIn ? <>{children}</> : <Navigate replace to="/auth" />
}
export default RequireAuth
