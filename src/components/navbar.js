import React from 'react';
import '../assets/css/darkly.css';
import '../assets/css/pam.css';

import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-green">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">PAM</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarColor02">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                            <Link class="nav-link active" to="/home">Home
                                <span class="visually-hidden">(current)</span>
                            </Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/analytics">Analytics</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/import-data">Import Data</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;