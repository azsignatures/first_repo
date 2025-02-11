import { NavLink } from "react-router-dom"
import './../assets/styles/nav.css'
import mypix from '../assets/images/logomi.png'
 

const NavBar = () => {
  return (
    
    <div className="nav">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <div className="logomi">
        <img src={mypix} alt="logo" width='40px' height='50px'/>
      </div>
      <div className="navlink">
        <NavLink to='/' ><i class="fa-solid fa-house"></i>Home </NavLink>
        <NavLink to='about' >About </NavLink>
       <NavLink to='contactus' >Contact_us </NavLink>
       <NavLink to='services'>Services </NavLink>
       <NavLink to= 'github'>GitHub </NavLink>
       <NavLink to= 'resume'>Resume</NavLink>
      </div>
      
      
    </div>
  )
}

export default NavBar
