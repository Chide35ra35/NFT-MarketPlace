import { Link } from "react-router-dom";

export default function Header(){
  const userInfor = JSON.parse(localStorage.getItem("userInfor"))
  function logout(){
    localStorage.removeItem("userInfor");
    // window.location.reload() 
  }
    return<>
      <nav className="navbar main-navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NFt Market</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
    
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {userInfor ? userInfor.username : "User"}
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/login">Login</Link></li>
            <li><Link className="dropdown-item" to="/register">Register</Link></li>
            {/* <li><Link className="dropdown-item" to="/dashboard">dashboard</Link></li>? */}
            <li  ><a onClick={logout} className="dropdown-item" href="/">Logout</a></li>
            <li>
              <hr className="dropdown-divider" />
            </li>
          </ul>
        </li>
        {userInfor && <li className="nav-item">
          <Link className="nav-link " to={"/dashboard"}>Dashboard</Link>
        </li>
        }
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>

    </>
}