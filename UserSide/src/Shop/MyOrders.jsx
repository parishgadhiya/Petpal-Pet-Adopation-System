import React, { useEffect, useState } from "react";
import Nav from "../components/navbar";
import Footer from "../components/footer";
import { db, auth } from "../firebaseconfig";
import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedBillOrder, setSelectedBillOrder] = useState(null);

  const fetchOrders = async (currentUser) => {
    if (!currentUser) return;

    try {
      const q = query(
        collection(db, "orders"),
        where("userId", "==", currentUser.uid)
      );
      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Sort by newest first based on createdAt
      data.sort((a, b) => b.createdAt?.toMillis() - a.createdAt?.toMillis());
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const cancelOrder = async (orderId) => {
    if (window.confirm("Are you sure you want to cancel this order?")) {
      try {
        const orderRef = doc(db, "orders", orderId);
        await updateDoc(orderRef, {
          status: "Cancelled",
        });
        
        setOrders(orders.map(order => 
          order.id === orderId ? { ...order, status: "Cancelled" } : order
        ));
      } catch (error) {
        console.error("Error cancelling order:", error);
      }
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchOrders(currentUser);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Nav />

      <div className="container mt-5 mb-5" style={{ minHeight: "60vh" }}>
        <h2 className="mb-4">My Orders</h2>

        {loading ? (
          <p>Loading your orders...</p>
        ) : !user ? (
          <div className="text-center mt-5">
            <h4>Please log in to view your orders</h4>
            <Link to="/login" className="btn mt-3">
              Go to Login
            </Link>
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center mt-5">
            <h4>You haven't placed any orders yet.</h4>
            <Link to="/Ourshop" className="btn mt-3">
              Start Shopping
            </Link>
          </div>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="border p-4 mb-4 shadow-sm rounded">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0 text-primary">Order Total: ₹{order.totalPrice}</h5>
                <span className={`badge ${order.status === 'Pending' ? 'bg-warning text-dark' : 'bg-success'}`}>
                  {order.status}
                </span>
              </div>
              
              <div className="mb-3 text-muted small">
                <p className="mb-1"><strong>Name:</strong> {order.fullName || "N/A"}</p>
                <p className="mb-1"><strong>Email:</strong> {order.email || "N/A"}</p>
                <p className="mb-1"><strong>Phone:</strong> {order.phone || "N/A"}</p>
                <p className="mb-1"><strong>Area/House:</strong> {order.area || "N/A"}</p>
                <p className="mb-1"><strong>Shipping Address:</strong> {order.address || "N/A"}</p>
                <p className="mb-1"><strong>City:</strong> {order.city || "N/A"}</p>
                <p className="mb-1"><strong>Payment Method:</strong> {order.paymentMethod || "N/A"}</p>
                {order.createdAt && (
                  <p className="mb-0 mt-2"><strong>Date:</strong> {new Date(order.createdAt.toMillis()).toLocaleString()}</p>
                )}
              </div>

              <h6 className="mt-4 mb-3 border-bottom pb-2">Items in this order:</h6>
              <div className="row">
                {order.items &&
                  order.items.map((item, index) => (
                    <div key={index} className="col-md-6 col-lg-4 mb-3">
                      <div className="d-flex align-items-center border p-2 rounded bg-light">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: "60px",
                            height: "60px",
                            objectFit: "cover",
                            borderRadius: "5px",
                            marginRight: "15px",
                          }}
                        />
                        <div>
                          <h6 className="mb-1" style={{ fontSize: "14px" }}>
                            {item.name}
                          </h6>
                          <p className="mb-0 text-muted" style={{ fontSize: "13px" }}>
                            ₹{item.price} x {item.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="text-end mt-3 border-top pt-3">
                {order.status === "Delivered" && (
                  <button 
                    onClick={() => setSelectedBillOrder(order)} 
                    className="btn btn-info btn-sm text-white me-2"
                  >
                    View Bill
                  </button>
                )}
                {order.status === "Pending" && (
                  <button 
                    onClick={() => cancelOrder(order.id)} 
                    className="btn btn-danger btn-sm"
                  >
                    Cancel Order
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {selectedBillOrder && (
        <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050, position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'auto' }}>
          <style>
            {`
              @media print {
                body * {
                  visibility: hidden;
                }
                #bill-content, #bill-content * {
                  visibility: visible;
                }
                #bill-content {
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 100%;
                }
                .modal-footer, .btn-close {
                  display: none !important;
                }
              }
            `}
          </style>
          <div className="modal-dialog modal-lg mt-5 mb-5">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Order Invoice</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedBillOrder(null)}></button>
              </div>
              <div className="modal-body p-4" id="bill-content">
                <div className="text-center mb-4">
                  <h2 className="mb-0">PetPal</h2>
                  <p className="text-muted">Invoice / Bill of Supply</p>
                </div>
                
                <div className="row mb-4">
                  <div className="col-sm-6">
                    <h6 className="mb-3">To:</h6>
                    <div><strong>{selectedBillOrder.fullName || "Customer"}</strong></div>
                    <div>{selectedBillOrder.address || "N/A"}</div>
                    <div>{selectedBillOrder.area || "N/A"}</div>
                    <div>{selectedBillOrder.city || "N/A"}</div>
                    <div>Email: {selectedBillOrder.email || "N/A"}</div>
                    <div>Phone: {selectedBillOrder.phone || "N/A"}</div>
                  </div>
                  <div className="col-sm-6 text-sm-end">
                    <h6 className="mb-3">Details:</h6>
                    <div><strong>Order ID:</strong> {selectedBillOrder.id}</div>
                    {selectedBillOrder.createdAt && (
                      <div><strong>Date:</strong> {new Date(selectedBillOrder.createdAt.toMillis()).toLocaleString()}</div>
                    )}
                    <div><strong>Payment Method:</strong> {selectedBillOrder.paymentMethod || "N/A"}</div>
                    <div><strong>Status:</strong> {selectedBillOrder.status}</div>
                  </div>
                </div>

                <div className="table-responsive-sm">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th className="text-center">#</th>
                        <th>Item</th>
                        <th className="text-end">Unit Cost</th>
                        <th className="text-center">Qty</th>
                        <th className="text-end">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedBillOrder.items && selectedBillOrder.items.map((item, idx) => (
                        <tr key={idx}>
                          <td className="text-center">{idx + 1}</td>
                          <td>{item.name}</td>
                          <td className="text-end">₹{item.price}</td>
                          <td className="text-center">{item.quantity}</td>
                          <td className="text-end">₹{item.price * item.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-sm-5 ms-auto">
                    <table className="table table-clear">
                      <tbody>
                        <tr>
                          <td className="text-start"><strong>Subtotal</strong></td>
                          <td className="text-end">₹{selectedBillOrder.totalPrice}</td>
                        </tr>
                        <tr>
                          <td className="text-start"><strong>Total</strong></td>
                          <td className="text-end">
                            <strong>₹{selectedBillOrder.totalPrice}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setSelectedBillOrder(null)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={() => window.print()}>Print Bill</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default MyOrders;