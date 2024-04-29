import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Header() {
    const { isLoggedIn, setIsLoggedIn } = useAuth();

    return (
        <header data-bs-theme="dark">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><span>&#9925;</span> Trippy</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                        </ul>
                        {!isLoggedIn ? (
                            <Link className="btn btn-light" to="/login">Login</Link>
                        ) : (
                            <Link className="btn btn-danger" to="/" onClick={() => {
                                localStorage.removeItem("token");
                                setIsLoggedIn(false);
                            }}>Logout</Link>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
