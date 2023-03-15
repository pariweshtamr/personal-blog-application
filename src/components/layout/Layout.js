import { SSRProvider } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import { LayoutStyles } from "./layoutStyles"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { getUserInfo } from "@/redux/Auth/authAction"

const Layout = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth)
  return (
    <SSRProvider>
      <LayoutStyles>
        <Header />
        <main>{children}</main>
        <Footer />
      </LayoutStyles>
    </SSRProvider>
  )
}
export default Layout
