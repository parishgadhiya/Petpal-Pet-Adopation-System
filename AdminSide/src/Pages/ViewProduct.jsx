import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { collection, deleteDoc, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebaseconfig";
import Footer from "../component/footer";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import Sidebare from "../component/Sidebare";
function ViewProduct() {
  let [products, setproducts] = useState([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  useEffect(function () {
    getProduct();
  }, []);

  async function getProduct() {
    let ColRef = collection(db, "products");
    onSnapshot(ColRef, function (Snapshot) {
      let result = [];
      //  console.log(data.docs)
      Snapshot.docs.forEach(function (doc) {
        result.push({ ...doc.data(), id: doc.id });
      });
      setproducts(result);
    });
  }
  async function del(id) {
    await deleteDoc(doc(db, "products", id));
    console.log("Deleted :", id);

    Swal.fire({
      title: "Delete products",
      icon: "success",
    });
  }

  async function toggleAvailable(id, currentAvailable) {
    const docRef = doc(db, "products", id);
    await updateDoc(docRef, {
      available: !currentAvailable
    });
  }

  async function toggleStatus(id, currentStatus) {
    const docRef = doc(db, "products", id);
    await updateDoc(docRef, {
      status: currentStatus === "Active" ? "Inactive" : "Active"
    });
  }

  const filteredProducts = products.filter(product => {
    if (!searchQuery) return true;
    return (
      product.name?.toLowerCase().includes(searchQuery) ||
      product.status?.toLowerCase().includes(searchQuery) ||
      (product.available !== false ? "In Stock" : "Out of Stock").toLowerCase().includes(searchQuery)
    );
  });

  return (
    <>
      <div id="layout-wrapper">
        <Header />
        <Sidebare />
        <div className="main-content">
          
            <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                <div className="col-6">
                  <div className="page-title-box d-flex align-items-center justify-content-between">
                    <h4 className="mb-0">Product Details</h4>
                  </div>
                </div>
              </div>
              {/* end page title */}
              <div className="row">
                {products.length === 0 ? (
                  <div className="col-12 text-center p-5">
                    <div className="card shadow-sm border-0">
                      <div className="card-body">
                        <i className="fa-solid fa-folder-open text-muted mb-3" style={{ fontSize: '3rem' }}></i>
                        <h5 className="text-muted">No products found.</h5>
                      </div>
                    </div>
                  </div>
                ) : filteredProducts.length === 0 ? (
                  <div className="col-12 text-center p-5">
                    <div className="card shadow-sm border-0">
                      <div className="card-body">
                        <i className="fa-solid fa-magnifying-glass text-warning mb-3" style={{ fontSize: '3rem' }}></i>
                        <h5 className="text-muted">No results found for "{searchQuery}"</h5>
                        <p className="text-muted small">Try checking your spelling or using a different search term.</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  filteredProducts.map((product) => {
                    return (
                      <div
                        className="col-xl-3 col-lg-4 col-md-6"
                        key={product.id}
                      >
                        <div className="card shadow-sm mb-4">
                          <div className="card-body text-center">
                            {/* PRODUCT IMAGE */}

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

                            {/* PRODUCT NAME */}

                            <h5 className="card-title">{product.name}</h5>

                            {/* PRODUCT STATUS & AVAILABILITY */}
                            <div className="mb-2">
                              <span
                                className={`badge ${
                                  product.available !== false
                                    ? "bg-success"
                                    : "bg-danger"
                                } me-1`}
                                style={{ cursor: "pointer" }}
                                onClick={() => toggleAvailable(product.id, product.available !== false)}
                              >
                                {product.available !== false ? "In Stock" : "Out of Stock"}
                              </span>
                              <span
                                className={`badge ${
                                  product.status === "Inactive"
                                    ? "bg-secondary"
                                    : "bg-info"
                                }`}
                                style={{ cursor: "pointer" }}
                                onClick={() => toggleStatus(product.id, product.status || "Active")}
                              >
                                {product.status || "Active"}
                              </span>
                            </div>

                            {/* ACTION BUTTONS */}

                            <div className="d-flex justify-content-center gap-2 mt-3">
                                <Link
                                  to={`/updateproducts/${product.id}`}
                                className="btn btn-primary btn-sm"
                              >
                                <i className="fa-solid fa-pen-to-square"></i>{" "}
                                Edit
                              </Link>

                              <button
                                onClick={() => del(product.id)}
                                className="btn btn-danger btn-sm"
                              >
                                <i className="fa-solid fa-trash"></i> Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
              {/* end row */}
            </div>{" "}
            {/* container-fluid */}
          </div>
          {/* End Page-content */}
          <Footer />
        </div>
        {/* end main content*/}
      
      {/* END layout-wrapper */}
      {/* Right Sidebar */}

      {/* /Right-bar */}
      {/* Right bar overlay*/}
      <div className="rightbar-overlay" />
    </>
  );
}
export default ViewProduct;
