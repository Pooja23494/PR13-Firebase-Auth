import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { toast } from "react-toastify";

const Header = ({ setIsLogin }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (auth.currentUser) {
      setUserName(auth.currentUser.displayName || auth.currentUser.email);
    }
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out successfully");
        setIsLogin(false);
        navigate("/signin");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3 sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          🛍️ MyStore
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                About
              </Link>
            </li>
          </ul>
          {userName && (
            <span className="text-white">
               Hi, <strong>{userName}</strong>
            </span>
          )}
          <button
            className="btn btn-danger rounded-pill ms-4"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
