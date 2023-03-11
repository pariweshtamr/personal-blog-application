import Footer from "../footer/FOoter"
import Header from "../header/Header"
import { LayoutStyles } from "./layoutStyles"

const Layout = ({ children }) => {
  return (
    <LayoutStyles>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutStyles>
  )
}
export default Layout
