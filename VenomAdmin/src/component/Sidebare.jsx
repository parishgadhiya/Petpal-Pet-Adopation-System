import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebare() {
  const location = useLocation();

  const menuItems = [
    { path: "/addcatagory", label: "Add Category", icon: "fa-solid fa-folder-plus" },
    { path: "/dashboard", label: "Dashboard", icon: "fa-solid fa-home" },
    { path: "/viewcategory", label: "View Category", icon: "fa-solid fa-folder-open" },
    { path: "/addproduct", label: "Add Product", icon: "fa-solid fa-box-open" },
    { path: "/viewproduct", label: "View Product", icon: "fa-solid fa-boxes-stacked" },
    { path: "/addpet", label: "Add Pet", icon: "fa-solid fa-folder-plus" },
    { path: "/viewpets", label: "View Pets", icon: "fa-solid fa-paw" },
    { path: "/adoptionrequests", label: "Adoption Requests", icon: "fa-solid fa-id-card" },
    { path: "/pendingrequests", label: "Pending Approvals", icon: "fa-solid fa-hourglass-half" },
    { path: "/vieworders", label: "View Orders", icon: "fa-solid fa-cart-shopping" },
    { path: "/pickupscheduling", label: "Pickup Scheduling", icon: "fa-solid fa-truck-pickup" },
    { path: "/viewreviews", label: "Customer Reviews", icon: "fa-solid fa-star" },
    { path: "/viewusers", label: "View Users", icon: "fa-solid fa-users" },
    { path: "/viewchats", label: "Support Chats", icon: "fa-solid fa-comments" },
  ];

  return (
    <div className="vertical-menu" style={{ 
      background: "#ffffff", 
      width: "260px", 
      height: "100vh", 
      position: "fixed", 
      top: 0, 
      left: 0, 
      color: "#333",
      boxShadow: "2px 0 10px rgba(0,0,0,0.02)",
      zIndex: 1001,
      transition: "all 0.3s ease",
      display: "flex",
      flexDirection: "column",
      borderRight: "1px solid #edf2f7"
    }}>
      <div className="navbar-brand-box" style={{ 
        padding: "20px 20px 15px", 
        textAlign: "center"
      }}>
        <Link to="/dashboard" className="logo" style={{ textDecoration: "none", display: "block" }}>
            <img src="/logo.png" alt="PetPal Logo" style={{ height: "40px", objectFit: "contain", marginBottom: "8px" }} />
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px"
            }}>
                <span style={{ height: "1px", width: "15px", background: "#f87d47", opacity: 0.3 }}></span>
                <p style={{ 
                    margin: 0, 
                    fontSize: "10px", 
                    color: "#f87d47", 
                    fontWeight: "800", 
                    letterSpacing: "2px",
                    textTransform: "uppercase"
                }}>Admin</p>
                <span style={{ height: "1px", width: "15px", background: "#f87d47", opacity: 0.3 }}></span>
            </div>
        </Link>
      </div>

      <div data-simplebar className="sidebar-menu-scroll" style={{ padding: "5px 10px", flex: 1, overflowY: "auto" }}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu" style={{ padding: 0 }}>
            <li className="menu-title" style={{ 
              color: "#a0aec0", 
              fontSize: "10px", 
              fontWeight: "700", 
              textTransform: "uppercase", 
              letterSpacing: "1px",
              padding: "10px 15px 5px",
              marginBottom: "4px"
            }}>Management Console</li>
            
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path} style={{ marginBottom: "2px" }}>
                  <Link 
                    to={item.path} 
                    className={`waves-effect ${isActive ? 'active' : ''}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "10px 15px",
                      color: isActive ? "#001d3d" : "#4a5568",
                      textDecoration: "none",
                      borderRadius: "10px",
                      background: isActive ? "#f7fafc" : "transparent",
                      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                      fontWeight: isActive ? "700" : "500",
                      position: "relative",
                      border: isActive ? "1px solid #e2e8f0" : "1px solid transparent"
                    }}
                  >
                    <i className={item.icon} style={{ 
                      fontSize: "16px", 
                      width: "22px", 
                      marginRight: "10px",
                      color: isActive ? "#f87d47" : "#718096"
                    }}></i>
                    <span style={{ fontSize: "13.5px" }}>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      
      <div className="sidebar-footer" style={{
        padding: "25px 20px",
        borderTop: "1px solid #edf2f7",
        background: "#fcfdff"
      }}>
        <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between",
            opacity: 0.6
        }}>
           <span style={{ fontSize: "10px", fontWeight: "700", color: "#718096", textTransform: "uppercase" }}>System v2.1</span>
           <div style={{ height: "8px", width: "8px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 5px rgba(16, 185, 129, 0.5)" }}></div>
        </div>
      </div>
    </div>
  );
}

export default Sidebare;

