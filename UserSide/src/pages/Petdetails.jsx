import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import Nav from "../components/navbar";
import Pagetitle from "../components/pagetitle";
import { useEffect, useState } from "react";
import { db } from "../firebaseconfig";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import ReviewSection from "../components/ReviewSection";


function Petdetails() {
  let [pet, setPet] = useState(null);
  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    if (id) {
      getPetDetails();
    }
  }, [id]);

  async function getPetDetails() {
    try {
      let docRef = doc(db, "pets", id);
      let docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPet({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No such pet found");
      }
    } catch (error) {
      console.log("Error fetching pet:", error);
    }
  }

  return (
    <>
      <Nav />
      <main className="fix">
        {/* breadcrumb-area */}
        <Pagetitle title="Pet Details" />
        {/* breadcrumb-area-end */}
        {/* product-details-area */}
        {pet ? (
          <section className="product__details-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="product__details-images-wrap">
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane show active"
                        id="itemOne-tab-pane"
                        role="tabpanel"
                        aria-labelledby="itemOne-tab"
                        tabIndex={0}
                      >
                        <a
                          href="assets/img/products/products_img01.jpg"
                          className="popup-image"
                        >
                          <img src={pet.url} alt="img" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="product__details-content">
                    <h2 className="title">{pet.name}</h2>
                    <div className="product__reviews-wrap">
                      <div className="product__reviews">
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span>(2 Reviews)</span>
                      </div>
                      <div className="product__code">
                        <span>
                          OWNER: <strong>{pet.owner}</strong>
                        </span>
                      </div>
                    </div>
                    <h4 className="price">{pet.price}</h4>
                    <div>
                      Color : <strong>{pet.color}</strong>
                    </div>
                    <div className="mt-1">
                      Age : <strong>{pet.age}</strong>
                    </div>
                    <div className="product__details-qty">
                      <Link
                        to={`/rules/${pet.id}`}
                        className="btn btn-primary mt-3 d-inline-flex align-items-center justify-content-center"
                        style={{ padding: '15px 30px', fontSize: '18px', backgroundColor: '#8a4b8f', borderColor: '#8a4b8f', borderRadius: '50px' }}
                      >
                         <i className="flaticon-love me-2" />
                        Show Interest
                      </Link>

                      <Link
                        to={`/chat?petId=${pet.id}&petName=${pet.name}`}
                        className="btn btn-secondary mt-3 d-inline-flex align-items-center justify-content-center"
                        style={{ padding: '15px 30px', fontSize: '18px', backgroundColor: '#333', borderColor: '#333', borderRadius: '50px', marginLeft: '10px' }}
                      >
                         <i className="fas fa-comments me-2" />
                        Ask about this pet
                      </Link>
                      
                    </div>
                    <div className="product__wishlist-wrap">
                      <a href="product-details.html">
                        <i className="flaticon-love" />
                        Add To Wishlist
                      </a>
                      <a href="product-details.html">
                        <i className="flaticon-exchange" />
                        Compare To Other
                      </a>
                    </div>
                    <div className="product__details-bottom">
                      <ul className="list-wrap">
                        <li className="product__details-category">
                          <span className="title">
                            Categories : <strong>{pet.pettype}</strong>
                          </span>
                        </li>
                        <li className="product__details-tags">
                          <span className="title">Tags:</span>
                          <a href="product-details.html">Food Pet,</a>
                          <a href="product-details.html">Pet Essentials</a>
                        </li>
                        <li className="product__details-social">
                          <span className="title">Share :</span>
                          <ul className="list-wrap">
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                target="_blank"
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/" target="_blank">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.whatsapp.com/"
                                target="_blank"
                              >
                                <i className="fab fa-whatsapp" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.instagram.com/"
                                target="_blank"
                              >
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/"
                                target="_blank"
                              >
                                <i className="fab fa-youtube" />
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="product__details-checkout">
                      <span className="title">Guaranteed Safe Checkout</span>
                      <img src="/petpal/assets/img/products/card.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="product-desc-wrap">
                    <ul className="nav nav-tabs" id="myTab2" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="description-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#description-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="description-tab-pane"
                          aria-selected="true"
                        >
                          Description
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="reviews-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#reviews-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="reviews-tab-pane"
                          aria-selected="false"
                        >
                          Reviews
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent2">
                      <div
                        className="tab-pane fade"
                        id="reviews-tab-pane"
                        role="tabpanel"
                        aria-labelledby="reviews-tab"
                        tabIndex={0}
                      >
                        <div className="product-desc-review p-4">
                          <ReviewSection itemId={pet.id} type="pet" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div className="text-center p-5">
            <h4>Loading...</h4>
          </div>
        )}
        {/* product-details-area-end */}
      </main>
      <Footer />
    </>
  );
}
export default Petdetails;