import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Nav from "../components/navbar";
import Footer from "../components/footer";
import { db, auth } from "../firebaseconfig";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import useAuthCheck from "../hooks/useAuthCheck";

function Ourshop() {
  const { checkAuth } = useAuthCheck();
  const [products, setProducts] = useState([]);

  // ---------------- FETCH PRODUCTS FROM FIRESTORE ----------------

  useEffect(() => {
    const fetchProducts = async () => {
      const snapshot = await getDocs(collection(db, "products"));

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(data);
    };

    fetchProducts();
  }, []);

  // ---------------- FETCH WISHLIST ITEMS ----------------

  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const q = query(
          collection(db, "wishlist"),
          where("userId", "==", user.uid)
        );
        const snapshot = await getDocs(q);
        setWishlistItems(snapshot.docs.map((doc) => doc.data().productId));
      } else {
        setWishlistItems([]);
      }
    });

    return () => unsubscribe();
  }, []);

  // ---------------- ADD TO CART ----------------

  const handleAddToCart = async (product) => {
    const user = auth.currentUser;

    if (!checkAuth("add items to cart")) return;

    const cartRef = collection(db, "cart");

    const q = query(
      cartRef,
      where("userId", "==", user.uid),
      where("productId", "==", product.productId)
    );

    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      const existingDoc = snapshot.docs[0];

      await updateDoc(doc(db, "cart", existingDoc.id), {
        quantity: existingDoc.data().quantity + 1,
      });
    } else {
      await addDoc(cartRef, {
        userId: user.uid,
        productId: product.productId,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
    }

    alert("Product added to cart");
  };

  // ---------------- ADD TO WISHLIST ----------------

  const handleAddToWishlist = async (product) => {
    const user = auth.currentUser;

    if (!checkAuth("add items to wishlist")) return;

    const wishlistRef = collection(db, "wishlist");

    const q = query(
      wishlistRef,
      where("userId", "==", user.uid),
      where("productId", "==", product.productId)
    );

    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      alert("Already in wishlist");
      return;
    }

    await addDoc(wishlistRef, {
      userId: user.uid,
      productId: product.productId,
      name: product.name,
      price: product.price,
      image: product.image,
      createdAt: new Date(),
    });

    setWishlistItems((prev) => [...prev, product.productId]);
    alert("Added to wishlist");
  };

  return (
    <>
      <Nav />

      <main className="fix">
        <section className="product__area-four">
          <div className="container">
            <div className="row gutter-20 row-cols-1 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center">
              {products
                .filter((product) => product.status !== "Inactive")
                .map((product) => (
                  <div className="col" key={product.id}>
                    <div className="product__item">
                      <div className="product__thumb">
                        <Link to={`/productdetails/${product.id}`}>
                          <img src={product.image} alt={product.name} />
                        </Link>


                        {product.available === false && (
                          <div
                            className="out-of-stock-overlay"
                            style={{
                              position: "absolute",
                              top: "10px",
                              left: "10px",
                              backgroundColor: "rgba(220, 53, 69, 0.9)",
                              color: "white",
                              padding: "2px 8px",
                              borderRadius: "4px",
                              fontSize: "12px",
                              fontWeight: "bold",
                              zIndex: 1,
                            }}
                          >
                            OUT OF STOCK
                          </div>
                        )}

                        <div className="product__action">
                          <button
                            style={{ background: "none", border: "none" }}
                            onClick={() => handleAddToWishlist(product)}
                          >
                            {wishlistItems.includes(product.productId) ? (
                              <span style={{ fontSize: "20px" }}>❤️</span>
                            ) : (
                              <i className="flaticon-love" />
                            )}
                          </button>
                        </div>

                        <div className="product__add-cart">
                          <button
                            className="btn"
                            onClick={() => handleAddToCart(product)}
                            disabled={product.available === false}
                            style={
                              product.available === false
                                ? { opacity: 0.6, cursor: "not-allowed" }
                                : {}
                            }
                          >
                            <i className="flaticon-shopping-bag" />
                            {product.available === false
                              ? "Out of Stock"
                              : "Add To Cart"}
                          </button>
                        </div>
                      </div>

                      <div className="product__content">
                        <h4 className="title">
                          <Link to={`/productdetails/${product.id}`}>{product.name}</Link>
                        </h4>


                        <h3 className="price">
                          ₹{product.price}.00
                          {product.oldPrice && (
                            <del> ₹{product.oldPrice}.00</del>
                          )}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Ourshop;
