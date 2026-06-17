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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mobile submenu collapsible states
  const [isHomeSubOpen, setIsHomeSubOpen] = useState(false);
  const [isShopSubOpen, setIsShopSubOpen] = useState(false);
  const [isPagesSubOpen, setIsPagesSubOpen] = useState(false);
  const [isOrdersSubOpen, setIsOrdersSubOpen] = useState(false);

  // Sync body class for mobile sidebar animations
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("mobile-menu-visible");
    } else {
      document.body.classList.remove("mobile-menu-visible");
    }
    return () => {
      document.body.classList.remove("mobile-menu-visible");
    };
  }, [isMobileMenuOpen]);

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
                <nav className="tgmenu__nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '10px 0' }}>
                  {/* LOGO */}
                  <div className="logo">
                    <Link to="/">
                      <img
                        src="/petpal/assets/img/logo/w_logo.png"
                        alt="Logo"
                      />
                    </Link>
                  </div>

                  {/* DESKTOP MENU */}
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

                  {/* ACTION CONTROLS (Responsive) */}
                  <div className="tgmenu__action tgmenu__action-two d-flex align-items-center">
                    <ul className="list-wrap d-flex align-items-center mb-0 gap-3" style={{ listStyle: 'none' }}>
                      <li className="header-cart dropdown text-white">
                        <NotificationDropdown isAdmin={false} />
                      </li>
                      <li className="header-cart">
                        <Link to="/cart" className="position-relative text-white">
                          <i className="flaticon-shopping-bag" style={{ fontSize: "22px" }} />
                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "10px", transform: "translate(20%, -20%)" }}>
                            {cartCount}
                          </span>
                        </Link>
                      </li>

                      <li className="header-cart d-none d-xl-block">
                        <Link to="/wishlist" className="position-relative text-white">
                          <i className="flaticon-like" style={{ fontSize: "22px" }} />
                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "10px", transform: "translate(20%, -20%)" }}>
                            {wishlistCount}
                          </span>
                        </Link>
                      </li>

                      {!user ? (
                        <li className="header-btn login-btn d-none d-xl-block">
                          <Link to="/login" className="btn">
                            <i className="flaticon-locked" /> Login
                          </Link>
                        </li>
                      ) : (
                        <li className="header-btn login-btn d-none d-xl-block">
                          <Link to="/UserProfile" className="btn">
                            <i className="flaticon-user" style={{ marginRight: "5px" }} />
                            {userData?.name || user.displayName || (user.email ? user.email.split('@')[0] : "Profile")}
                          </Link>
                        </li>
                      )}
                    </ul>

                    {/* MOBILE TOGGLER */}
                    <div className="mobile-nav-toggler d-xl-none ms-3 text-white" onClick={() => setIsMobileMenuOpen(true)} style={{ cursor: "pointer", fontSize: "24px" }}>
                      <i className="fa-solid fa-bars" />
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DRAWER (Premium theme layout) */}
      <div className="tgmobile__menu">
        <nav className="tgmobile__menu-box">
          <div className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>
            <i className="fas fa-times" />
          </div>
          <div className="nav-logo">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img src="/petpal/assets/img/logo/logo.png" alt="Logo" />
            </Link>
          </div>
          
          <div className="tgmobile__menu-outer">
            <ul className="navigation">
              <li className={`menu-item-has-children ${isHomeSubOpen ? 'active' : ''}`}>
                <a href="#" onClick={(e) => { e.preventDefault(); setIsHomeSubOpen(!isHomeSubOpen); }}>
                  Home
                </a>
                <ul className="sub-menu" style={{ display: isHomeSubOpen ? 'block' : 'none' }}>
                  <li><Link to="/PetCare" onClick={() => setIsMobileMenuOpen(false)}>Pet Care &amp; Veterinary</Link></li>
                  <li><Link to="/PetBreed" onClick={() => setIsMobileMenuOpen(false)}>Pet Breed</Link></li>
                  <li><Link to="/PetAdopt" onClick={() => setIsMobileMenuOpen(false)}>Pet Adopt</Link></li>
                  <li><Link to="/PetWoocommerce" onClick={() => setIsMobileMenuOpen(false)}>Pet Woocommerce</Link></li>
                </ul>
                <div className={`dropdown-btn ${isHomeSubOpen ? 'open' : ''}`} onClick={() => setIsHomeSubOpen(!isHomeSubOpen)}>
                  <span className="plus-line" />
                </div>
              </li>
              
              <li>
                <Link to="/About" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              </li>

              <li className={`menu-item-has-children ${isShopSubOpen ? 'active' : ''}`}>
                <a href="#" onClick={(e) => { e.preventDefault(); setIsShopSubOpen(!isShopSubOpen); }}>
                  Shop
                </a>
                <ul className="sub-menu" style={{ display: isShopSubOpen ? 'block' : 'none' }}>
                  <li><Link to="/Ourshop" onClick={() => setIsMobileMenuOpen(false)}>Our Shop</Link></li>
                </ul>
                <div className={`dropdown-btn ${isShopSubOpen ? 'open' : ''}`} onClick={() => setIsShopSubOpen(!isShopSubOpen)}>
                  <span className="plus-line" />
                </div>
              </li>

              <li className={`menu-item-has-children ${isPagesSubOpen ? 'active' : ''}`}>
                <a href="#" onClick={(e) => { e.preventDefault(); setIsPagesSubOpen(!isPagesSubOpen); }}>
                  Pages
                </a>
                <ul className="sub-menu" style={{ display: isPagesSubOpen ? 'block' : 'none' }}>
                  <li><Link to="/Pets" onClick={() => setIsMobileMenuOpen(false)}>All Pets</Link></li>
                  <li><Link to="/Gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link></li>
                  <li><Link to="/DonatePet" onClick={() => setIsMobileMenuOpen(false)}>DonatePet Page</Link></li>
                  <li><Link to="/Ourteam" onClick={() => setIsMobileMenuOpen(false)}>Our Team</Link></li>
                  <li><Link to="/Blogdetails" onClick={() => setIsMobileMenuOpen(false)}>Blog Details</Link></li>
                </ul>
                <div className={`dropdown-btn ${isPagesSubOpen ? 'open' : ''}`} onClick={() => setIsPagesSubOpen(!isPagesSubOpen)}>
                  <span className="plus-line" />
                </div>
              </li>

              <li>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contacts</Link>
              </li>

              {user && (
                <li className={`menu-item-has-children ${isOrdersSubOpen ? 'active' : ''}`}>
                  <a href="#" onClick={(e) => { e.preventDefault(); setIsOrdersSubOpen(!isOrdersSubOpen); }}>
                    My Orders
                  </a>
                  <ul className="sub-menu" style={{ display: isOrdersSubOpen ? 'block' : 'none' }}>
                    <li><Link to="/MyOrders" onClick={() => setIsMobileMenuOpen(false)}>My Orders</Link></li>
                    <li><Link to="/PetStatus" onClick={() => setIsMobileMenuOpen(false)}>My Requests</Link></li>
                    <li><Link to="/MyAdoptedPets" onClick={() => setIsMobileMenuOpen(false)}>Adopted Pets</Link></li>
                  </ul>
                  <div className={`dropdown-btn ${isOrdersSubOpen ? 'open' : ''}`} onClick={() => setIsOrdersSubOpen(!isOrdersSubOpen)}>
                    <span className="plus-line" />
                  </div>
                </li>
              )}
              
              {user ? (
                <>
                  <li>
                    <Link to="/UserProfile" onClick={() => setIsMobileMenuOpen(false)}>
                      Profile ({userData?.name || user.displayName || user.email?.split('@')[0]})
                    </Link>
                  </li>
                  <li>
                    <Link to="/chat" onClick={() => setIsMobileMenuOpen(false)}>
                      Chat Support
                    </Link>
                  </li>
                  <li className="mt-3 ps-3">
                    <button className="btn btn-sm btn-outline-danger" onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li className="mt-3 ps-3">
                  <Link to="/login" className="btn btn-sm text-white text-center" style={{ backgroundColor: "#8a4b8f", borderColor: "#8a4b8f" }} onClick={() => setIsMobileMenuOpen(false)}>
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div className="social-links">
            <ul className="list-wrap">
              <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer">
                  <i className="fab fa-whatsapp" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="tgmobile__menu-backdrop" onClick={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}

export default Nav;
