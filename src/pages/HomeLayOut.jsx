import { Outlet } from "react-router-dom"
import Footer from "../component/Footer"
import NavBar from "../component/NavBar"


const HomeLayout = () => {
  return (
    <div className="output">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default HomeLayout
