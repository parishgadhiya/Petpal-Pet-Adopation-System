import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../Firebaseconfig";
import { collection, where, query, getDocs } from "firebase/firestore";

function Authlogin() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ✅ Login Function
  async function btnLogin(e) {
    e.preventDefault(); // Prevent refresh
    setError("");

    // ✅ Validation
    if (username.trim() === "") {
      setError("Username is required");
      return;
    }

    if (password.trim() === "") {
      setError("Password is required");
      return;
    }

    try {
      const q = query(
        collection(db, "AdminLogin"),
        where("username", "==", username),
        where("password", "==", password)
      );

      const snapshot = await getDocs(q);

      if (snapshot.docs.length > 0) {
        localStorage.setItem("adminUsername", username);
        alert("Admin Login Success");

        // ✅ Navigate to Dashboard
        navigate("/dashboard");

      } else {
        setError("Invalid Username or Password");
      }

    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <div className="authentication-bg">
        <div className="account-pages my-5 pt-sm-5">
          <div className="container">

            <div className="row">
              <div className="col-lg-12 text-center">
                <Link to="/" className="mb-5 d-block auth-logo">
                  <img
                    src="minible/assets/images/logo-dark.png"
                    alt="Logo"
                    height={40}
                    className="logo logo-dark"
                  />
                </Link>
              </div>
            </div>

            <div className="row align-items-center justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card">
                  <div className="card-body p-4">

                    <div className="text-center mt-2">
                      <h5 className="text-primary">Welcome Back !</h5>
                      <p className="text-muted">Sign in to continue.</p>
                    </div>

                    <div className="p-2 mt-4">
                      <form onSubmit={btnLogin}>

                        {/* Error Message */}
                        {error && (
                          <div className="alert alert-danger">
                            {error}
                          </div>
                        )}

                        <div className="mb-3">
                          <label className="form-label">Username</label>
                          <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-control"
                            placeholder="Enter username"
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Password</label>
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            placeholder="Enter password"
                          />
                        </div>

                        <div className="form-check mb-3">
                          <input type="checkbox" className="form-check-input" />
                          <label className="form-check-label">
                            Remember me
                          </label>
                        </div>

                        <div className="text-end">
                          <button
                            type="submit"
                            className="btn btn-primary w-sm"
                          >
                            Log In
                          </button>
                        </div>

                        <div className="mt-4 text-center">
                          <p className="mb-0">
                            Don't have an account?{" "}
                            <Link to="/">User login</Link>
                          </p>
                        </div>

                      </form>
                    </div>

                  </div>
                </div>

                <div className="mt-5 text-center">
                  <p>© Petpal. Crafted with ❤️</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Authlogin;