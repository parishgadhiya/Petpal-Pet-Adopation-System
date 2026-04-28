import React, { useEffect, useState } from "react";
import { auth, db } from "../firebaseconfig";
import { onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Nav from "../components/navbar";
import Footer from "../components/footer";
import PageTitle from "../components/pagetitle";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    address: "",
    bio: ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists()) {
            const data = userDoc.data();
            setUserData({
              name: data.name || currentUser.displayName || "",
              phone: data.phone || "",
              address: data.address || "",
              bio: data.bio || ""
            });
          } else {
            setUserData(prev => ({ ...prev, name: currentUser.displayName || "" }));
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        navigate("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => setMessage({ text: "", type: "" }), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (userData.name !== user.displayName) {
        await updateProfile(auth.currentUser, {
          displayName: userData.name
        });
      }

      await setDoc(doc(db, "users", user.uid), {
        ...userData,
        email: user.email,
        updatedAt: new Date().toISOString()
      }, { merge: true });

      setMessage({ text: "Profile updated successfully!", type: "success" });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage({ text: "Failed to update profile. Please try again.", type: "error" });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="preloader" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f8f9fa" }}>
         <div className="loader-box" style={{ textAlign: "center" }}>
            <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }}></div>
            <p style={{ marginTop: "15px", fontWeight: "600", color: "#001d3d" }}>Setting up your profile...</p>
         </div>
      </div>
    );
  }

  return (
    <>
      <Nav />
      <main style={{ backgroundColor: "#f0f2f5" }}>
        <PageTitle title="Account Dashboard" breadcrumb="Profile" />
        
        {/* Notification Toast */}
        {message.text && (
          <div style={{
            position: "fixed",
            top: "100px",
            right: "30px",
            padding: "16px 24px",
            borderRadius: "12px",
            backgroundColor: message.type === "success" ? "#10b981" : "#ef4444",
            color: "white",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            fontWeight: "600",
            animation: "slideInRight 0.3s ease-out"
          }}>
            <i className={message.type === "success" ? "flaticon-check-mark mr-2" : "flaticon-warning mr-2"} />
            {message.text}
          </div>
        )}

        <section className="profile__area pt-100 pb-100">
          <div className="container">
            <div className="row">
              {/* Sidebar Info Card */}
              <div className="col-lg-4 mb-30">
                <div className="profile__sidebar" style={{ 
                  background: "#fff", 
                  borderRadius: "24px", 
                  overflow: "hidden",
                  boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.04)"
                }}>
                  <div className="sidebar__header" style={{ 
                    background: "linear-gradient(135deg, #001d3d 0%, #003566 100%)",
                    padding: "40px 20px",
                    textAlign: "center"
                  }}>
                    <div className="avatar-wrapper" style={{
                      position: "relative",
                      width: "140px",
                      height: "140px",
                      margin: "0 auto 20px",
                      borderRadius: "50%",
                      padding: "5px",
                      background: "rgba(255,255,255,0.2)"
                    }}>
                      <img 
                        src={user?.photoURL || "/petpal/assets/img/others/avatar.png"} 
                        alt="Profile" 
                        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%", border: "4px solid #fff" }}
                      />
                    </div>
                    <h3 style={{ color: "#fff", fontSize: "24px", fontWeight: "700", marginBottom: "5px" }}>
                      {userData.name || "PetPal User"}
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", marginBottom: "0" }}>
                      Member since {user?.metadata.creationTime ? new Date(user.metadata.creationTime).getFullYear() : "2024"}
                    </p>
                  </div>
                  
                  <div className="sidebar__menu" style={{ padding: "30px" }}>
                    <ul className="list-wrap">
                      <li style={{ marginBottom: "15px" }}>
                        <button 
                          className={`w-100 text-left d-flex align-items-center justify-content-between p-3 ${!isEditing ? 'active-menu' : ''}`}
                          onClick={() => setIsEditing(false)}
                          style={{
                            background: !isEditing ? "#f0f2f5" : "transparent",
                            border: "none",
                            borderRadius: "12px",
                            color: !isEditing ? "#001d3d" : "#777",
                            fontWeight: !isEditing ? "700" : "500",
                            transition: "all 0.3s"
                          }}
                        >
                          <span><i className="flaticon-user mr-2" /> Overview</span>
                          {!isEditing && <i className="flaticon-right-arrow" style={{ fontSize: "12px" }} />}
                        </button>
                      </li>
                      <li style={{ marginBottom: "15px" }}>
                        <button 
                          onClick={() => navigate("/PetStatus")}
                          className="w-100 text-left d-flex align-items-center p-3"
                          style={{
                            background: "transparent",
                            border: "none",
                            borderRadius: "12px",
                            color: "#777",
                            fontWeight: "500",
                            transition: "all 0.3s"
                          }}
                        >
                          <i className="flaticon-pawprint mr-2" /> My Adoption Requests
                        </button>
                      </li>
                      <hr style={{ margin: "20px 0", opacity: "0.1" }} />
                      <li>
                        <button 
                          onClick={handleLogout}
                          className="w-100 text-left d-flex align-items-center p-3"
                          style={{
                            background: "rgba(239, 68, 68, 0.05)",
                            border: "none",
                            borderRadius: "12px",
                            color: "#ef4444",
                            fontWeight: "600",
                            transition: "all 0.3s"
                          }}
                        >
                          <i className="flaticon-logout mr-2" /> Logout Session
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="col-lg-8">
                <div className="main__content-wrap" style={{ 
                  background: "#fff", 
                  borderRadius: "24px", 
                  padding: "40px",
                  minHeight: "500px",
                  boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.04)"
                }}>
                  <div className="section-header d-flex justify-content-between align-items-center mb-40">
                    <div>
                      <h4 style={{ fontSize: "24px", fontWeight: "800", color: "#001d3d", marginBottom: "5px" }}>
                        {isEditing ? "Update Profile Information" : "Personal Details"}
                      </h4>
                      <p style={{ color: "#777", marginBottom: "0" }}>
                        {isEditing ? "Update your details below to keep your profile current." : "View your contact and location information."}
                      </p>
                    </div>
                    {!isEditing && (
                      <button 
                        className="btn btn-sm" 
                        onClick={() => setIsEditing(true)}
                        style={{ padding: "12px 25px", borderRadius: "12px", fontSize: "14px", fontWeight: "700" }}
                      >
                        Edit Profile
                      </button>
                    )}
                  </div>

                  {isEditing ? (
                    <form onSubmit={handleUpdate} className="profile-form row">
                      <div className="col-md-6 mb-20">
                        <label style={{ display: "block", marginBottom: "10px", fontWeight: "700", color: "#001d3d", fontSize: "14px" }}>FULL NAME</label>
                        <input 
                          type="text" 
                          name="name" 
                          value={userData.name} 
                          onChange={handleChange}
                          placeholder="Your full name"
                          style={{ width: "100%", padding: "15px 20px", borderRadius: "12px", border: "2px solid #f0f2f5", outline: "none", fontSize: "15px", transition: "border 0.3s" }}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-20">
                        <label style={{ display: "block", marginBottom: "10px", fontWeight: "700", color: "#001d3d", fontSize: "14px" }}>PHONE NUMBER</label>
                        <input 
                          type="text" 
                          name="phone" 
                          value={userData.phone} 
                          onChange={handleChange}
                          placeholder="+1 234 567 890"
                          style={{ width: "100%", padding: "15px 20px", borderRadius: "12px", border: "2px solid #f0f2f5", outline: "none", fontSize: "15px" }}
                        />
                      </div>
                      <div className="col-12 mb-20">
                        <label style={{ display: "block", marginBottom: "10px", fontWeight: "700", color: "#001d3d", fontSize: "14px" }}>LOCATION / ADDRESS</label>
                        <input 
                          type="text" 
                          name="address" 
                          value={userData.address} 
                          onChange={handleChange}
                          placeholder="City, State, Country"
                          style={{ width: "100%", padding: "15px 20px", borderRadius: "12px", border: "2px solid #f0f2f5", outline: "none", fontSize: "15px" }}
                        />
                      </div>
                      <div className="col-12 mb-30">
                        <label style={{ display: "block", marginBottom: "10px", fontWeight: "700", color: "#001d3d", fontSize: "14px" }}>ABOUT YOURSELF</label>
                        <textarea 
                          name="bio" 
                          value={userData.bio} 
                          onChange={handleChange}
                          placeholder="Write a short bio..."
                          style={{ width: "100%", padding: "15px 20px", borderRadius: "12px", border: "2px solid #f0f2f5", outline: "none", fontSize: "15px", minHeight: "120px", resize: "none" }}
                        />
                      </div>
                      <div className="col-12 d-flex gap-3 mt-10">
                        <button type="submit" className="btn" disabled={saving} style={{ padding: "15px 40px", flex: "1" }}>
                          {saving ? "Saving Changes..." : "Save Selection"}
                        </button>
                        <button type="button" className="btn btn-two" onClick={() => setIsEditing(false)} style={{ padding: "15px 40px", flex: "1", background: "#f0f2f5", color: "#001d3d", borderColor: "#f0f2f5" }}>
                          Cancel Edit
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="details-grid row">
                      <div className="col-md-6 mb-30">
                        <div className="detail-card p-4" style={{ background: "#f8f9fa", borderRadius: "20px", border: "1px solid #eee" }}>
                           <small style={{ color: "#777", textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px", fontSize: "11px" }}>Email ID</small>
                           <h5 style={{ margin: "5px 0 0", fontSize: "17px", fontWeight: "700", color: "#001d3d" }}>{user?.email}</h5>
                        </div>
                      </div>
                      <div className="col-md-6 mb-30">
                        <div className="detail-card p-4" style={{ background: "#f8f9fa", borderRadius: "20px", border: "1px solid #eee" }}>
                           <small style={{ color: "#777", textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px", fontSize: "11px" }}>Contact Number</small>
                           <h5 style={{ margin: "5px 0 0", fontSize: "17px", fontWeight: "700", color: "#001d3d" }}>{userData.phone || "Not Updated"}</h5>
                        </div>
                      </div>
                      <div className="col-md-12 mb-30">
                        <div className="detail-card p-4" style={{ background: "#f8f9fa", borderRadius: "20px", border: "1px solid #eee" }}>
                           <small style={{ color: "#777", textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px", fontSize: "11px" }}>Lives In</small>
                           <h5 style={{ margin: "5px 0 0", fontSize: "17px", fontWeight: "700", color: "#001d3d" }}>{userData.address || "Location not set"}</h5>
                        </div>
                      </div>
                      {userData.bio && (
                        <div className="col-md-12 mb-30">
                          <div className="detail-card p-4" style={{ background: "#f8f9fa", borderRadius: "20px", border: "1px solid #eee" }}>
                             <small style={{ color: "#777", textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px", fontSize: "11px" }}>Bio Description</small>
                             <p style={{ margin: "10px 0 0", fontSize: "16px", lineHeight: "1.6", color: "#444" }}>{userData.bio}</p>
                          </div>
                        </div>
                      )}
                      
                      {/* Stats / Quick Info */}
                      <div className="col-12 mt-20">
                        <div className="info-alert p-4 d-flex align-items-center" style={{ background: "rgba(248, 125, 71, 0.08)", borderRadius: "20px", border: "1px dashed #f87d47" }}>
                           <div className="icon mr-20" style={{ fontSize: "30px", color: "#f87d47" }}>
                              <i className="flaticon-pawprint" />
                           </div>
                           <div>
                              <h6 style={{ margin: "0", fontWeight: "700", color: "#001d3d" }}>Join the PetPal Community!</h6>
                              <p style={{ margin: "0", fontSize: "14px", color: "#555" }}>Thank you for being a part of our pet care family. You can track your adoptions in the sidebar menu.</p>
                           </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Dynamic CSS for extra bits */}
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .active-menu {
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
        .btn-sm:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
      `}</style>
    </>
  );
};

export default UserProfile;
