import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
            <div className="container">
                <Link to="/" className="navbar-brand fs-3 fw-bold">
                        Rick and Monty <span className="text-primary">Wiki</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav fs-5">
                        <NavLink to="/" className="nav-link " activeClassName="active" >
                            Characters
                        </NavLink>
                        <NavLink to="/episodes" className="nav-link" >
                            Episodes
                        </NavLink>
                        <NavLink to="/location" className="nav-link" >
                            Location
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
