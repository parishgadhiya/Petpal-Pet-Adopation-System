import React, { useEffect, useState } from "react";
import Nav from "../components/navbar";
import Footer from "../components/footer";
import { db, auth } from "../firebaseconfig";
import { Link } from "react-router-dom";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function Cart() {
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    const user = auth.currentUser;
    if (!user) return;

    const q = query(
      collection(db, "cart"),
      where("userId", "==", user.uid)
    );

    const snapshot = await getDocs(q);

    const cartItems = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setCart(cartItems);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const increaseQty = async (id, quantity) => {
    await updateDoc(doc(db, "cart", id), {
      quantity: quantity + 1,
    });
    fetchCart();
  };

  const decreaseQty = async (id, quantity) => {
    if (quantity <= 1) return;

    await updateDoc(doc(db, "cart", id), {
      quantity: quantity - 1,
    });
    fetchCart();
  };

  const removeItem = async (id) => {
    await deleteDoc(doc(db, "cart", id));
    fetchCart();
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Nav />
      <div className="container mt-5 mb-5">
        <h2 className="mb-4">🛒 My Cart</h2>

        {cart.length === 0 ? (
          <h4>Your cart is empty</h4>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="d-flex align-items-center justify-content-between border p-3 mb-3"
              >
                <div className="d-flex align-items-center gap-3">
                  <img src={item.image} alt={item.name} width="80" />
                  <div>
                    <h5>{item.name}</h5>
                    <p>Price: ₹{item.price}</p>
                  </div>
                </div>

                <div>
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => decreaseQty(item.id, item.quantity)}
                  >
                    -
                  </button>

                  <span className="mx-3">{item.quantity}</span>

                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => increaseQty(item.id, item.quantity)}
                  >
                    +
                  </button>
                </div>

                <div>
                  <h6>Subtotal: ₹{item.price * item.quantity}</h6>
                </div>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="text-end mt-4">
              <h3>Total: ₹{totalPrice}</h3>
            </div>

            <div className="text-end mt-3">
  <Link to="/checkout" className="btn btn-success">
    Proceed To Checkout
  </Link>
</div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;