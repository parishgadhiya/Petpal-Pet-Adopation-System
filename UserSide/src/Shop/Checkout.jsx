import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import Nav from "../components/navbar";
import Footer from "../components/footer";
import { db, auth } from "../firebaseconfig";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

function Checkout() {
  const [cart, setCart] = useState([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Razorpay");

  const fetchCart = async (currentUser) => {
    if (!currentUser) return;

    const q = query(collection(db, "cart"), where("userId", "==", currentUser.uid));
    const snapshot = await getDocs(q);

    const items = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setCart(items);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchCart(user);
        // Optionally pre-fill from auth profile
        if (user.displayName) setFullName(user.displayName);
        if (user.email) setEmail(user.email);
      }
    });
    return () => unsubscribe();
  }, []);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleRazorpay = async () => {
    if (!fullName || !email || !phone || !city || !area || !address) {
      alert("Please fill in all the details. Every field is required.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_SVKouR0V5F9Ndz",
      amount: totalPrice * 100,
      currency: "INR",
      name: "PetPal",
      description: "Order Payment",
      handler: function (response) {
        placeOrder(response.razorpay_payment_id);
      },
      prefill: {
        name: fullName,
        email: email,
        contact: phone,
      },
      theme: {
        color: "#8e5494",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const placeOrder = async (razorpayPaymentId = null) => {
    const user = auth.currentUser;
    if (!user) {
      alert("Please login to place an order.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (!fullName || !email || !phone || !city || !area || !address) {
      alert("Please fill in all the details. Every field is required.");
      return;
    }

    try {
      await addDoc(collection(db, "orders"), {
        userId: user.uid,
        items: cart,
        totalPrice: totalPrice,
        fullName: fullName,
        email: email,
        phone: phone,
        address: address,
        area: area,
        city: city,
        paymentMethod: paymentMethod,
        paymentId: razorpayPaymentId || "Manual/UPI",
        status: "Pending",
        createdAt: new Date(),
      });

      // Create notification for admin
      await addDoc(collection(db, "notifications"), {
        userId: "admin", // Admin notification
        message: `New order placed by ${fullName} for ₹${totalPrice}.`,
        type: "order",
        referenceId: totalPrice,
        isRead: false,
        createdAt: serverTimestamp()
      });

      for (let item of cart) {
        await deleteDoc(doc(db, "cart", item.id));
      }

      alert("Order Placed Successfully!");
      setCart([]);
      
      // Optionally reset form
      setFullName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setArea("");
      setCity("");
    } catch (error) {
      console.error("Error placing order: ", error);
      alert("An error occurred while placing your order. Please try again.");
    }
  };

  return (
    <>
      <Nav />

      <div className="container mt-5 mb-5" style={{ maxWidth: "1000px" }}>
        <h2 className="mb-4" style={{ color: "#001d3d", fontWeight: "800" }}>Checkout</h2>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Contact Number</label>
            <input
              type="text"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label>Area / House / Apartment Address</label>
          <input
            type="text"
            className="form-control"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Shipping Address</label>
          <textarea
            className="form-control"
            rows="3"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="fw-bold mb-2">Payment Method</label>
          <select
            className="form-control mb-3"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="Razorpay">Razorpay (Cards, UPI, Netbanking)</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
          </select>

          {/* DYNAMIC PAYMENT DETAILS */}
          <div className="p-3 border rounded bg-light">
            {paymentMethod === "Razorpay" && (
              <div className="text-center py-3">
                <div className="mb-3">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" 
                    alt="Razorpay" 
                    style={{ height: "30px" }} 
                  />
                </div>
                <p className="text-muted mb-0">
                  Safe and secure payments via Razorpay. Supports Credit/Debit Cards, Netbanking, and Wallets.
                </p>
              </div>
            )}

            {paymentMethod === "Cash on Delivery" && (
              <p className="text-muted mb-0 text-center py-2">
                You will pay exactly ₹{totalPrice} in cash upon delivery of your items.
              </p>
            )}


          </div>
        </div>

        <h4 className="mt-4" style={{ color: "#001d3d", fontWeight: "700" }}>Total Price: ₹{totalPrice}</h4>

        <button 
          className="btn" 
          onClick={paymentMethod === "Razorpay" ? handleRazorpay : placeOrder}
          style={{
            background: "#8e5494",
            color: "#fff",
            padding: "12px 35px",
            borderRadius: "50px",
            fontSize: "16px",
            fontWeight: "600",
            border: "none",
            marginTop: "20px",
            transition: "all 0.3s ease"
          }}
          onMouseOver={(e) => e.target.style.background = "#7a4481"}
          onMouseOut={(e) => e.target.style.background = "#8e5494"}
        >
          {paymentMethod === "Razorpay" ? "Pay & Place Order" : "Place Order"}
        </button>
      </div>

      <Footer />
    </>
  );
}

export default Checkout;