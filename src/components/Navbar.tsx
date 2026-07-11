import { FaBriefcase } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">

            <div className="container">

                <a className="navbar-brand fw-bold" href="#">
                    <FaBriefcase className="me-2" />
                    Nudi Sanchi Career Portal
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Latest Jobs</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Government Jobs</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Private Jobs</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">YouTube Guides</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Admin</a>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;