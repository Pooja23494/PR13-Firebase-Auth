import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { auth, provider } from "../config/firebase";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../assets/google-logo.jpg";

const SignIn = ({ setIsLogin }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = user;
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        toast.success("Welcome user..");
        setIsLogin(true);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleGoogleAuth = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        toast.success("Login Successfully..");
        setIsLogin(true);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
      <div className="signin vh-100 d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <form
                action=""
                method="post"
                className="card p-5 shadow-lg rounded-4"
                onSubmit={handleSubmit}
              >
                <h2 className="text-center mb-4">Sign In</h2>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email :{" "}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={user.email || ""}
                    onChange={handleChange}
                    id="email"
                    className="form-control rounded-pill"
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password :{" "}
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={user.password || ""}
                    onChange={handleChange}
                    id="password"
                    className="form-control rounded-pill"
                    placeholder="Enter your Password"
                  />
                </div>
                <div className="text-end mb-3">
                  <span
                    onClick={() => navigate("/signup")}
                    style={{
                      cursor: "pointer",
                      fontSize: "14px",
                      color: "#0d6efd",
                    }}
                  >
                    Create new account
                  </span>
                </div>
                <button
                  type="submit"
                  className="btn btn-dark w-100 rounded-pill mb-3"
                >
                  Sign In
                </button>

                <div className="text-center mb-2 text-muted">OR</div>

                <button
                  type="button"
                  onClick={handleGoogleAuth}
                  className="btn btn-outline-secondary w-100 rounded-pill d-flex align-items-center justify-content-center gap-2"
                >
                  <img
                    src={googleIcon}
                    alt="google"
                    style={{ width: "20px" }}
                  />
                  Continue with Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
