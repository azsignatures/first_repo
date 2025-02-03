import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <div>
      <NavLink to='/' >Home </NavLink>
      <NavLink to='about' >About </NavLink>
      <NavLink to='contactus' >Contact_us </NavLink>
      <NavLink to='services'>Services</NavLink>
    </div>
  )
}

export default NavBar
