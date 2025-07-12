import "./navbar.css";

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
        </div>

        <div/>
      </section>
    </div>
  )
}

export default Navbar
