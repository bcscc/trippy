import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Header() {
    const { isLoggedIn, setIsLoggedIn } = useAuth();

    return (
        <header data-bs-theme="dark">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Trippy</Link>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                        </ul>
                        {!isLoggedIn ? (
                            <Link className="btn btn-outline-success" to="/login">Login</Link>
                        ) : (
                            <Link className="btn btn-outline-success" to="/" onClick={() => {
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
