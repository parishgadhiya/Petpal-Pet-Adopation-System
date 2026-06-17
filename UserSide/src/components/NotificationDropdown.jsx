import React, { useState, useEffect } from "react";
import { db, auth } from "../firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import { 
  collection, 
  query, 
  where, 
  onSnapshot, 
  orderBy, 
  limit, 
  doc, 
  updateDoc,
  writeBatch
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
      let q;
      if (isAdmin) {
        q = query(
          collection(db, "notifications"),
          where("type", "==", "order"),
          limit(20)
        );
      } else {
        if (!user) return;
        q = query(
          collection(db, "notifications"),
          where("userId", "==", user.uid),
          limit(20)
        );
      }

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

        const top10 = fetchedNotifications.slice(0, 10);
        setNotifications(top10);
        setUnreadCount(top10.filter(n => !n.isRead).length);
      }, (error) => {
        console.error("Firestore Notification Error:", error);
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
      const batch = writeBatch(db);
      notifications.forEach(n => {
        if (!n.isRead) {
          const docRef = doc(db, "notifications", n.id);
          batch.update(docRef, { isRead: true });
        }
      });
      await batch.commit();
    } catch (error) {
      console.error("Error marking all as read:", error);
    }
  };

  return (
    <>
      <a
        href="#"
        className="dropdown-toggle-no-caret"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ 
          position: "relative", 
          display: "inline-block", // Back to inline-block as per theme CSS line 1791
          color: "inherit", 
          textDecoration: "none"
        }}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          .dropdown-toggle-no-caret::after {
            display: none !important;
          }
        `}} />
        <i className="fa-regular fa-bell" style={{ fontSize: "22px" }} />
        {unreadCount > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "10px", transform: "translate(20%, -20%)" }}>
            {unreadCount}
          </span>
        )}
      </a>

      <div
        className="dropdown-menu dropdown-menu-end p-0 shadow-lg"
        style={{ width: "320px", marginTop: "15px", border: "1px solid #eee", borderRadius: "12px", zIndex: 9999 }}
      >
        <div className="p-3 border-bottom bg-white rounded-top">
          <div className="row align-items-center">
            <div className="col">
              <h6 className="m-0 font-size-16 fw-bold text-dark"> Notifications </h6>
            </div>
            <div className="col-auto">
              <button 
                className="btn btn-link btn-sm p-0 text-decoration-none font-size-12" 
                style={{ color: "#8e5494" }}
                onClick={markAllAsRead}
                disabled={unreadCount === 0}
              >
                Clear All
              </button>
            </div>
          </div>
        </div>

        <div style={{ maxHeight: "300px", overflowY: "auto", background: "#fff" }}>
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
                    <div className={`avatar-xs rounded-circle bg-${notification.type === 'order' ? 'primary' : notification.type === 'request' ? 'success' : 'info'} text-white d-flex align-items-center justify-content-center shadow-sm`} style={{ width: "32px", height: "32px", borderRadius: "50%" }}>
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
        
        <div className="p-2 border-top d-grid bg-white rounded-bottom">
          <button className="btn btn-sm btn-link font-size-14 text-center" style={{ textDecoration: "none", color: "#8e5494" }}>
             View All
          </button>
        </div>
      </div>
    </>
  );
};

export default NotificationDropdown;
