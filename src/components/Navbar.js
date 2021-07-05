import React from 'react';
import '../assets/css/darkly.css';
import '../assets/css/pam.css';

import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-green">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">PAM</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto navbar-links">
                            <div className="page-links">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/analytics">Analytics</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/import-data">Import Data</Link>
                                </li>
                            </div>
                            <div className="info-links">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;