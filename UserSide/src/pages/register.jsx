import { 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider,
  signOut
} from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/navbar";
import { auth, db } from "../firebaseconfig";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import Footer from "../components/footer";

function register() {
  const navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  async function handleSubmit(e) {
    if (e) e.preventDefault();

    if (!name) {
      Swal.fire({
        title: "Full Name is required!",
        icon: "warning"
      });
      return;
    }

    if (!email) {
      Swal.fire({
        title: "Email is required!",
        icon: "warning"
      });
      return;
    }

    if (!emailRegex.test(email)) {
      Swal.fire({
        title: "Invalid email format!",
        icon: "warning"
      });
      return;
    }

    if (!password) {
      Swal.fire({
        title: "Password is required!",
        icon: "warning"
      });
      return;
    }

    if (!confirmPassword) {
      Swal.fire({
        title: "Please confirm your password!",
        icon: "warning"
      });
      return;
    }

    if (!emailRegex.test(email)) {
      Swal.fire({
        title: "Invalid email format!",
        icon: "warning"
      });
      return;
    }

    if (password.length < 6) {
      Swal.fire({
        title: "Password must be at least 6 characters",
        icon: "warning"
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        title: "Passwords do not match!",
        icon: "warning"
      });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Save user info to Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: name,
        email: email,
        createdAt: serverTimestamp()
      });

      console.log("User created and saved:", user);
      await signOut(auth);
      Swal.fire({
        title: "Sign up successfully",
        text: "Please login with your new account.",
        icon: "success"
      });
      navigate("/login");
    } catch (error) {
      console.error(error);
      let errorMessage = error.message;
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "Email already registered! Please login instead.";
      }

      Swal.fire({
        title: "Registration Failed",
        text: errorMessage,
        icon: "error"
      });
    }
  }

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user already exists
      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (userDoc.exists()) {
        // User already registered - send to login
        Swal.fire({
          title: "Account Exists",
          text: "You already have an account! redirecting to login...",
          icon: "info"
        });
        navigate("/login");
        return;
      }

      // New user - Complete registration
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName || "Google User",
        email: user.email,
        lastLogin: serverTimestamp(),
        createdAt: serverTimestamp()
      });

      console.log("Google Sign Up Success:", user);
      await signOut(auth);
      Swal.fire({
        title: "Sign up successfully",
        text: "Account created! Now please Login to continue.",
        icon: "success"
      });
      navigate("/login");
    } catch (error) {
      console.error("Google Sign Up Error:", error);
      Swal.fire({
        title: "Google Auth Failed",
        text: error.message,
        icon: "error"
      });
    }
  };

  return (
    <>
    <Nav/>
    <div className="register-page">
      <div className="register-card">
        <h2>Create Account 🐾</h2>
        <p className="subtitle">Join PetPal Care Center</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>

          <div className="divider" style={{ textAlign: "center", margin: "15px 0", position: "relative" }}>
             <span style={{ background: "#fff", padding: "0 10px", color: "#888", fontSize: "14px" }}>OR</span>
          </div>

          <button 
            type="button" 
            className="google-btn" 
            onClick={handleGoogleSignIn}
            style={{
              width: "100%",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              background: "#fff",
              cursor: "pointer",
              fontWeight: "500",
              color: "#555"
            }}
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" style={{ width: "20px" }} />
            Register with Google
          </button>
        </form>

        <p className="bottom-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );

}

export default register;
 