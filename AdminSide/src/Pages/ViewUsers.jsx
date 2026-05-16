import React, { useState, useEffect } from "react";
import { db } from "../Firebaseconfig";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import Header from "../component/Header";
import Sidebare from "../component/Sidebare";
import Footer from "../component/footer";

function ViewUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      // Fetch all users to avoid filtering out those without 'createdAt' field
      const querySnapshot = await getDocs(collection(db, "users"));
      const userList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      // Sort in memory (newest first)
      userList.sort((a, b) => {
        const timeA = a.createdAt?.seconds || a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const timeB = b.createdAt?.seconds || b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return timeB - timeA;
      });

      setUsers(userList);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  return (
    <div id="layout-wrapper">
      <Header />
      <Sidebare />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between mb-4">
                  <h4 className="mb-0 fw-bold" style={{ color: "#001d3d" }}>Registered Users</h4>
                  <div className="page-title-right">
                    <span className="badge bg-soft-primary text-primary rounded-pill px-3 py-2">
                       Total: {users.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow-sm border-0 rounded-4">
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-hover table-nowrap align-middle mb-0">
                        <thead className="bg-light text-muted text-uppercase small fw-bold">
                          <tr>
                            <th className="px-4 py-3">User info</th>
                            <th className="px-4 py-3">UID</th>
                            <th className="px-4 py-3">Joined Date</th>
                            <th className="px-4 py-3">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {loading ? (
                            <tr>
                              <td colSpan="4" className="text-center p-5">
                                <div className="spinner-border text-primary" role="status"></div>
                                <p className="mt-2 text-muted">Loading users...</p>
                              </td>
                            </tr>
                          ) : users.length > 0 ? (
                            users.map((user) => (
                              <tr key={user.id}>
                                <td className="px-4 py-3">
                                  <div className="d-flex align-items-center">
                                    <div className="avatar-sm bg-soft-primary text-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "40px", height: "40px", fontWeight: "700" }}>
                                      {(user.name || "U")[0].toUpperCase()}
                                    </div>
                                    <div>
                                      <h6 className="mb-0 fw-bold text-dark">{user.name || "Anonymous"}</h6>
                                      <p className="text-muted mb-0 small">{user.email}</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-3">
                                  <code className="text-muted small">{user.uid || user.id}</code>
                                </td>
                                <td className="px-4 py-3">
                                  <span className="text-muted small">
                                    {user.createdAt || user.updatedAt ? (() => {
                                      const d = new Date(user.createdAt?.seconds ? user.createdAt.seconds * 1000 : (user.createdAt || user.updatedAt));
                                      const day = String(d.getDate()).padStart(2, '0');
                                      const month = String(d.getMonth() + 1).padStart(2, '0');
                                      const year = d.getFullYear();
                                      return `${day}/${month}/${year}`;
                                    })() : "N/A"}
                                  </span>
                                </td>
                                <td className="px-4 py-3">
                                  <span className="badge bg-soft-success text-success rounded-pill px-2">Active</span>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="4" className="text-center p-5 text-muted">
                                <i className="fa-solid fa-users-slash mb-3 d-block" style={{ fontSize: "40px", opacity: 0.2 }}></i>
                                No users registered yet.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ViewUsers;
