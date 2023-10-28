
import { Link, NavLink } from 'react-router-dom'
export default function Header() {
  return (
     <nav className="navbar navbar-expand-lg bg-primary mb-4">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2 decoration">
            <NavLink to="/" 
            className={({ isActive }) => isActive ? "activee decoration" : "inactivee decoration"}>
                Read
            </NavLink>
        </li>
        <li className="nav-item mx-2 decoration">
            <NavLink to="/create" 
                        className={({ isActive }) => isActive ? "activee decoration" : 
            "inactivee decoration" }>
                create
            </NavLink>
        </li>
       
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>

  )
}
