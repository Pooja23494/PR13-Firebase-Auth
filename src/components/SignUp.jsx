import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth} from "../config/firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = user;
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        toast.success("User Created Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="signup vh-100 d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <form
                action=""
                method="post"
                className="card p-5 rounded-4 shadow-lg"
                onSubmit={handleSubmit}
              >
                <h2 className="text-center mb-4">Sign Up</h2>
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
                <div className="mb-4">
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
                <button
                  type="submit"
                  className="btn btn-dark w-100 rounded-pill mb-3"
                >
                  Sign Up
                </button>
                <p className="text-center mt-4">
                  Already have an Account?{" "}
                  <span
                    onClick={() => navigate("/signin")}
                    style={{
                      cursor: "pointer",
                      fontSize: "14px",
                      color: "#0d6efd"
                    }}
                  >
                    Sign In
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
