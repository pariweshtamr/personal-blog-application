import { ToastContainer } from "react-toastify"
import "./App.scss"
import Layout from "./components/layout/Layout"

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Layout />
    </div>
  )
}

export default App
