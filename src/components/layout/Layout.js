import Routers from "../../router/Routers"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import "./layout.scss"

const Layout = () => {
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
