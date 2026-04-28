import React, { useEffect, useState } from "react";
import Nav from "../components/navbar";
import Footer from "../components/footer";
import { db, auth } from "../firebaseconfig";
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  const fetchWishlist = async () => {
    const user = auth.currentUser;
    if (!user) return;

    const q = query(
      collection(db, "wishlist"),
      where("userId", "==", user.uid)
    );

    const snapshot = await getDocs(q);

    const wishlistItems = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setWishlist(wishlistItems);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        if (window.Swal) {
          window.Swal.fire({
            title: "Access Denied",
            text: "Please login to access your wishlist!",
            icon: "warning",
            confirmButtonColor: "#f39c12",
          }).then(() => {
            window.location.href = "/login";
          });
        } else {
          alert("Please login to access wishlist!");
          window.location.href = "/login";
        }
      } else {
        fetchWishlist();
      }
    });

    return () => unsubscribe();
  }, []);

  const removeItem = async (id) => {
    await deleteDoc(doc(db, "wishlist", id));
    fetchWishlist();
  };

  return (
    <>
      <Nav />

      <div className="container mt-5 mb-5">
        <h2 className="mb-4">❤️ My Wishlist</h2>

        {wishlist.length === 0 ? (
          <h4>Your wishlist is empty</h4>
        ) : (
          <>
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="d-flex align-items-center justify-content-between border p-3 mb-3"
              >
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    width="80"
                  />
                  <div>
                    <h5>{item.name}</h5>
                    <p>₹{item.price}</p>
                  </div>
                </div>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Wishlist;