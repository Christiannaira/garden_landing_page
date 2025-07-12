import "./navbar.css";
import { CiMenuBurger } from "react-icons/ci";
import { useNavigate } from "react-router-dom";



const Navbar = () => {

  const navigate = useNavigate();

  const handleNav = (type) => {
    
    navigate(`/${type}`)

  }

  return (
    <div >
      <section className="navbar" id="navbar">
        <div className="navbar-content">
          <div className="navbar-content_image">
            Garden AI
          </div>
          <div className="navbar-content_buttons">
            <button className="login-btn" onClick={() => {handleNav("login")}}>Login</button>
            <button className="signup-btn" onClick={() => {handleNav("signup")}}>Signup</button>
          </div>
          <div className="navbar-content_menu">
            <CiMenuBurger/>
          </div>
        </div>

        <div/>
      </section>
    </div>
  )
}

export default Navbar
