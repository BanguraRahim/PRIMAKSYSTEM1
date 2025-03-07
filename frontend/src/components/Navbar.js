//import React, { useEffect, useState } from 'react';
//import axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import { Link, useNavigate } from 'react-router-dom';
//import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome
//import './Navbar.css'; // Import Navbar.css file
//
//const Navbar = () => {
//    const [user, setUser] = useState(null);
//    const navigate = useNavigate();
//
//    useEffect(() => {
//        const fetchProfile = async () => {
//            try {
//                const token = localStorage.getItem('access');
//                if (!token) return;
//
//                const response = await axios.get('http://localhost:8000/profile/', {
//                    headers: {
//                        Authorization: `Bearer ${token}`
//                    }
//                });
//                setUser(response.data);
//            } catch (error) {
//                console.error(error);
//            }
//        };
//
//        fetchProfile();
//    }, []);
//
//    const handleLogout = async () => {
//        try {
//            const refreshToken = localStorage.getItem('refresh');
//            await axios.post('http://localhost:8000/logout/', { refresh_token: refreshToken }, {
//                headers: {
//                    Authorization: `Bearer ${localStorage.getItem('access')}`
//                }
//            });
//            localStorage.removeItem('access');
//            localStorage.removeItem('refresh');
//            localStorage.removeItem('role');
//            navigate('/login');
//        } catch (error) {
//            console.error(error);
//        }
//    };
//
//    return (
//        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#2c3e50', height: '60px' }}>
//            <Link className="navbar-brand text-white font-weight-bold" to="/">
//                <i className="fas fa-home"></i> PRIMAK
//            </Link>
//            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                <span className="navbar-toggler-icon"></span>
//            </button>
//            <div className="collapse navbar-collapse" id="navbarNav">
//                <ul className="navbar-nav ml-auto" style={{ marginLeft: 'auto', fontWeight: 'bold' }}>
//
//                    {user ? (
//                        <>
//                            <li className="nav-item">
//                                <Link className="nav-link text-white" to="/profile">
//                                    {user.profile_picture ? (
//                                        <img src={user.profile_picture} alt={user.username} className="rounded-circle"  />
//                                    ) : (
//                                        <i className="fas fa-user"></i>
//                                    )}
//                                </Link>
//                            </li>
//                            <li className="nav-item">
//                                <Link className="nav-link text-white" to="PrisonOfficeDashboard">
//                                    <i className="fas fa-tachometer-alt"></i> Dashboard
//                                </Link>
//                            </li>
//                            <li className="nav-item">
//                                <button className="nav-link btn btn-link text-white" onClick={handleLogout} style={{ fontWeight: 'bold' }}>
//                                    <i className="fas fa-sign-out-alt"></i> Logout
//                                </button>
//                            </li>
//                        </>
//                    ) : (
//                        <>
//                            <li className="nav-item">
//                                <Link className="nav-link text-white" to="/login">
//                                    <i className="fas fa-sign-in-alt"></i> Login
//                                </Link>
//                            </li>
//                            <li className="nav-item">
//                                <Link className="nav-link text-white" to="/register">
//                                    <i className="fas fa-user-plus"></i> Register
//                                </Link>
//                            </li>
//                        </>
//                    )}
//                </ul>
//            </div>
//        </nav>
//    );
//};
//
//export default Navbar;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome
import './Navbar.css'; // Import Navbar.css file

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [alertMessage, setAlertMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('access');
                if (!token) return;

                const response = await axios.get('http://localhost:8000/profile/', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProfile();
    }, []);

    const handleLogout = async () => {
        try {
            const refreshToken = localStorage.getItem('refresh');
            await axios.post('http://localhost:8000/logout/', { refresh_token: refreshToken }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access')}`
                }
            });
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            localStorage.removeItem('role');
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    };

    // Function to show alert message
    const showAlert = (message) => {
        setAlertMessage(message);
        setTimeout(() => {
            setAlertMessage('');
        }, 3000); // Hide alert after 3 seconds
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info" style={{ backgroundColor: '#2c3e50', height: '60px' }}>
            <Link className="navbar-brand text-white font-weight-bold" to="/">
                <i className="fas fa-home"></i> PRIMAK
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto" style={{ marginLeft: 'auto', fontWeight: 'bold' }}>
                    {user ? (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="PrisonOfficeDashboard">
                                    <i className="fas fa-tachometer-alt"></i> Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link text-white" onClick={handleLogout} style={{ fontWeight: 'bold' }}>
                                    <i className="fas fa-sign-out-alt"></i> Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/login">
                                    <i className="fas fa-sign-in-alt"></i> Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/about">
                                    <i className="fas fa-user-plus"></i> About
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
            {alertMessage && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    {alertMessage}
                    <button type="button" className="btn-close" onClick={() => setAlertMessage('')} aria-label="Close"></button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
