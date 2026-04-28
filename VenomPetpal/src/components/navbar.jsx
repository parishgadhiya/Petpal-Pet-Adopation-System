// src/components/navbar.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../firebaseconfig";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import NotificationDropdown from "./NotificationDropdown";

function Nav() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  // Fetch Cart Count
  const fetchCartCount = async () => {

    const user = auth.currentUser;

    if (!user) return;

    const q = query(
      collection(db, "cart"),
      where("userId", "==", user.uid)
    );

    const snapshot = await getDocs(q);

    setCartCount(snapshot.docs.length);
  };

  useEffect(() => {
    fetchCartCount();
  }, []);

  // Fetch Cart Count End

  // Fetch Wishlist Count
  const fetchWishlistCount = async () => {

    const user = auth.currentUser;

    if (!user) return;

    const q = query(
      collection(db, "wishlist"),
      where("userId", "==", user.uid)
    );

    const snapshot = await getDocs(q);

    setWishlistCount(snapshot.docs.length);
  };

  useEffect(() => {
    fetchWishlistCount();
  }, []);

  // Fetch Wishlist Count End

  // ✅ Check login status and fetch profile
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          }
        } catch (error) {
          console.error("Error fetching navbar user data:", error);
        }
      } else {
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // ✅ Logout function
  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/login"; // simple redirect
  };



  return (
    <header>
      <div id="header-fixed-height" />
      <div id="sticky-header" className="tg-header__area tg-header__area-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tgmenu__wrap">
                <div className="row align-items-center">
                  {/* LEFT MENU */}
                  <div className="col-xl-6">
                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                      <ul className="navigation">
                        <li className="menu-item-has-children">
                          <a href="#">Home</a>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/PetCare">
                                Pet Care &amp; Veterinary
                              </Link>
                            </li>
                            <li>
                              <Link to="/PetBreed">Pet Breed</Link>
                            </li>
                            <li>
                              <Link to="/PetAdopt">Pet Adopt</Link>
                            </li>
                            <li>
                              <Link to="/PetWoocommerce">pet Woocommerce</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/About">About</Link>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Shop</a>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/Ourshop">Our Shop</Link>
                            </li>
                           
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Pages</a>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/Pets">All pets</Link>
                            </li>
                            <li>
                              <Link to="/petdetails">Pet Details</Link>
                            </li>
                            <li>
                              <Link to="/Gallery">Gallery</Link>
                            </li>
                           
                            <li>
                              <Link to="/DonatePet">DonatePet Page</Link>
                            </li>
                            <li>
                              <Link to="/Ourteam">Our Team</Link>
                            </li>
                           
                            <li>
                              <Link to="/Ourblog">Our Blog</Link>
                            </li>
                            <li>
                              <Link to="/Blogdetails">Blog Details</Link>
                            </li>
                           
                          </ul>
                        </li>
                        <li>
                          <Link to="/contact">Contacts</Link>
                        </li>
                        {user && (
                          <li className="menu-item-has-children">
                            <Link to="/MyOrders">My Orders</Link>
                            <ul className="sub-menu">
                              <li>
                                <Link to="/PetStatus">My Requests</Link>
                              </li>
                              <li>
                                <Link to="/MyAdoptedPets">Adopted Pets</Link>
                              </li>
                            </ul>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* LOGO */}
                  <div className="col-xl-2 col-md-4">
                    <div className="logo text-center">
                      <Link to="/">
                        <img
                          src="/petpal/assets/img/logo/w_logo.png"
                          alt="Logo"
                        />
                      </Link>
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="col-xl-4 col-md-8">
                    <div className="tgmenu__action tgmenu__action-two d-none d-md-block">
                      <ul className="list-wrap">
                        <li className="header-cart dropdown">
                          <NotificationDropdown isAdmin={false} />
                        </li>
                        <li className="header-cart">
                          <Link to="/cart">
                            <i className="flaticon-shopping-bag" />
                            <span>{cartCount}</span>
                          </Link>
                        </li>

                        <li className="header-cart">
                          <Link to="/wishlist">
                            <i className="flaticon-like" />
                            <span>{wishlistCount}</span>
                          </Link>
                        </li>

                        {/* ✅ Dynamic Login / Profile */}
                        {!user ? (
                          <li className="header-btn login-btn">
                            <Link to="/login" className="btn">
                              <i className="flaticon-locked" /> Login
                            </Link>
                          </li>
                        ) : (
                          <li className="header-btn login-btn">
                            <Link to="/UserProfile" className="btn">
                              <i className="flaticon-user" style={{ marginRight: "5px" }} />
                              {userData?.name || user.displayName || (user.email ? user.email.split('@')[0] : "Profile")}
                            </Link>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
