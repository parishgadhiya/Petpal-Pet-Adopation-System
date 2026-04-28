import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../Firebaseconfig";
import { collection, onSnapshot } from "firebase/firestore";
import Header from "../component/Header";
import Sidebare from "../component/Sidebare";
import Footer from "../component/footer";

function SearchResults() {
  const { query } = useParams();
  
  const [pets, setPets] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    // Fetch Pets
    const petsRef = collection(db, "pets");
    const unsubPets = onSnapshot(petsRef, (snapshot) => {
      let result = [];
      snapshot.docs.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      setPets(result);
    });

    // Fetch Products
    const productsRef = collection(db, "products");
    const unsubProducts = onSnapshot(productsRef, (snapshot) => {
      let result = [];
      snapshot.docs.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      setProducts(result);
    });

    // Fetch Categories
    const categoriesRef = collection(db, "Categories");
    const unsubCategories = onSnapshot(categoriesRef, (snapshot) => {
      let result = [];
      snapshot.docs.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      setCategories(result);
      
      // Stop skeleton loader after this since it's the last one
      setLoading(false);
    });
    
    return () => {
      unsubPets();
      unsubProducts();
      unsubCategories();
    }
  }, []);

  // Filter the items by text in name or types
  const qStr = query.toLowerCase();
  
  const filteredPets = pets.filter((p) => 
    p.name?.toLowerCase().includes(qStr) || 
    p.type?.toLowerCase().includes(qStr) ||
    p.color?.toLowerCase().includes(qStr)
  );
  
  const filteredProducts = products.filter((p) => 
    p.name?.toLowerCase().includes(qStr) || 
    p.description?.toLowerCase().includes(qStr)
  );
  
  const filteredCategories = categories.filter((c) => 
    c.name?.toLowerCase().includes(qStr)
  );

  const hasResults = filteredPets.length > 0 || filteredProducts.length > 0 || filteredCategories.length > 0;

  return (
    <>
      <div id="layout-wrapper">
        <Header />
        
        {/* ========== Left Sidebar Start ========== */}
        <div className="vertical-menu">
          <div className="navbar-brand-box">
             <Link to="/dashboard" className="logo logo-dark">
               <span className="logo-sm">
                 <img src="minible/assets/images/logo-sm.png" alt="" height={22} />
               </span>
               <span className="logo-lg">
                 <img src="minible/assets/images/logo-dark.png" alt="" height={20} />
               </span>
             </Link>
          </div>
          <button
            type="button"
            className="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn"
          >
            <i className="fa fa-fw fa-bars" />
          </button>
          <div data-simplebar className="sidebar-menu-scroll">
            <Sidebare />
          </div>
        </div>
        {/* Left Sidebar End */}

        <div className="main-content">
          <div className="container-fluid">
            
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Search Results for "{query}"</h4>
                </div>
              </div>
            </div>

            {loading ? (
              <div className="text-center my-5">
                 <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                 </div>
              </div>
            ) : hasResults ? (
              
              <div className="row">
                
                {/* MATCHING PETS */}
                {filteredPets.length > 0 && (
                  <div className="col-12 mb-4">
                    <h5 className="mb-3">Pets</h5>
                    <div className="row">
                      {filteredPets.map((pet) => (
                        <div className="col-xl-3 col-lg-4 col-md-6" key={pet.id}>
                          <div className="card shadow-sm mb-4">
                            <div className="card-body text-center">
                              <img
                                src={pet.url || pet.image}
                                alt={pet.name}
                                style={{
                                  width: "120px",
                                  height: "120px",
                                  objectFit: "cover",
                                  borderRadius: "10px",
                                }}
                                className="mb-3"
                              />
                              <h5 className="card-title">{pet.name}</h5>
                              <p className="text-muted mb-1">Type: {pet.type}</p>
                              <p className="text-muted mb-1">Age: {pet.age}</p>
                              <p className="text-muted mb-0">Color: {pet.color}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* MATCHING PRODUCTS */}
                {filteredProducts.length > 0 && (
                  <div className="col-12 mb-4">
                    <h5 className="mb-3">Products</h5>
                    <div className="row">
                      {filteredProducts.map((product) => (
                        <div className="col-xl-3 col-lg-4 col-md-6" key={product.id}>
                          <div className="card shadow-sm mb-4">
                            <div className="card-body text-center">
                              <img
                                src={product.image}
                                alt={product.name}
                                style={{
                                  width: "120px",
                                  height: "120px",
                                  objectFit: "cover",
                                  borderRadius: "10px",
                                }}
                                className="mb-3"
                              />
                              <h5 className="card-title">{product.name}</h5>
                              {product.price && <p className="text-success fw-bold">₹{product.price}</p>}
                               <div className="d-flex justify-content-center gap-2 mt-3">
                                  <Link
                                    to={`/Updateproducts/${product.id}`}
                                    className="btn btn-primary btn-sm"
                                  >
                                    <i className="fa-solid fa-pen-to-square"></i>{" "}
                                    Edit
                                  </Link>
                               </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* MATCHING CATEGORIES */}
                {filteredCategories.length > 0 && (
                  <div className="col-12 mb-4">
                    <h5 className="mb-3">Categories</h5>
                    <div className="row">
                      {filteredCategories.map((cat) => (
                        <div className="col-xl-3 col-lg-4 col-md-6" key={cat.id}>
                          <div className="card shadow-sm mb-4">
                            <div className="card-body text-center">
                              {cat.imageUrl && (
                                <img
                                  src={cat.imageUrl}
                                  alt={cat.name}
                                  style={{
                                    width: "120px",
                                    height: "120px",
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                  }}
                                  className="mb-3"
                                />
                              )}
                              <h5 className="card-title">{cat.name}</h5>
                              <div className="d-flex justify-content-center gap-2 mt-3">
                                <Link
                                  to={`/Updatecategory/${cat.id}`}
                                  className="btn btn-primary btn-sm"
                                >
                                  <i className="fa-solid fa-pen-to-square"></i>{" "}
                                  Edit
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
              </div>
              
            ) : (
              <div className="text-center my-5">
                <i className="uil uil-search-alt" style={{ fontSize: "50px", color: "#ccc" }}></i>
                <h5 className="mt-3 text-muted">No results found for "{query}"</h5>
                <p className="text-muted">Try checking your spelling or searching for something else.</p>
              </div>
            )}
            
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default SearchResults;
