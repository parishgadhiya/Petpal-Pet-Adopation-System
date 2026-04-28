import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../component/footer";
import Header from "../component/Header";
import Sidebare from "../component/Sidebare";
import { db } from "../Firebaseconfig";
import { collection, where, query, getDocs } from "firebase/firestore";
function Dashborad() {
  const [totalCategories, settotalCategories] = useState(0);
  const [totalPets, setTotalPets] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    fetchMetrics();
    fetchRecentOrders();
  }, [])

  async function fetchRecentOrders() {
    try {
      const q = query(collection(db, "orders"));
      const querySnapshot = await getDocs(q);
      const orders = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      // Sort by newest first and take top 5
      orders.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
      setRecentOrders(orders.slice(0, 5));
    } catch (error) {
      console.error("Error fetching recent orders:", error);
    }
  }

  async function fetchMetrics() {
    try {
      const catSnap = await getDocs(collection(db, "Categories"));
      settotalCategories(catSnap.docs.length);

      const petSnap = await getDocs(collection(db, "pets"));
      setTotalPets(petSnap.docs.length);

      const prodSnap = await getDocs(collection(db, "products"));
      setTotalProducts(prodSnap.docs.length);

      const orderSnap = await getDocs(collection(db, "orders"));
      setTotalOrders(orderSnap.docs.length);

      const reviewSnap = await getDocs(collection(db, "reviews"));
      setTotalReviews(reviewSnap.docs.length);

      const userSnap = await getDocs(collection(db, "users"));
      setTotalUsers(userSnap.docs.length);
    } catch (error) {
      console.error("Error fetching metrics:", error);
    }
  }
  return (

    <>
    <div id="layout-wrapper">
      <Header />
      <Sidebare />

      <div className="main-content" style={{ transition: "all 0.3s ease" }}>
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between mb-4">
                  <h4 className="mb-0" style={{ fontWeight: "800", color: "#001d3d" }}>Dashboard Overview</h4>
                  <div className="page-title-right">
                    <p className="text-muted mb-0">Welcome back, Admin!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-xl-3">
                <Link to="/viewpets" style={{ textDecoration: 'none' }}>
                  <div className="card shadow-sm border-0" style={{ 
                    background: "linear-gradient(135deg, #e0f2ff 0%, #ffffff 100%)",
                    borderLeft: "5px solid #001d3d" 
                  }}>
                    <div className="card-body p-4">
                      <div className="float-end">
                        <div style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "12px",
                          background: "rgba(0, 29, 61, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}>
                          <i className="fa-solid fa-paw" style={{ fontSize: "24px", color: "#001d3d" }}></i>
                        </div>
                      </div>
                      <div>
                        <p className="text-muted fw-bold mb-1" style={{ fontSize: "12px", textTransform: "uppercase" }}>Total Pets</p>
                        <h2 className="mb-0" style={{ fontWeight: "800", color: "#001d3d" }}>{totalPets}</h2>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-6 col-xl-3">
                <Link to="/viewcategory" style={{ textDecoration: 'none' }}>
                  <div className="card shadow-sm border-0" style={{ 
                    background: "linear-gradient(135deg, #e6fffa 0%, #ffffff 100%)",
                    borderLeft: "5px solid #22c55e" 
                  }}>
                    <div className="card-body p-4">
                      <div className="float-end">
                        <div style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "12px",
                          background: "rgba(34, 197, 94, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}>
                          <i className="fa-solid fa-layer-group" style={{ fontSize: "24px", color: "#22c55e" }}></i>
                        </div>
                      </div>
                      <div>
                        <p className="text-muted fw-bold mb-1" style={{ fontSize: "12px", textTransform: "uppercase" }}>Categories</p>
                        <h2 className="mb-0" style={{ fontWeight: "800", color: "#22c55e" }}>{totalCategories}</h2>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-6 col-xl-3">
                <Link to="/viewproduct" style={{ textDecoration: 'none' }}>
                  <div className="card shadow-sm border-0" style={{ 
                    background: "linear-gradient(135deg, #fffbeb 0%, #ffffff 100%)",
                    borderLeft: "5px solid #f59e0b" 
                  }}>
                    <div className="card-body p-4">
                      <div className="float-end">
                        <div style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "12px",
                          background: "rgba(245, 158, 11, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}>
                          <i className="fa-solid fa-box" style={{ fontSize: "24px", color: "#f59e0b" }}></i>
                        </div>
                      </div>
                      <div>
                        <p className="text-muted fw-bold mb-1" style={{ fontSize: "12px", textTransform: "uppercase" }}>Products</p>
                        <h2 className="mb-0" style={{ fontWeight: "800", color: "#f59e0b" }}>{totalProducts}</h2>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-6 col-xl-3">
                <Link to="/vieworders" style={{ textDecoration: 'none' }}>
                  <div className="card shadow-sm border-0" style={{ 
                    background: "linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%)",
                    borderLeft: "5px solid #3b82f6" 
                  }}>
                    <div className="card-body p-4">
                      <div className="float-end">
                        <div style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "12px",
                          background: "rgba(59, 130, 246, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}>
                          <i className="fa-solid fa-cart-shopping" style={{ fontSize: "24px", color: "#3b82f6" }}></i>
                        </div>
                      </div>
                      <div>
                        <p className="text-muted fw-bold mb-1" style={{ fontSize: "12px", textTransform: "uppercase" }}>Orders</p>
                        <h2 className="mb-0" style={{ fontWeight: "800", color: "#3b82f6" }}>{totalOrders}</h2>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-6 col-xl-3 mt-md-4 mt-xl-0">
                <Link to="/viewreviews" style={{ textDecoration: 'none' }}>
                  <div className="card shadow-sm border-0" style={{ 
                    background: "linear-gradient(135deg, #fff5f5 0%, #ffffff 100%)",
                    borderLeft: "5px solid #f87171" 
                  }}>
                    <div className="card-body p-4">
                      <div className="float-end">
                        <div style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "12px",
                          background: "rgba(248, 113, 113, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}>
                          <i className="fa-solid fa-star" style={{ fontSize: "24px", color: "#f87171" }}></i>
                        </div>
                      </div>
                      <div>
                        <p className="text-muted fw-bold mb-1" style={{ fontSize: "12px", textTransform: "uppercase" }}>Reviews</p>
                        <h2 className="mb-0" style={{ fontWeight: "800", color: "#f87171" }}>{totalReviews}</h2>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-6 col-xl-3 mt-4">
                <Link to="/viewusers" style={{ textDecoration: 'none' }}>
                  <div className="card shadow-sm border-0" style={{ 
                    background: "linear-gradient(135deg, #f3e8ff 0%, #ffffff 100%)",
                    borderLeft: "5px solid #a855f7" 
                  }}>
                    <div className="card-body p-4">
                      <div className="float-end">
                        <div style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "12px",
                          background: "rgba(168, 85, 247, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}>
                          <i className="fa-solid fa-users" style={{ fontSize: "24px", color: "#a855f7" }}></i>
                        </div>
                      </div>
                      <div>
                        <p className="text-muted fw-bold mb-1" style={{ fontSize: "12px", textTransform: "uppercase" }}>Total Users</p>
                        <h2 className="mb-0" style={{ fontWeight: "800", color: "#a855f7" }}>{totalUsers}</h2>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-lg-12">
                <div className="card shadow-sm border-0">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h4 className="card-title m-0" style={{ fontWeight: "700" }}>Recent Transactions</h4>
                      <Link to="/vieworders" className="btn btn-link btn-sm p-0" style={{ color: "#001d3d", fontWeight: "600", textDecoration: "none" }}>
                        View All <i className="fa-solid fa-arrow-right ml-1"></i>
                      </Link>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-hover mb-0">
                        <thead>
                          <tr>
                            <th>Order ID</th>
                            <th>Billing Name</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Method</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentOrders.length > 0 ? (
                            recentOrders.map((order) => (
                              <tr key={order.id}>
                                <td><span className="fw-bold">#{order.id.substring(0, 8)}</span></td>
                                <td>{order.fullName}</td>
                                <td>
                                  {order.createdAt ? (() => {
                                    const d = new Date(order.createdAt.seconds ? order.createdAt.seconds * 1000 : order.createdAt);
                                    const day = String(d.getDate()).padStart(2, '0');
                                    const month = String(d.getMonth() + 1).padStart(2, '0');
                                    const year = d.getFullYear();
                                    return `${day}/${month}/${year}`;
                                  })() : 'N/A'}
                                </td>
                                <td>₹{order.totalPrice}</td>
                                <td>
                                  <span className={`badge rounded-pill p-2 ${
                                    order.status === 'Delivered' ? 'bg-soft-success text-success' : 
                                    order.status === 'Pending' ? 'bg-soft-warning text-warning' : 
                                    'bg-soft-info text-info'
                                  }`} style={{ fontSize: '11px' }}>
                                    {order.status || 'Pending'}
                                  </span>
                                </td>
                                <td>{order.paymentMethod}</td>
                                <td>
                                  <Link to="/vieworders" className="btn btn-primary btn-sm rounded-pill px-3">
                                    View
                                  </Link>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="7" className="text-center p-5">
                                <div style={{ opacity: 0.5 }}>
                                  <i className="fa-solid fa-folder-open mb-3" style={{ fontSize: "40px" }}></i>
                                  <p className="mb-0">No recent transactions found</p>
                                </div>
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


    </>
  );
}
export default Dashborad;
