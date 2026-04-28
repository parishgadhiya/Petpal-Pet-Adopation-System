import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebaseconfig";
import { doc, getDoc } from "firebase/firestore";
import Nav from "../components/navbar";
import Footer from "../components/footer";
import Pagetitle from "../components/pagetitle";
import ReviewSection from "../components/ReviewSection";

function Productdetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such product!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <>
        <Nav />
        <div className="text-center p-5">
          <h4>Loading...</h4>
        </div>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Nav />
        <div className="text-center p-5">
          <h4>Product not found</h4>
          <Link to="/Ourshop" className="btn btn-primary mt-3">Back to Shop</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main className="fix">
        <Pagetitle title="Product Details" />
        
        <section className="product__details-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="product__details-images-wrap">
                  <div className="tab-content">
                    <div className="tab-pane show active">
                      <img src={product.image} alt={product.name} className="img-fluid rounded shadow-sm" style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product__details-content">
                  <h2 className="title">{product.name}</h2>
                  <div className="product__reviews-wrap mb-2">
                    <div className="product__code">
                      <span>Category: <strong>{product.category || "General"}</strong></span>
                    </div>
                  </div>
                  <h4 className="price">₹{product.price}.00</h4>
                  
                  <div className="product__details-qty mt-4">
                     <p className="text-muted">{product.description || "No description available for this product."}</p>
                  </div>

                  <div className="product__details-bottom mt-4">
                    <ul className="list-wrap">
                      <li>
                        <span className="title">Availability:</span>
                        <span className={`badge ${product.available !== false ? 'bg-success' : 'bg-danger'} ms-2`}>
                          {product.available !== false ? "In Stock" : "Out of Stock"}
                        </span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="product__details-checkout mt-4">
                    <span className="title">Guaranteed Safe Checkout</span>
                    <img src="/petpal/assets/img/products/card.png" alt="Payment Methods" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12">
                <div className="product-desc-wrap">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews-tab-pane" type="button" role="tab" aria-controls="reviews-tab-pane" aria-selected="true">
                        Reviews
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active p-4" id="reviews-tab-pane" role="tabpanel" aria-labelledby="reviews-tab">
                      <ReviewSection itemId={product.id} type="product" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Productdetails;
