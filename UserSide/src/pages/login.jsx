import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseconfig";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail, 
  setPersistence, 
  browserSessionPersistence,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import Nav from "../components/navbar";
import Footer from "../components/footer";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redirect if already logged in
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          navigate("/About");
        }
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    
    // Email Regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    if (password.length < 6) {
      Swal.fire({
        title: "Password must be at least 6 characters",
        icon: "warning"
      });
      return;
    }

    try {
      // Set persistence to browser session (logged out when tab/window is closed)
      await setPersistence(auth, browserSessionPersistence);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("Login successful:", userCredential.user);

      Swal.fire({
        title: "Login Successfully!",
        icon: "success"
      });

      navigate("/");

    } catch (error) {
      console.error(error);
      let errorMessage = error.message;
      if (error.code === "auth/user-not-found") {
        errorMessage = "Account not found. Please register first!";
      }

      Swal.fire({
        title: "Login Failed",
        text: errorMessage,
        icon: "error"
      });
    }
  }

  // Google Sign In Function
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user exists in Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      
      if (!userDoc.exists()) {
        // New user trying to login - block them
        await signOut(auth);
        Swal.fire({
          title: "Account Not Found",
          text: "You haven't registered yet. Please go to the Register page first!",
          icon: "warning"
        });
        return;
      }

      // Existing user - Sync login time
      await setDoc(doc(db, "users", user.uid), {
        lastLogin: serverTimestamp()
      }, { merge: true });

      console.log("Google Sign In Success:", user);
      
      Swal.fire({
        title: "Login Successfully!",
        icon: "success"
      });
      
      navigate("/About");
    } catch (error) {
      console.error("Google Sign In Error:", error);
      Swal.fire({
        title: "Google Login Failed",
        text: error.message,
        icon: "error"
      });
    }
  };

  // Forgot Password Function
  const forgotPassword = async () => {
    if (!email) {
      Swal.fire({
        title: "Enter your email first",
        icon: "warning"
      });
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Swal.fire({
        title: "Password Reset Email Sent",
        text: "Check your email to reset password",
        icon: "success"
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error"
      });
    }
  };

  return (
    <>
      <Nav />
      <div className="login-page">
        <div className="login-card">
          <h2>Welcome Back 🐾</h2>
          <p className="subtitle">Login to PetPal Care Center</p>

          <form onSubmit={handleSubmit}>
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
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div style={{ textAlign: "right", marginBottom: "10px" }}>
              <button
                type="button"
                onClick={forgotPassword}
                style={{
                  background: "none",
                  border: "none",
                  color: "#007bff",
                  cursor: "pointer",
                  padding: 0
                }}
              >
                Forgot Password?
              </button>
            </div>

            <button type="submit" className="btn">
              Login
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
                marginTop: "10px",
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
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/wait.gif" alt="" style={{display: "none"}} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" style={{ width: "20px" }} />
              Login with Google
            </button>
          </form>

          <p className="bottom-text">
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;