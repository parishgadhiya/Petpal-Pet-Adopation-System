import React, { useState, useEffect } from "react";
import { db, auth } from "../Firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import { 
  collection, 
  query, 
  where, 
  onSnapshot, 
  orderBy, 
  doc, 
  updateDoc, 
  deleteDoc,
  writeBatch,
  getDocs
} from "firebase/firestore";
import Header from "../component/Header";
import Sidebare from "../component/Sidebare";
import Footer from "../component/footer";

const formatRelativeTime = (timestamp) => {
  if (!timestamp) return "";
  const now = new Date();
  let date;
  if (timestamp.toDate) {
    date = timestamp.toDate();
  } else if (timestamp.seconds) {
    date = new Date(timestamp.seconds * 1000);
  } else {
    date = new Date(timestamp);
  }
  
  const diffInSeconds = Math.floor((now - date) / 1000);
  if (diffInSeconds < 60) return "just now";
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  return `${Math.floor(diffInSeconds / 86400)} days ago`;
};

function ViewNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe = () => {};

    const setupListener = (user) => {
      // Admin listens for all order type notifications
      const q = query(
        collection(db, "notifications"),
        where("userId", "==", "admin"), // Based on Checkout.jsx logic found earlier
        orderBy("createdAt", "desc")
      );

      unsubscribe = onSnapshot(q, (snapshot) => {
        const fetchedNotifications = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setNotifications(fetchedNotifications);
        setLoading(false);
      }, (error) => {
        console.error("Error fetching notifications:", error);
        // Fallback for missing index
        const fallbackQ = query(collection(db, "notifications"), where("userId", "==", "admin"));
        onSnapshot(fallbackQ, (fallbackSnapshot) => {
          const fetched = fallbackSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          fetched.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
          setNotifications(fetched);
          setLoading(false);
        });
      });
    };

    const authUnsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      setupListener(user);
    });

    return () => {
      authUnsubscribe();
      unsubscribe();
    };
  }, []);

  const markAsRead = async (id) => {
    try {
      await updateDoc(doc(db, "notifications", id), { isRead: true });
    } catch (error) {
      console.error("Error marking as read:", error);
    }
  };

  const markAllAsRead = async () => {
    try {
      setLoading(true);
      const q = query(
        collection(db, "notifications"),
        where("userId", "==", "admin"),
        where("isRead", "==", false)
      );
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        setLoading(false);
        return;
      }

      const batch = writeBatch(db);
      querySnapshot.docs.forEach((doc) => {
        batch.update(doc.ref, { isRead: true });
      });
      
      await batch.commit();
      setLoading(false);
    } catch (error) {
      console.error("Error marking all as read:", error);
      alert("Permission denied. You might need to be logged in to Firebase.");
      setLoading(false);
    }
  };

  const clearAll = async () => {
    if (window.confirm("Are you sure you want to delete all notifications?")) {
      try {
        setLoading(true);
        const q = query(collection(db, "notifications"), where("userId", "==", "admin"));
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
          setLoading(false);
          return;
        }

        const batch = writeBatch(db);
        querySnapshot.docs.forEach((doc) => {
          batch.delete(doc.ref);
        });
        
        await batch.commit();
        setLoading(false);
      } catch (error) {
        console.error("Error clearing notifications:", error);
        alert("Permission denied. Failed to clear notifications.");
        setLoading(false);
      }
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case 'order': return 'fa-cart-shopping';
      case 'request': return 'fa-paw';
      default: return 'fa-bell';
    }
  };

  const getColor = (type) => {
    switch (type) {
      case 'order': return 'primary';
      case 'request': return 'success';
      default: return 'info';
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
                  <h4 className="mb-0 fw-bold">All Notifications</h4>
                  <div className="page-title-right d-flex gap-2">
                    <button className="btn btn-soft-primary btn-sm rounded-pill px-3" onClick={markAllAsRead} disabled={notifications.filter(n => !n.isRead).length === 0}>
                      <i className="fa-solid fa-check-double me-1"></i> Mark All as Read
                    </button>
                    <button className="btn btn-soft-danger btn-sm rounded-pill px-3" onClick={clearAll} disabled={notifications.length === 0}>
                      <i className="fa-solid fa-trash-can me-1"></i> Clear All
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
                  <div className="card-body p-0">
                    {loading ? (
                      <div className="text-center p-5">
                        <div className="spinner-border text-primary" role="status"></div>
                        <p className="mt-3 text-muted">Loading notifications...</p>
                      </div>
                    ) : notifications.length === 0 ? (
                      <div className="text-center p-5 bg-light">
                        <i className="fa-regular fa-bell-slash text-muted mb-3" style={{ fontSize: "60px", opacity: 0.3 }}></i>
                        <h5 className="text-muted">No notifications found</h5>
                        <p className="text-muted small">Systems are quiet. Check back later!</p>
                      </div>
                    ) : (
                      <div className="list-group list-group-flush">
                        {notifications.map((n) => (
                          <div 
                            key={n.id} 
                            className={`list-group-item list-group-item-action p-4 border-0 mb-1 transition-all ${!n.isRead ? 'bg-soft-primary' : ''}`}
                            onClick={() => !n.isRead && markAsRead(n.id)}
                            style={{ cursor: n.isRead ? "default" : "pointer" }}
                          >
                            <div className="d-flex align-items-start">
                              <div className={`flex-shrink-0 avatar-md bg-soft-${getColor(n.type)} text-${getColor(n.type)} rounded-circle d-flex align-items-center justify-content-center me-4 shadow-sm`} style={{ width: "48px", height: "48px" }}>
                                <i className={`fa-solid ${getIcon(n.type)} font-size-20`}></i>
                              </div>
                              <div className="flex-grow-1">
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                  <span className={`badge bg-soft-${getColor(n.type)} text-${getColor(n.type)} text-uppercase font-size-10 px-2`}>
                                    {n.type}
                                  </span>
                                  <small className="text-muted">
                                    <i className="fa-regular fa-calendar-alt me-1"></i>
                                    {formatRelativeTime(n.createdAt)}
                                  </small>
                                </div>
                                <h6 className={`mb-1 mt-2 ${!n.isRead ? 'fw-bold' : 'fw-normal'}`} style={{ fontSize: "15px", lineHeight: "1.5" }}>
                                  {n.message}
                                </h6>
                              </div>
                            </div>
                          </div>
                        ))}
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
  );
}

export default ViewNotifications;
