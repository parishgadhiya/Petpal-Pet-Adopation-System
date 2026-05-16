import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/navbar";
import Footer from "../components/footer";
function PetWoocommerce(){
    return(
        <>
        <Nav/>
 <main className="fix">
  {/* banner-area */}
  <section className="banner__area-four">
    <div className="container">
      <div className="row gutter-20">
        <div className="col-lg-8">
          <div className="swiper slider__active">
            <div className="swiper-wrapper">
              <div className="swiper-slide slider__single">
                <div className="slider__bg" data-background="petpal/assets/img/banner/h3_banner_slide01.jpg" />
                <div className="slider__content">
                  <h1 className="title">Pet Healthy Food <br /> &amp; Accessories</h1>
                  <h4 className="sub-title">Delicious Food Make With Love</h4>
                  <a href="product.html" className="btn">Shop Now <img src="petpal/assets/img/icon/right_arrow.svg" alt className="injectable" /></a>
                  <div className="discount__shape">
                    <img src="petpal/assets/img/banner/sale.svg" alt className="injectable" />
                    <h2 className="title">30% <span>Flat Sale!</span></h2>
                  </div>
                </div>
              </div>
              <div className="swiper-slide slider__single">
                <div className="slider__bg" data-background="petpal/assets/img/banner/h3_banner_slide01.jpg" />
                <div className="slider__content">
                  <h1 className="title">Pet Healthy Food <br /> &amp; Accessories</h1>
                  <h4 className="sub-title">Delicious Food Make With Love</h4>
                  <a href="product.html" className="btn">Shop Now <img src="petpal/assets/img/icon/right_arrow.svg" alt className="injectable" /></a>
                  <div className="discount__shape">
                    <img src="petpal/assets/img/banner/sale.svg" alt className="injectable" />
                    <h2 className="title">50% <span>Flat Sale!</span></h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="banner__post-item-wrap">
            <div className="banner__post-item shine-animate-item">
              <div className="banner__post-thumb shine-animate">
                <img src="petpal/assets/img/banner/h3_banner_img01.jpg" alt="img" />
              </div>
              <div className="banner__post-content">
                <h2 className="title">The Best Quality House <span>
                    <strong>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 42" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.0952 2.41842C18.5987 1.09323 22.1904 0.607768 25.8799 0.378947C29.7051 0.141712 49.0312 0.123062 52.6628 1.05552C57.0727 2.1878 62.9146 2.42124 64.8207 6.374C66.7564 10.3881 62.3819 15.0531 61.5901 19.5685C60.9204 23.3881 62.1249 27.2823 60.5219 30.8902C58.8022 34.7608 56.2758 38.8903 52.2619 40.5639C48.2685 42.2289 28.5024 39.5356 24.2541 39.5109C20.1671 39.4871 16.0887 41.3434 12.1742 40.4213C7.68366 39.3634 2.26479 38.0084 0.524582 33.9207C-1.24656 29.7604 3.05097 25.1169 3.70387 20.525C4.27715 16.493 1.88863 12.1607 4.12361 8.60819C6.35856 5.05573 11.107 3.92693 15.0952 2.41842Z" fill="#FFAD0E" />
                      </svg>
                      15%
                    </strong>
                    Off For Your Pet</span>
                </h2>
              </div>
            </div>
            <div className="banner__post-item-two shine-animate-item">
              <div className="banner__post-thumb shine-animate">
                <img src="petpal/assets/img/banner/h3_banner_img02.jpg" alt="img" />
              </div>
              <div className="banner__post-content-two">
                <h2 className="title">For Your <br /> Pet Busket</h2>
                <a href="product.html" className="btn">Shop Now <img src="petpal/assets/img/icon/right_arrow.svg" alt className="injectable" /></a>
              </div>
              <div className="discount__shape-two">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 74" fill="none" preserveAspectRatio="none">
                  <path d="M150 0H0C7.59494 63.3462 56.3291 75.6203 79.7468 73.8391C135.57 69.9528 149.842 22.9938 150 0Z" fill="#FF3489" />
                </svg>
                <h2 className="title">12% <span>Off</span></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* banner-area-end */}
  {/* features-area */}
  <section className="features__area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="features__item">
            <div className="features__icon">
              <img src="petpal/assets/img/icon/features_icon01.svg" alt className="injectable" />
            </div>
            <div className="features__content">
              <h4 className="title">Free Shipping</h4>
              <p>for orders over $200</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="features__item">
            <div className="features__icon">
              <img src="petpal/assets/img/icon/features_icon02.svg" alt className="injectable" />
            </div>
            <div className="features__content">
              <h4 className="title">Money Guarantee</h4>
              <p>30 days for an exchange</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="features__item">
            <div className="features__icon">
              <img src="petpal/assets/img/icon/features_icon03.svg" alt className="injectable" />
            </div>
            <div className="features__content">
              <h4 className="title">100% Return Policy</h4>
              <p>Any Time Return Product</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="features__item">
            <div className="features__icon">
              <img src="petpal/assets/img/icon/features_icon04.svg" alt className="injectable" />
            </div>
            <div className="features__content">
              <h4 className="title">Best Deal Offer</h4>
              <p>Grab Your Gear and Go</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* features-area-end */}
  {/* divider-area */}
  <div className="divider-area">
    <div className="container">
      <div className="divider-wrap" />
    </div>
  </div>
  {/* divider-area-end */}
  {/* product-area */}
  <section className="product__area">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-7">
          <div className="section__title-two mb-25">
            <h2 className="title">Featured Products <img src="petpal/assets/img/images/title_shape.svg" alt className="injectable" /></h2>
          </div>
        </div>
        <div className="col-md-5">
          <div className="product__tab-wrap mb-25">
            <ul className="nav nav-tabs" id="productTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all-tab-pane" type="button" role="tab" aria-controls="all-tab-pane" aria-selected="true">All</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="best-tab" data-bs-toggle="tab" data-bs-target="#best-tab-pane" type="button" role="tab" aria-controls="best-tab-pane" aria-selected="false">Best Seller</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="sale-tab" data-bs-toggle="tab" data-bs-target="#sale-tab-pane" type="button" role="tab" aria-controls="sale-tab-pane" aria-selected="false">Sale</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="tab-content product__item-wrap" id="productTabContent">
            <div className="tab-pane fade show active" id="all-tab-pane" role="tabpanel" aria-labelledby="all-tab" tabIndex={0}>
              <div className="swiper product-active">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html"><img src="petpal/assets/img/products/products_img01.jpg" alt="img" /></a>
                        <div className="product__action">
                          <a href="product-details.html"><i className="flaticon-love" /></a>
                          <a href="product-details.html"><i className="flaticon-loupe" /></a>
                          <a href="product-details.html"><i className="flaticon-exchange" /></a>
                        </div>
                        <div className="sale-wrap">
                          <span>New</span>
                        </div>
                        <div className="product__add-cart">
                          <a href="product-details.html" className="btn"><i className="flaticon-shopping-bag" />Add To Cart</a>
                        </div>
                      </div>
                      <div className="product__content">
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
                        <h4 className="title"><a href="product-details.html">Dog Harness-Neoprene Comfort Liner-Orange and ...</a></h4>
                        <h3 className="price">$12.00 <del>$25.00</del></h3>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html"><img src="petpal/assets/img/products/products_img02.jpg" alt="img" /></a>
                        <div className="product__action">
                          <a href="product-details.html"><i className="flaticon-love" /></a>
                          <a href="product-details.html"><i className="flaticon-loupe" /></a>
                          <a href="product-details.html"><i className="flaticon-exchange" /></a>
                        </div>
                        <div className="sale-wrap sale-wrap-two">
                          <span>Sale!</span>
                        </div>
                        <div className="product__add-cart">
                          <a href="product-details.html" className="btn"><i className="flaticon-shopping-bag" />Add To Cart</a>
                        </div>
                      </div>
                      <div className="product__content">
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
                        <h4 className="title"><a href="product-details.html">Arm &amp; Hammer Super Deodori zing Dog Shampoo, Pet Wash</a></h4>
                        <h3 className="price">$20.00 <del>$30.00</del></h3>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html"><img src="petpal/assets/img/products/products_img03.jpg" alt="img" /></a>
                        <div className="product__action">
                          <a href="product-details.html"><i className="flaticon-love" /></a>
                          <a href="product-details.html"><i className="flaticon-loupe" /></a>
                          <a href="product-details.html"><i className="flaticon-exchange" /></a>
                        </div>
                        <div className="product__add-cart">
                          <a href="product-details.html" className="btn"><i className="flaticon-shopping-bag" />Add To Cart</a>
                        </div>
                      </div>
                      <div className="product__content">
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
                        <h4 className="title"><a href="product-details.html">Milk-Bone Brushing Chews Daily Dental Dog Treats ...</a></h4>
                        <h3 className="price">$36.00 <del>$56.00</del></h3>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html"><img src="petpal/assets/img/products/products_img04.jpg" alt="img" /></a>
                        <div className="product__action">
                          <a href="product-details.html"><i className="flaticon-love" /></a>
                          <a href="product-details.html"><i className="flaticon-loupe" /></a>
                          <a href="product-details.html"><i className="flaticon-exchange" /></a>
                        </div>
                        <div className="sale-wrap sale-wrap-two">
                          <span>Sale!</span>
                        </div>
                        <div className="product__add-cart">
                          <a href="product-details.html" className="btn"><i className="flaticon-shopping-bag" />Add To Cart</a>
                        </div>
                      </div>
                      <div className="product__content">
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
                        <h4 className="title"><a href="product-details.html">Two Door Top Load Plastic Kennel &amp; Pet Carrier, Blue 19”</a></h4>
                        <h3 className="price">$18.00 <del>$33.00</del></h3>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html"><img src="petpal/assets/img/products/products_img05.jpg" alt="img" /></a>
                        <div className="product__action">
                          <a href="product-details.html"><i className="flaticon-love" /></a>
                          <a href="product-details.html"><i className="flaticon-loupe" /></a>
                          <a href="product-details.html"><i className="flaticon-exchange" /></a>
                        </div>
                        <div className="sale-wrap">
                          <span>New</span>
                        </div>
                        <div className="product__add-cart">
                          <a href="product-details.html" className="btn"><i className="flaticon-shopping-bag" />Add To Cart</a>
                        </div>
                      </div>
                      <div className="product__content">
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
                        <h4 className="title"><a href="product-details.html">The Kitten House with Mat Sleeping Bed House</a></h4>
                        <h3 className="price">$19.00 <del>$28.00</del></h3>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html"><img src="petpal/assets/img/products/products_img04.jpg" alt="img" /></a>
                        <div className="product__action">
                          <a href="product-details.html"><i className="flaticon-love" /></a>
                          <a href="product-details.html"><i className="flaticon-loupe" /></a>
                          <a href="product-details.html"><i className="flaticon-exchange" /></a>
                        </div>
                        <div className="sale-wrap sale-wrap-two">
                          <span>Sale!</span>
                        </div>
                        <div className="product__add-cart">
                          <a href="product-details.html" className="btn"><i className="flaticon-shopping-bag" />Add To Cart</a>
                        </div>
                      </div>
                      <div className="product__content">
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
                        <h4 className="title"><a href="product-details.html">Two Door Top Load Plastic Kennel &amp; Pet Carrier, Blue 19”</a></h4>
                        <h3 className="price">$18.00 <del>$33.00</del></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product__nav-wrap">
                <button className="product-button-prev"><i className="flaticon-left-chevron" /></button>
                <button className="product-button-next"><i className="flaticon-right-arrow-angle" /></button>
              </div>
            </div>
            <div className="tab-pane fade" id="best-tab-pane" role="tabpanel" aria-labelledby="best-tab" tabIndex={0}>
              <div className="swiper product-active">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html"><img src="petpal/assets/img/products/products_img01.jpg" alt="img" /></a>
                        <div className="product__action">
                          <a href="product-details.html"><i className="flaticon-love" /></a>
                          <a href="product-details.html"><i className="flaticon-loupe" /></a>
                          <a href="product-details.html"><i className="flaticon-exchange" /></a>
                        </div>
                        <div className="sale-wrap">
                          <span>New</span>
                        </div>
                        <div className="product__add-cart">
                          <a href="product-details.html" className="btn"><i className="flaticon-shopping-bag" />Add To Cart</a>
                        </div>
                      </div>
                      <div className="product__content">
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
                        <h4 className="title"><a href="product-details.html">Dog Harness-Neoprene Comfort Liner-Orange and ...</a></h4>
                        <h3 className="price">$12.00 <del>$25.00</del></h3>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html"><img src="petpal/assets/img/products/products_img02.jpg" alt="img" /></a>
                        <div className="product__action">
                          <a href="product-details.html"><i className="flaticon-love" /></a>
                          <a href="product-details.html"><i className="flaticon-loupe" /></a>
                          <a href="product-details.html"><i className="flaticon-exchange" /></a>
                        </div>
                        <div className="sale-wrap sale-wrap-two">
                          <span>Sale!</span>
                        </div>
                        <div className="product__add-cart">
                          <a href="product-details.html" className="btn"><i className="flaticon-shopping-bag" />Add To Cart</a>
                        </div>
                      </div>
                      <div className="product__content">
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
                        <h4 className="title"><a href="product-details.html">Arm &amp; Hammer Super Deodori zing Dog Shampoo, Pet Wash</a></h4>
                        <h3 className="price">$20.00 <del>$30.00</del></h3>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html"><img src="petpal/assets/img/products/products_img03.jpg" alt="img" /></a>
                        <div className="product__action">
                          <a href="product-details.html"><i className="flaticon-love" /></a>
                          <a href="product-details.html"><i className="flaticon-loupe" /></a>
                          <a href="product-details.html"><i className="flaticon-exchange" /></a>
                        </div>
                        <div className="product__add-cart">
                          <a href="product-details.html" className="btn"><i className="flaticon-shopping-bag" />Add To Cart</a>
                        </div>
                      </div>
                      <div className="product__content">
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
                        <h4 className="title"><a href="product-details.html">Milk-Bone Brushing Chews Daily Dental Dog Treats ...</a></h4>
                        <h3 className="price">$36.00 <del>$56.00</del></h3>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html"><img src="petpal/assets/img/products/products_img04.jpg" alt="img" /></a>
                        <div className="product__action">
                          <a href="product-details.html"><i className="flaticon-love" /></a>
                          <a href="product-details.html"><i className="flaticon-loupe" /></a>
                          <a href="product-details.html"><i className="flaticon-exchange" /></a>
                        </div>
                        <div className="sale-wrap sale-wrap-two">
                          <span>Sale!</span>
                        </div>
                        <div className="product__add-cart">
                          <a href="product-details.html" className="btn"><i className="flaticon-shopping-bag" />Add To Cart</a>
                        </div>
                      </div>
                      <div className="product__content">
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
                        <h4 className="title"><a href="product-details.html">Two Door Top Load Plastic Kennel &amp; Pet Carrier, Blue 19”</a></h4>
                        <h3 className="price">$18.00 <del>$33.00</del></h3>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html"><img src="petpal/assets/img/products/products_img05.jpg" alt="img" /></a>
                        <div className="product__action">
                          <a href="product-details.html"><i className="flaticon-love" /></a>
                          <a href="product-details.html"><i className="flaticon-loupe" /></a>
                          <a href="product-details.html"><i className="flaticon-exchange" /></a>
                        </div>
                        <div className="sale-wrap">
                          <span>New</span>
                        </div>
                        <div className="product__add-cart">
                          <a href="product-details.html" className="btn"><i className="flaticon-shopping-bag" />Add To Cart</a>
                        </div>
                      </div>
                      <div className="product__content">
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
                        <h4 className="title"><a href="product-details.html">The Kitten House with Mat Sleeping Bed House</a></h4>
                        <h3 className="price">$19.00 <del>$28.00</del></h3>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html"><img src="petpal/assets/img/products/products_img04.jpg" alt="img" /></a>
                        <div className="product__action">
                          <a href="product-details.html"><i className="flaticon-love" /></a>
                          <a href="product-details.html"><i className="flaticon-loupe" /></a>
                          <a href="product-details.html"><i className="flaticon-exchange" /></a>
                        </div>
                        <div className="sale-wrap sale-wrap-two">
                          <span>Sale!</span>
                        </div>
                        <div className="product__add-cart">
                          <a href="product-details.html" className="btn"><i className="flaticon-shopping-bag" />Add To Cart</a>
                        </div>
                      </div>
                      <div className="product__content">
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
                        <h4 className="title"><a href="product-details.html">Two Door Top Load Plastic Kennel &amp; Pet Carrier, Blue 19”</a></h4>
                        <h3 className="price">$18.00 <del>$33.00</del></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product__nav-wrap">
                <button className="product-button-prev"><i className="flaticon-left-chevron" /></button>
                <button className="product-button-next"><i className="flaticon-right-arrow-angle" /></button>
              </div>
            </div>
            <div className="tab-pane fade" id="sale-tab-pane" role="tabpanel" aria-labelledby="sale-tab" tabIndex={0}>
              <div className="swiper product-active">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html"><img src="petpal/assets/img/products/products_img01.jpg" alt="img" /></a>
                        <div className="product__action">
                          <a href="product-details.html"><i className="flaticon-love" /></a>
                          <a href="product-details.html"><i className="flaticon-loupe" /></a>
                          <a href="product-details.html"><i className="flaticon-exchange" /></a>
                        </div>
                        <div className="sale-wrap">
                          <span>New</span>
                        </div>
                        <div className="product__add-cart">
                          <a href="product-details.html" className="btn"><i className="flaticon-shopping-bag" />Add To Cart</a>
                        </div>
                      </div>
                      <div className="product__content">
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
                        <h4 className="title"><a href="product-details.html">Dog Harness-Neoprene Comfort Liner-Orange and ...</a></h4>
                        <h3 className="price">$12.00 <del>$25.00</del></h3>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html"><img src="petpal/assets/img/products/products_img02.jpg" alt="img" /></a>
                        <div className="product__action">
                          <a href="product-details.html"><i className="flaticon-love" /></a>
                          <a href="product-details.html"><i className="flaticon-loupe" /></a>
                          <a href="product-details.html"><i className="flaticon-exchange" /></a>
                        </div>
                        <div className="sale-wrap sale-wrap-two">
                          <span>Sale!</span>
                        </div>
                        <div className="product__add-cart">
                          <a href="product-details.html" className="btn"><i className="flaticon-shopping-bag" />Add To Cart</a>
                        </div>
                      </div>
                      <div className="product__content">
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
                        <h4 className="title"><a href="product-details.html">Arm &amp; Hammer Super Deodori zing Dog Shampoo, Pet Wash</a></h4>
                        <h3 className="price">$20.00 <del>$30.00</del></h3>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html"><img src="petpal/assets/img/products/products_img03.jpg" alt="img" /></a>
                        <div className="product__action">
                          <a href="product-details.html"><i className="flaticon-love" /></a>
                          <a href="product-details.html"><i className="flaticon-loupe" /></a>
                          <a href="product-details.html"><i className="flaticon-exchange" /></a>
                        </div>
                        <div className="product__add-cart">
                          <a href="product-details.html" className="btn"><i className="flaticon-shopping-bag" />Add To Cart</a>
                        </div>
                      </div>
                      <div className="product__content">
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
                        <h4 className="title"><a href="product-details.html">Milk-Bone Brushing Chews Daily Dental Dog Treats ...</a></h4>
                        <h3 className="price">$36.00 <del>$56.00</del></h3>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html"><img src="petpal/assets/img/products/products_img04.jpg" alt="img" /></a>
                        <div className="product__action">
                          <a href="product-details.html"><i className="flaticon-love" /></a>
                          <a href="product-details.html"><i className="flaticon-loupe" /></a>
                          <a href="product-details.html"><i className="flaticon-exchange" /></a>
                        </div>
                        <div className="sale-wrap sale-wrap-two">
                          <span>Sale!</span>
                        </div>
                        <div className="product__add-cart">
                          <a href="product-details.html" className="btn"><i className="flaticon-shopping-bag" />Add To Cart</a>
                        </div>
                      </div>
                      <div className="product__content">
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
                        <h4 className="title"><a href="product-details.html">Two Door Top Load Plastic Kennel &amp; Pet Carrier, Blue 19”</a></h4>
                        <h3 className="price">$18.00 <del>$33.00</del></h3>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html"><img src="petpal/assets/img/products/products_img05.jpg" alt="img" /></a>
                        <div className="product__action">
                          <a href="product-details.html"><i className="flaticon-love" /></a>
                          <a href="product-details.html"><i className="flaticon-loupe" /></a>
                          <a href="product-details.html"><i className="flaticon-exchange" /></a>
                        </div>
                        <div className="sale-wrap">
                          <span>New</span>
                        </div>
                        <div className="product__add-cart">
                          <a href="product-details.html" className="btn"><i className="flaticon-shopping-bag" />Add To Cart</a>
                        </div>
                      </div>
                      <div className="product__content">
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
                        <h4 className="title"><a href="product-details.html">The Kitten House with Mat Sleeping Bed House</a></h4>
                        <h3 className="price">$19.00 <del>$28.00</del></h3>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html"><img src="petpal/assets/img/products/products_img04.jpg" alt="img" /></a>
                        <div className="product__action">
                          <a href="product-details.html"><i className="flaticon-love" /></a>
                          <a href="product-details.html"><i className="flaticon-loupe" /></a>
                          <a href="product-details.html"><i className="flaticon-exchange" /></a>
                        </div>
                        <div className="sale-wrap sale-wrap-two">
                          <span>Sale!</span>
                        </div>
                        <div className="product__add-cart">
                          <a href="product-details.html" className="btn"><i className="flaticon-shopping-bag" />Add To Cart</a>
                        </div>
                      </div>
                      <div className="product__content">
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
                        <h4 className="title"><a href="product-details.html">Two Door Top Load Plastic Kennel &amp; Pet Carrier, Blue 19”</a></h4>
                        <h3 className="price">$18.00 <del>$33.00</del></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product__nav-wrap">
                <button className="product-button-prev"><i className="flaticon-left-chevron" /></button>
                <button className="product-button-next"><i className="flaticon-right-arrow-angle" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* product-area-end */}
  {/* category-area */}
  <section className="category__area">
    <div className="container">
      <div className="row align-tiems-center">
        <div className="col-md-8">
          <div className="section__title-two mb-30">
            <h2 className="title">Shop by Category <img src="petpal/assets/img/images/title_shape.svg" alt className="injectable" /></h2>
          </div>
        </div>
        <div className="col-md-4">
          <div className="view-all-btn">
            <a href="product.html">See All Categories <i className="flaticon-right-arrow-angle" /></a>
          </div>
        </div>
      </div>
      <div className="row row-cols-2 row-cols-lg-6 row-cols-md-4 row-cols-sm-3 justify-content-center">
        <div className="col">
          <div className="category__item">
            <a href="product.html">
              <img src="petpal/assets/img/category/category_img01.png" alt />
              <span className="name">Beds</span>
              <strong>15 Items</strong>
            </a>
          </div>
        </div>
        <div className="col">
          <div className="category__item">
            <a href="product.html">
              <img src="petpal/assets/img/category/category_img02.png" alt />
              <span className="name">Pet Toys</span>
              <strong>10 Items</strong>
            </a>
          </div>
        </div>
        <div className="col">
          <div className="category__item">
            <a href="product.html">
              <img src="petpal/assets/img/category/category_img03.png" alt />
              <span className="name">Dog Food</span>
              <strong>19 Items</strong>
            </a>
          </div>
        </div>
        <div className="col">
          <div className="category__item">
            <a href="product.html">
              <img src="petpal/assets/img/category/category_img04.png" alt />
              <span className="name">Cat Food</span>
              <strong>15 Items</strong>
            </a>
          </div>
        </div>
        <div className="col">
          <div className="category__item">
            <a href="product.html">
              <img src="petpal/assets/img/category/category_img05.png" alt />
              <span className="name">Pharmacy</span>
              <strong>30 Items</strong>
            </a>
          </div>
        </div>
        <div className="col">
          <div className="category__item">
            <a href="product.html">
              <img src="petpal/assets/img/category/category_img06.png" alt />
              <span className="name">Accessories</span>
              <strong>22 Items</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* category-area-end */}
  {/* ad-banner-area */}
  <div className="ad-banner-area pb-80">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="ad-banner-img">
            <a href="#">
              <img src="petpal/assets/img/images/advertisement.jpg" alt="img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ad-banner-area-end */}
  {/* product-area-two */}
  <section className="product__area-two">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-8">
          <div className="section__title-two mb-20">
            <h2 className="title">Hot Sale Products <img src="petpal/assets/img/images/title_shape.svg" alt className="injectable" /></h2>
          </div>
        </div>
        <div className="col-md-4">
          <div className="coming-time-wrap">
            <div className="coming-time" data-countdown="2024/4/30" />
          </div>
        </div>
      </div>
    </div>
    <div className="container custom-container-two">
      <div className="product__item-wrap-two">
        <div className="row gutter-20 row-cols-1 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center">
          <div className="col">
            <div className="product__item">
              <div className="product__thumb">
                <a href="product-details.html"><img src="petpal/assets/img/products/products_img06.jpg" alt="img" /></a>
                <div className="product__action">
                  <a href="product-details.html"><i className="flaticon-love" /></a>
                  <a href="product-details.html"><i className="flaticon-loupe" /></a>
                  <a href="product-details.html"><i className="flaticon-exchange" /></a>
                </div>
                <div className="sale-wrap sale-wrap-two">
                  <span>Sale!</span>
                </div>
                <div className="product__add-cart">
                  <a href="product-details.html" className="btn"><i className="flaticon-shopping-bag" />Add To Cart</a>
                </div>
              </div>
              <div className="product__content">
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
                <h4 className="title"><a href="product-details.html">Dog Puzzle Toys, Squeaky Treat Dispensing Dog</a></h4>
                <h3 className="price">$18.00 <del>$33.00</del></h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="product__item">
              <div className="product__thumb">
                <a href="product-details.html"><img src="petpal/assets/img/products/products_img07.jpg" alt="img" /></a>
                <div className="product__action">
                  <a href="product-details.html"><i className="flaticon-love" /></a>
                  <a href="product-details.html"><i className="flaticon-loupe" /></a>
                  <a href="product-details.html"><i className="flaticon-exchange" /></a>
                </div>
                <div className="sale-wrap sale-wrap-two">
                  <span>Sale!</span>
                </div>
                <div className="product__add-cart">
                  <a href="product-details.html" className="btn"><i className="flaticon-shopping-bag" />Add To Cart</a>
                </div>
              </div>
              <div className="product__content">
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
                <h4 className="title"><a href="product-details.html">Zesty Paws Calming Puppy Bites Stress Relief for Dogs, 60 Count</a></h4>
                <h3 className="price">$16.00 <del>$50.00</del></h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="product__item">
              <div className="product__thumb">
                <a href="product-details.html"><img src="petpal/assets/img/products/products_img08.jpg" alt="img" /></a>
                <div className="product__action">
                  <a href="product-details.html"><i className="flaticon-love" /></a>
                  <a href="product-details.html"><i className="flaticon-loupe" /></a>
                  <a href="product-details.html"><i className="flaticon-exchange" /></a>
                </div>
                <div className="sale-wrap sale-wrap-two">
                  <span>Sale!</span>
                </div>
                <div className="product__add-cart">
                  <a href="product-details.html" className="btn"><i className="flaticon-shopping-bag" />Add To Cart</a>
                </div>
              </div>
              <div className="product__content">
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
                <h4 className="title"><a href="product-details.html">Hartz Groomer's Best Extra Gentle Puppy Shampoo, 18oz.</a></h4>
                <h3 className="price">$30.00 <del>$88.00</del></h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="product__item">
              <div className="product__thumb">
                <a href="product-details.html"><img src="petpal/assets/img/products/products_img09.jpg" alt="img" /></a>
                <div className="product__action">
                  <a href="product-details.html"><i className="flaticon-love" /></a>
                  <a href="product-details.html"><i className="flaticon-loupe" /></a>
                  <a href="product-details.html"><i className="flaticon-exchange" /></a>
                </div>
                <div className="sale-wrap sale-wrap-two">
                  <span>Sale!</span>
                </div>
                <div className="product__add-cart">
                  <a href="product-details.html" className="btn"><i className="flaticon-shopping-bag" />Add To Cart</a>
                </div>
              </div>
              <div className="product__content">
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
                <h4 className="title"><a href="product-details.html">The Kitten House with Mat Sleeping Bed House</a></h4>
                <h3 className="price">$22.00 <del>$59.00</del></h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="product__item">
              <div className="product__thumb">
                <a href="product-details.html"><img src="petpal/assets/img/products/products_img10.jpg" alt="img" /></a>
                <div className="product__action">
                  <a href="product-details.html"><i className="flaticon-love" /></a>
                  <a href="product-details.html"><i className="flaticon-loupe" /></a>
                  <a href="product-details.html"><i className="flaticon-exchange" /></a>
                </div>
                <div className="sale-wrap sale-wrap-two">
                  <span>Sale!</span>
                </div>
                <div className="product__add-cart">
                  <a href="product-details.html" className="btn"><i className="flaticon-shopping-bag" />Add To Cart</a>
                </div>
              </div>
              <div className="product__content">
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
                <h4 className="title"><a href="product-details.html">Dog Harness-Neoprene
                    Comfort Liner-Orange and Comfort</a></h4>
                <h3 className="price">$11.00 <del>$48.00</del></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="product__shape-wrap">
      <img src="petpal/assets/img/products/products_shape01.png" alt="shape" className="ribbonRotate" />
      <img src="petpal/assets/img/products/products_shape02.png" alt="shape" data-aos="fade-up-right" data-aos-delay={400} />
    </div>
  </section>
  {/* product-area-two-end */}
  {/* features-area */}
  <section className="features__area-two">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="features__item-two">
            <div className="features__thumb">
              <img src="petpal/assets/img/images/features_img01.jpg" alt="img" />
            </div>
            <div className="features__content-two">
              <h2 className="title">30% <span>Sale!</span></h2>
              <strong>Free Shipping</strong>
              <a href="product.html" className="btn shop-btn">Shop Now <img src="petpal/assets/img/icon/right_arrow.svg" alt className="injectable" /></a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="features__item-two">
            <div className="features__thumb">
              <img src="petpal/assets/img/images/features_img02.jpg" alt="img" />
            </div>
            <div className="features__content-two features__content-three">
              <h2 className="title">Best Premium</h2>
              <strong>Cat Food</strong>
              <a href="product.html" className="btn shop-btn">Shop Now <img src="petpal/assets/img/icon/right_arrow.svg" alt className="injectable" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* features-area-end */}
  {/* product-area */}
  <section className="product__area-three">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="product__inner-wrap">
            <div className="row align-items-center">
              <div className="col-sm-8">
                <div className="section__title-two mb-20">
                  <h2 className="title">Hot Sale Products <img src="petpal/assets/img/images/title_shape.svg" alt className="injectable" /></h2>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="view-all-btn">
                  <a href="product.html">See All <i className="flaticon-right-arrow-angle" /></a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-md-6">
                <div className="product__item product__item-two">
                  <div className="product__thumb product__thumb-two">
                    <a href="product-details.html"><img src="petpal/assets/img/products/h_products_img01.jpg" alt="img" /></a>
                    <div className="sale-wrap">
                      <span>New</span>
                    </div>
                  </div>
                  <div className="product__content">
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
                    <h4 className="title"><a href="product-details.html">IAMS Minichunks Chicken &amp; Whole Grains Dry Dog Food fo</a></h4>
                    <h3 className="price">$11.00 <del>$48.00</del></h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-6">
                <div className="product__item-three">
                  <div className="product__thumb-three">
                    <a href="product-details.html"><img src="petpal/assets/img/products/latest_products_img01.jpg" alt="img" /></a>
                  </div>
                  <div className="product__content product__content-three">
                    <h2 className="title"><a href="product-details.html">TrustyPup Dragon Squeaky Plush Chew ..</a></h2>
                    <h3 className="price">$47.00 <del>$82.00</del></h3>
                  </div>
                </div>
                <div className="product__item-three">
                  <div className="product__thumb-three">
                    <a href="product-details.html"><img src="petpal/assets/img/products/latest_products_img02.jpg" alt="img" /></a>
                  </div>
                  <div className="product__content product__content-three">
                    <h2 className="title"><a href="product-details.html">Vital Pet Life Salmon Oil for Dogs and Cat</a></h2>
                    <h3 className="price">$12.00</h3>
                  </div>
                </div>
                <div className="product__item-three">
                  <div className="product__thumb-three">
                    <a href="product-details.html"><img src="petpal/assets/img/products/latest_products_img03.jpg" alt="img" /></a>
                  </div>
                  <div className="product__content product__content-three">
                    <h2 className="title"><a href="product-details.html">Dog HarnesNeoprene
                        Comfort Liner...</a></h2>
                    <h3 className="price">$30.00 <del>$48.00</del></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="product__inner-wrap">
            <div className="row align-items-center">
              <div className="col-sm-8">
                <div className="section__title-two mb-20">
                  <h2 className="title">Latest Products <img src="petpal/assets/img/images/title_shape.svg" alt className="injectable" /></h2>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="view-all-btn">
                  <a href="product.html">See All <i className="flaticon-right-arrow-angle" /></a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-md-6">
                <div className="product__item product__item-two">
                  <div className="product__thumb product__thumb-two">
                    <a href="product-details.html"><img src="petpal/assets/img/products/h_products_img02.jpg" alt="img" /></a>
                    <div className="sale-wrap sale-wrap-two">
                      <span>Sale!</span>
                    </div>
                  </div>
                  <div className="product__content">
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
                    <h4 className="title"><a href="product-details.html">Pro-Sense Multivitamin, 90ct For your Lovely Dog</a></h4>
                    <h3 className="price">$15.00 <del>$28.00</del></h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-6">
                <div className="product__item-three">
                  <div className="product__thumb-three">
                    <a href="product-details.html"><img src="petpal/assets/img/products/latest_products_img04.jpg" alt="img" /></a>
                  </div>
                  <div className="product__content product__content-three">
                    <h2 className="title"><a href="product-details.html">Pet Grooming Glove for Dogs &amp; Cats ...</a></h2>
                    <h3 className="price">$12.00 <del>$20.00</del></h3>
                  </div>
                </div>
                <div className="product__item-three">
                  <div className="product__thumb-three">
                    <a href="product-details.html"><img src="petpal/assets/img/products/latest_products_img05.jpg" alt="img" /></a>
                  </div>
                  <div className="product__content product__content-three">
                    <h2 className="title"><a href="product-details.html">Beloved Pets For Playing Toy</a></h2>
                    <h3 className="price">$25.00</h3>
                  </div>
                </div>
                <div className="product__item-three">
                  <div className="product__thumb-three">
                    <a href="product-details.html"><img src="petpal/assets/img/products/latest_products_img06.jpg" alt="img" /></a>
                  </div>
                  <div className="product__content product__content-three">
                    <h2 className="title"><a href="product-details.html">Zesty Paws Calming Puppy Bites ...</a></h2>
                    <h3 className="price">$45.00 <del>$80.00</del></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* product-area-end */}
  {/* testimonial-area */}
  <section className="testimonial__area-four">
    <div className="container">
      <div className="testimonial__item-wrap-four">
        <div className="swiper testimonial-active-two">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial__item-four">
                <div className="testimonial__icon-four">
                  <img src="petpal/assets/img/icon/quote02.svg" alt className="injectable" />
                </div>
                <div className="testimonial__content-four">
                  <h2 className="title">Pet Health Important</h2>
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <p>“ Duis aute irure dolor in repreerit in voluptate velitesse We understand that your furry aute irure dolor in repreerit in voluptate just about the best thing you can do. dolor in repreerit in voluptate understand that you ”</p>
                </div>
                <div className="testimonial__author-two testimonial__author-four">
                  <div className="testimonial__author-thumb">
                    <img src="petpal/assets/img/images/testi_author01.png" alt />
                  </div>
                  <div className="testimonial__author-content">
                    <h4 className="title">Uraney Jacke</h4>
                    <span>Business Study</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial__item-four">
                <div className="testimonial__icon-four">
                  <img src="petpal/assets/img/icon/quote02.svg" alt className="injectable" />
                </div>
                <div className="testimonial__content-four">
                  <h2 className="title">Pet Health Important</h2>
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <p>“ Duis aute irure dolor in repreerit in voluptate velitesse We understand that your furry aute irure dolor in repreerit in voluptate just about the best thing you can do. dolor in repreerit in voluptate understand that you ”</p>
                </div>
                <div className="testimonial__author-two testimonial__author-four">
                  <div className="testimonial__author-thumb">
                    <img src="petpal/assets/img/images/testi_author01.png" alt />
                  </div>
                  <div className="testimonial__author-content">
                    <h4 className="title">Uraney Jacke</h4>
                    <span>Business Study</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial__nav-wrap">
          <button className="testimonial-button-prev"><img src="petpal/assets/img/icon/right_arrow03.svg" alt className="injectable" /></button>
          <button className="testimonial-button-next"><img src="petpal/assets/img/icon/right_arrow03.svg" alt className="injectable" /></button>
        </div>
      </div>
    </div>
  </section>
  {/* testimonial-area-end */}
  {/* brand-area */}
  <div className="brand__area-four">
    <div className="container">
      <div className="brand__title">
        <h5 className="title">Trusted By The World’s Best</h5>
      </div>
      <div className="swiper brand-active">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="brand__item brand__item-two">
              <img src="petpal/assets/img/brand/h2_brand_img01.png" alt="img" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="brand__item brand__item-two">
              <img src="petpal/assets/img/brand/h2_brand_img02.png" alt="img" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="brand__item brand__item-two">
              <img src="petpal/assets/img/brand/h2_brand_img03.png" alt="img" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="brand__item brand__item-two">
              <img src="petpal/assets/img/brand/h2_brand_img04.png" alt="img" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="brand__item brand__item-two">
              <img src="petpal/assets/img/brand/h2_brand_img05.png" alt="img" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="brand__item brand__item-two">
              <img src="petpal/assets/img/brand/h2_brand_img06.png" alt="img" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="brand__item brand__item-two">
              <img src="petpal/assets/img/brand/h2_brand_img07.png" alt="img" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="brand__item brand__item-two">
              <img src="petpal/assets/img/brand/h2_brand_img03.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* brand-area-end */}
  {/* blog-post-area */}
  <section className="blog__post-area-four">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-8">
          <div className="section__title-two mb-20">
            <h2 className="title">Latest News &amp; Updates <img src="petpal/assets/img/images/title_shape.svg" alt className="injectable" />
            </h2>
          </div>
        </div>
        <div className="col-md-4">
          <div className="view-all-btn">
            <a href="blog.html">See All <i className="flaticon-right-arrow-angle" /></a>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="blog__post-item-four shine-animate-item">
            <div className="blog__post-thumb-four shine-animate">
              <a href="blog-details.html"><img src="petpal/assets/img/blog/h4_blog_post01.jpg" alt="img" /></a>
              <ul className="list-wrap blog__post-tag blog__post-tag-three">
                <li><a href="blog.html">Pet</a></li>
              </ul>
            </div>
            <div className="blog__post-content-four">
              <div className="blog__post-meta">
                <ul className="list-wrap">
                  <li><i className="flaticon-calendar" />25th Aug</li>
                  <li><i className="flaticon-user" />by <a href="blog-details.html">admin</a></li>
                </ul>
              </div>
              <h2 className="title"><a href="blog-details.html">10 Things You Didn’t Know about The Shinese</a></h2>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="blog__post-item-four shine-animate-item">
            <div className="blog__post-thumb-four shine-animate">
              <a href="blog-details.html"><img src="petpal/assets/img/blog/h4_blog_post02.jpg" alt="img" /></a>
              <ul className="list-wrap blog__post-tag blog__post-tag-three">
                <li><a href="blog.html">Care</a></li>
              </ul>
            </div>
            <div className="blog__post-content-four">
              <div className="blog__post-meta">
                <ul className="list-wrap">
                  <li><i className="flaticon-calendar" />25th Aug</li>
                  <li><i className="flaticon-user" />by <a href="blog-details.html">admin</a></li>
                </ul>
              </div>
              <h2 className="title"><a href="blog-details.html">A Complete Price Guide for the Shar Pei Breed</a></h2>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="blog__post-item-four shine-animate-item">
            <div className="blog__post-thumb-four shine-animate">
              <a href="blog-details.html"><img src="petpal/assets/img/blog/h4_blog_post03.jpg" alt="img" /></a>
              <ul className="list-wrap blog__post-tag blog__post-tag-three">
                <li><a href="blog.html">Pet Health</a></li>
              </ul>
            </div>
            <div className="blog__post-content-four">
              <div className="blog__post-meta">
                <ul className="list-wrap">
                  <li><i className="flaticon-calendar" />25th Aug</li>
                  <li><i className="flaticon-user" />by <a href="blog-details.html">admin</a></li>
                </ul>
              </div>
              <h2 className="title"><a href="blog-details.html">Comparing the Blue vs. Lilac French Bulldog</a></h2>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="blog__post-item-four shine-animate-item">
            <div className="blog__post-thumb-four shine-animate">
              <a href="blog-details.html"><img src="petpal/assets/img/blog/h4_blog_post04.jpg" alt="img" /></a>
              <ul className="list-wrap blog__post-tag blog__post-tag-three">
                <li><a href="blog.html">Cat</a></li>
              </ul>
            </div>
            <div className="blog__post-content-four">
              <div className="blog__post-meta">
                <ul className="list-wrap">
                  <li><i className="flaticon-calendar" />25th Aug</li>
                  <li><i className="flaticon-user" />by <a href="blog-details.html">admin</a></li>
                </ul>
              </div>
              <h2 className="title"><a href="blog-details.html">Five Things You Didn’t Know about the Red</a></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="blog__shape-wrap-four">
      <img src="petpal/assets/img/blog/h4_blog_shape01.png" alt="img" data-aos="fade-down-left" data-aos-delay={400} />
      <img src="petpal/assets/img/blog/h4_blog_shape02.png" alt="img" data-aos="fade-up-right" data-aos-delay={400} />
    </div>
  </section>
  {/* blog-post-area-end */}
</main>
<Footer/>
        </>
    )
}
export default PetWoocommerce