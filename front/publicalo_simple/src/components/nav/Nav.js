import React from 'react';
import { Link } from "react-router-dom";
function Nav() {
    return (
        <div className="container mt-2">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="nav-link">Inicio</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/publicar" className="nav-link">Publicar</Link>
                                
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Reportes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Configurar</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;