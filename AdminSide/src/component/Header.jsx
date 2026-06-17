import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import NotificationDropdown from "./NotificationDropdown";

function Header() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [adminUsername, setAdminUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Sync local state if URL param changes elsewhere
    const querySearch = searchParams.get("search") || "";
    setSearch(querySearch);
  }, [searchParams]);

  useEffect(() => {
    const storedAdmin = localStorage.getItem("adminUsername");
    if (storedAdmin) {
      setAdminUsername(storedAdmin);
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      setSearchParams({ search: search.trim() });
    } else {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setSearch(val);
    
    // Live search - update URL params
    if (val.trim() !== "") {
      setSearchParams({ search: val.trim() });
    } else {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminUsername");
    navigate("/authlogin");
  };

  return (
    <header id="page-topbar" style={{
      background: "#ffffff",
      height: "70px",
      position: "fixed",
      top: 0,
      right: 0,
      left: "260px",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      padding: "0 30px",
      borderBottom: "1px solid #edf2f7",
      transition: "all 0.3s ease"
    }}>
      <div className="navbar-header" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
      }}>
        <div className="d-flex align-items-center">
          {/* Menu Toggle for Mobile (Placeholder functionality) */}
          <button
            type="button"
            className="btn px-3 font-size-16 header-item waves-effect"
            style={{ border: "none", background: "transparent", color: "#555", marginRight: "10px" }}
            onClick={() => document.body.classList.toggle("sidebar-enable")}
          >
            <i className="fa fa-fw fa-bars" />
          </button>

          {/* 🔍 Search Bar */}
          <form className="app-search" onSubmit={handleSearch} style={{ position: "relative" }}>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search analytics, pets, or orders..."
                value={search}
                onChange={handleInputChange}
                style={{
                  width: "300px",
                  height: "40px",
                  padding: "0 15px 0 45px",
                  borderRadius: "10px",
                  border: "1px solid #e1e5eb",
                  background: "#f8f9fa",
                  fontSize: "14px",
                  outline: "none",
                  transition: "all 0.3s"
                }}
              />
              <i className="fa-solid fa-magnifying-glass" style={{ 
                position: "absolute", 
                left: "15px", 
                top: "50%", 
                transform: "translateY(-50%)",
                color: "#adb5bd",
                fontSize: "16px"
              }} />
            </div>
          </form>
        </div>

        <div className="d-flex align-items-center">
          {/* 🔔 Notifications */}
          <NotificationDropdown isAdmin={true} />

          {/* Admin Profile Section */}
          <div style={{
            display: "flex",
            alignItems: "center",
            padding: "5px 15px",
            borderRadius: "12px",
            background: "#f8f9fa",
            marginRight: "15px",
            border: "1px solid #eee"
          }}>
            <div style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "#001d3d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "700",
              marginRight: "10px"
            }}>
              {adminUsername ? adminUsername.charAt(0).toUpperCase() : "A"}
            </div>
            <div className="d-none d-md-block">
              <p style={{ margin: 0, fontSize: "12px", color: "#777", fontWeight: "600", lineHeight: 1 }}>Administrator</p>
              <h6 style={{ margin: 0, fontSize: "14px", color: "#001d3d", fontWeight: "700" }}>{adminUsername || "Admin User"}</h6>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="btn"
            style={{
              padding: "10px 20px",
              borderRadius: "10px",
              background: "rgba(239, 68, 68, 0.1)",
              color: "#ef4444",
              border: "none",
              fontWeight: "700",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              transition: "all 0.2s"
            }}
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <span className="d-none d-sm-inline ms-2">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;