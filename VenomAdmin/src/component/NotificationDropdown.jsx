import React, { useState, useEffect } from "react";
import { db, auth } from "../Firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import { 
  collection, 
  query, 
  where, 
  onSnapshot, 
  orderBy, 
  limit, 
  doc, 
  updateDoc,
  writeBatch,
  getDocs
} from "firebase/firestore";

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
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  return `${Math.floor(diffInSeconds / 86400)}d ago`;
};

const NotificationDropdown = ({ isAdmin = false }) => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    let unsubscribe = () => {};

    const setupListener = (user) => {
      let q, countQ;
      if (isAdmin) {
        // Admin listens for all notifications for 'admin'
        q = query(
          collection(db, "notifications"),
          where("userId", "==", "admin"),
          limit(20)
        );
        countQ = query(
          collection(db, "notifications"),
          where("userId", "==", "admin"),
          where("isRead", "==", false)
        );
      } else {
        if (!user) return;
        q = query(
          collection(db, "notifications"),
          where("userId", "==", user.uid),
          orderBy("createdAt", "desc"),
          limit(10)
        );
        countQ = query(
          collection(db, "notifications"),
          where("userId", "==", user.uid),
          where("isRead", "==", false)
        );
      }

      // Listener for notifications list
      unsubscribe = onSnapshot(q, (snapshot) => {
        const fetchedNotifications = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        // Sort in memory to avoid index requirement
        fetchedNotifications.sort((a, b) => {
          const timeA = a.createdAt?.seconds ? a.createdAt.seconds : new Date(a.createdAt).getTime();
          const timeB = b.createdAt?.seconds ? b.createdAt.seconds : new Date(b.createdAt).getTime();
          return timeB - timeA;
        });

        setNotifications(fetchedNotifications.slice(0, 10));
      }, (error) => {
        console.error("Firestore Notification List Error:", error);
      });

      // Dedicated listener for total unread count
      const unsubscribeCount = onSnapshot(countQ, (snapshot) => {
        setUnreadCount(snapshot.size);
      }, (error) => {
        console.error("Firestore Notification Count Error:", error);
      });

      // Combine unsubscribes
      const originalUnsubscribe = unsubscribe;
      unsubscribe = () => {
        originalUnsubscribe();
        unsubscribeCount();
      };
    };

    const authUnsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe(); // Cleanup previous listener
      setupListener(user);
    });

    return () => {
      authUnsubscribe();
      unsubscribe();
    };
  }, [isAdmin]);

  const markAsRead = async (notificationId) => {
    try {
      const docRef = doc(db, "notifications", notificationId);
      await updateDoc(docRef, { isRead: true });
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  const markAllAsRead = async () => {
    try {
      console.log("Attempting to mark all as read...", { isAdmin });
      const q = query(
        collection(db, "notifications"),
        where("userId", "==", isAdmin ? "admin" : auth.currentUser?.uid),
        where("isRead", "==", false)
      );
      const querySnapshot = await getDocs(q);
      console.log(`Found ${querySnapshot.size} unread notifications`);
      
      if (querySnapshot.empty) return;

      const batch = writeBatch(db);
      querySnapshot.docs.forEach((doc) => {
        batch.update(doc.ref, { isRead: true });
      });
      
      await batch.commit();
      console.log("Successfully marked all as read");
    } catch (error) {
      console.error("Error marking all as read:", error);
      alert("Failed to mark all as read. You might not have permission.");
    }
  };

  return (
    <div className="dropdown d-inline-block">
      <button
        type="button"
        className="btn header-item noti-icon waves-effect"
        id="page-header-notifications-dropdown"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        style={{ border: "none", background: "transparent", position: "relative" }}
      >
        <i className="fa-regular fa-bell" style={{ fontSize: "20px", color: "#555" }}></i>
        {unreadCount > 0 && (
          <span className="badge bg-danger rounded-pill" style={{
            position: "absolute",
            top: "15px",
            right: "5px",
            fontSize: "10px",
            padding: "3px 6px"
          }}>
            {unreadCount}
          </span>
        )}
      </button>

      <div
        className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 shadow-lg"
        aria-labelledby="page-header-notifications-dropdown"
        style={{ width: "320px", borderRadius: "12px" }}
      >
        <div className="p-3 border-bottom">
          <div className="row align-items-center">
            <div className="col">
              <h6 className="m-0 font-size-16 fw-bold text-dark"> Notifications </h6>
            </div>
            <div className="col-auto">
              <button 
                className="btn btn-link btn-sm p-0 text-decoration-none font-size-12" 
                onClick={markAllAsRead}
                disabled={unreadCount === 0}
              >
                Clear All
              </button>
            </div>
          </div>
        </div>

        <div style={{ maxHeight: "300px", overflowY: "auto" }}>
          {notifications.length === 0 ? (
            <div className="text-center p-4">
              <i className="fa-regular fa-bell-slash text-muted mb-2 d-block" style={{ fontSize: "24px" }}></i>
              <p className="text-muted mb-0 small">No notifications yet</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`text-reset notification-item d-block p-3 ${!notification.isRead ? 'bg-light' : ''}`}
                style={{ cursor: "pointer", borderBottom: "1px solid #f8f9fa" }}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="d-flex align-items-start">
                  <div className="flex-shrink-0 me-3">
                    <div className={`avatar-xs rounded-circle bg-${notification.type === 'order' ? 'primary' : notification.type === 'request' ? 'success' : 'info'} text-white d-flex align-items-center justify-content-center shadow-sm`} style={{ width: "32px", height: "32px" }}>
                      <i className={`fa-solid ${notification.type === 'order' ? 'fa-cart-shopping' : notification.type === 'request' ? 'fa-paw' : 'fa-truck-pickup'} font-size-12`}></i>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-1 text-dark" style={{ 
                      fontWeight: !notification.isRead ? "600" : "400", 
                      fontSize: "13.5px",
                      lineHeight: "1.4"
                    }}>
                      {notification.message}
                    </p>
                    <p className="mb-0 font-size-11 text-muted">
                      <i className="fa-regular fa-clock me-1"></i> {formatRelativeTime(notification.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="p-2 border-top d-grid">
          <Link 
            to="/viewnotifications" 
            className="btn btn-sm btn-link font-size-14 text-center text-primary" 
            style={{ textDecoration: "none", fontWeight: "600" }}
          >
            View All Notifications
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotificationDropdown;
