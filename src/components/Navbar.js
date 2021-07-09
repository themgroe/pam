import React from 'react';
import '../assets/css/darkly.css';
import '../assets/css/pam.css';

import { Link } from 'react-router-dom';
import Papa from 'papaparse';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
        this.setJson = this.setJson.bind(this);
    }

    getCSV(e) {
        this.setState({
          csv: e.target.files[0]
        }, () => {
            Papa.parse(this.state.csv, {
                complete: this.setJson
            });
        })
    }

    setJson(result) {
        console.log(result);
        this.setState({parsedContent: result.data})
    }

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
                                <div>
                                    <input type="file" onChange={(e) => this.getCSV(e)}/>
                                    <div>{this.state.parsedContent}</div>
                                </div>
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