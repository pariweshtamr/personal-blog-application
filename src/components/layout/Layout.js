import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { logoutAction } from "../../redux/Auth/authAction"
import Routers from "../../router/Routers"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import "./layout.scss"

const Layout = () => {
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state) => state.auth)

  useEffect(() => {
    !isLoggedIn && dispatch(logoutAction())
  }, [isLoggedIn, dispatch])
  return (
    <div className="layout">
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </div>
  )
}
export default Layout
