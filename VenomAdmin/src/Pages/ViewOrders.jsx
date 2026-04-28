import { useEffect, useState } from "react";
import { collection, deleteDoc, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebaseconfig";
import Footer from "../component/footer";
import React from "react";
import Header from "../component/Header";
import Sidebare from "../component/Sidebare";

function ViewOrders() {
  let [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(function () {
    getOrders();
  }, []);

  async function getOrders() {
    let ColRef = collection(db, "orders");
    onSnapshot(ColRef, function (Snapshot) {
      let result = [];
      Snapshot.docs.forEach(function (doc) {
        result.push({ ...doc.data(), id: doc.id });
      });
      // Sort by newest first
      result.sort((a, b) => b.createdAt?.toMillis() - a.createdAt?.toMillis());
      setOrders(result);
    });
  }

  async function updateStatus(id, newStatus) {
    try {
      const orderRef = doc(db, "orders", id);
      await updateDoc(orderRef, {
        status: newStatus
      });
      if(window.Swal) {
        Swal.fire({
          title: "Order Status Updated",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error updating order:", error);
    }
  }

  async function del(id) {
    if(window.confirm("Are you sure you want to delete this order?")) {
      await deleteDoc(doc(db, "orders", id));
      if(window.Swal) {
        Swal.fire({
          title: "Delete order",
          icon: "success",
        });
      }
    }
  }

  return (
    <>
      <div id="layout-wrapper">
        <Header />
        <Sidebare />

        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-flex align-items-center justify-content-between">
                    <h4 className="mb-0">Customer Orders</h4>
                    <div className="badge bg-primary p-2 px-3 rounded-pill" style={{ fontSize: '0.9rem' }}>
                      Total Orders: {orders.length}
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary Cards */}
              <div className="row mb-4">
                <div className="col-md-3">
                  <div className="card shadow-sm border-0" style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%)", borderLeft: "5px solid #3b82f6" }}>
                    <div className="card-body p-3 text-center">
                      <p className="text-muted fw-bold mb-1" style={{ fontSize: "11px", textTransform: "uppercase" }}>Total Orders</p>
                      <h4 className="mb-0" style={{ fontWeight: "700", color: "#3b82f6" }}>{orders.length}</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card shadow-sm border-0" style={{ background: "linear-gradient(135deg, #fffbeb 0%, #ffffff 100%)", borderLeft: "5px solid #f59e0b" }}>
                    <div className="card-body p-3 text-center">
                      <p className="text-muted fw-bold mb-1" style={{ fontSize: "11px", textTransform: "uppercase" }}>Pending</p>
                      <h4 className="mb-0" style={{ fontWeight: "700", color: "#f59e0b" }}>{orders.filter(o => o.status === 'Pending').length}</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card shadow-sm border-0" style={{ background: "linear-gradient(135deg, #f5f3ff 0%, #ffffff 100%)", borderLeft: "5px solid #8b5cf6" }}>
                    <div className="card-body p-3 text-center">
                      <p className="text-muted fw-bold mb-1" style={{ fontSize: "11px", textTransform: "uppercase" }}>Processing</p>
                      <h4 className="mb-0" style={{ fontWeight: "700", color: "#8b5cf6" }}>{orders.filter(o => o.status === 'Processing').length}</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card shadow-sm border-0" style={{ background: "linear-gradient(135deg, #e6fffa 0%, #ffffff 100%)", borderLeft: "5px solid #22c55e" }}>
                    <div className="card-body p-3 text-center">
                      <p className="text-muted fw-bold mb-1" style={{ fontSize: "11px", textTransform: "uppercase" }}>Delivered</p>
                      <h4 className="mb-0" style={{ fontWeight: "700", color: "#22c55e" }}>{orders.filter(o => o.status === 'Delivered').length}</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      {orders.length === 0 ? (
                        <p className="text-center p-4">No orders found.</p>
                      ) : (
                        <div className="table-responsive">
                          <table className="table table-centered align-middle table-nowrap mb-0">
                            <thead className="table-light">
                              <tr>
                                <th>Order ID</th>
                                <th>Billing Name</th>
                                <th>Date</th>
                                <th>Total</th>
                                <th>Order Status</th>
                                <th>Payment Method</th>
                                <th>View Details</th>
                              </tr>
                            </thead>
                            <tbody>
                              {orders.map((order) => (
                                <tr key={order.id}>
                                  <td>
                                    <strong>#{order.id.substring(0, 8)}</strong>
                                  </td>
                                  <td>{order.fullName || "N/A"}</td>
                                  <td>
                                    {order.createdAt ? new Date(order.createdAt.toMillis()).toLocaleDateString() : 'N/A'}
                                  </td>
                                  <td>₹{order.totalPrice}</td>
                                  <td>
                                    <select 
                                      className={`form-select form-select-sm ${order.status === 'Delivered' ? 'text-success border-success' : 'text-warning border-warning'}`}
                                      value={order.status || 'Pending'}
                                      onChange={(e) => updateStatus(order.id, e.target.value)}
                                      disabled={order.status === 'Delivered'}
                                      style={{ width: '130px', fontWeight: 'bold' }}
                                    >
                                      <option value="Pending">Pending</option>
                                      <option value="Processing">Processing</option>
                                      <option value="Shipped">Shipped</option>
                                      <option value="Delivered">Delivered</option>
                                      <option value="Cancelled">Cancelled</option>
                                    </select>
                                  </td>
                                  <td>
                                    <span className="badge bg-soft-info text-info p-2" style={{ fontSize: '0.85rem' }}>{order.paymentMethod || 'Unknown'}</span>
                                  </td>
                                  <td>
                                    <button
                                      onClick={() => setSelectedOrder(order)}
                                      className="btn btn-primary btn-sm me-2 rounded-pill px-3 shadow-sm"
                                    >
                                      View Details
                                    </button>
                                    <button
                                      onClick={() => del(order.id)}
                                      className="btn btn-soft-danger btn-sm rounded-pill px-3 shadow-sm"
                                    >
                                      <i className="fa-solid fa-trash"></i>
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>

      {/* View Details Modal */}
      {selectedOrder && (
        <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050, position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'auto' }}>
          <div className="modal-dialog modal-lg mt-5 mb-5">
            <div className="modal-content shadow-lg border-0">
              <div className="modal-header bg-light">
                <h5 className="modal-title text-dark">
                  <i className="fa-solid fa-file-invoice me-2 text-primary"></i>
                  Order Details - #{selectedOrder.id.substring(0, 8)}
                </h5>
                <button type="button" className="btn-close" onClick={() => setSelectedOrder(null)}></button>
              </div>
              <div className="modal-body p-4">
                <div className="row mb-4">
                  <div className="col-sm-6">
                    <div className="card shadow-sm border-light h-100">
                      <div className="card-body">
                        <h6 className="mb-3 text-primary border-bottom pb-2">Customer Details:</h6>
                        <div className="mb-1"><strong>Name:</strong> {selectedOrder.fullName || "N/A"}</div>
                        <div className="mb-1"><strong>Email:</strong> {selectedOrder.email || "N/A"}</div>
                        <div><strong>Phone:</strong> {selectedOrder.phone || "N/A"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-3 mt-sm-0">
                    <div className="card shadow-sm border-light h-100">
                      <div className="card-body">
                        <h6 className="mb-3 text-primary border-bottom pb-2">Shipping Info:</h6>
                        <div className="mb-1"><strong>Address:</strong> {selectedOrder.address || "N/A"}</div>
                        <div className="mb-1"><strong>Area:</strong> {selectedOrder.area || "N/A"}</div>
                        <div><strong>City:</strong> {selectedOrder.city || "N/A"}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <h6 className="mb-3 text-primary border-bottom pb-2">Purchased Items:</h6>
                <div className="table-responsive-sm">
                  <table className="table table-striped table-hover align-middle">
                    <thead className="table-light">
                      <tr>
                        <th className="text-center">#</th>
                        <th>Item</th>
                        <th className="text-end">Unit Cost</th>
                        <th className="text-center">Qty</th>
                        <th className="text-end">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedOrder.items && selectedOrder.items.map((item, idx) => (
                        <tr key={idx}>
                          <td className="text-center">{idx + 1}</td>
                          <td>
                            <div className="d-flex align-items-center">
                              {item.image && (
                                <img src={item.image} alt={item.name} style={{ width: '45px', height: '45px', objectFit: 'cover', borderRadius: '6px', marginRight: '12px' }} className="shadow-sm" />
                              )}
                              <span className="fw-medium">{item.name}</span>
                            </div>
                          </td>
                          <td className="text-end text-muted">₹{item.price}</td>
                          <td className="text-center fw-bold">{item.quantity}</td>
                          <td className="text-end text-success fw-bold">₹{item.price * item.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="modal-footer bg-light">
                <button type="button" className="btn btn-secondary px-4 shadow-sm" onClick={() => setSelectedOrder(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ViewOrders;
