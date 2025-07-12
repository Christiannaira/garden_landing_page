import "./navbar.css";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  return (
    <div >
      <section className="navbar" id="navbar">
        <div className="navbar-content">
          <div className="navbar-content_image">
            Garden AI
          </div>
          <div className="navbar-content_buttons">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Signup</button>
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
