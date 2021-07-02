import React from 'react';
import '../assets/css/darkly.css';
import '../assets/css/pam.css';

class Navbar extends React.Component {
    render() {
        return(
            <nav class="navbar navbar-expand-lg bg-green font-black">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">PAM</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarColor02">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                            <a class="nav-link active" href="Home">Home
                                <span class="visually-hidden">(current)</span>
                            </a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="Analytics">Analytics</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="ImportData">Import Data</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="About">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;