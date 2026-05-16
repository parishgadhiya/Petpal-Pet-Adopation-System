import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/navbar";
import Footer from "../components/footer";
function PetAdopt() {
  return (
    <>
      <Nav />
      <main className="fix">
        {/* banner-area */}
        <section
          className="banner__area-three banner__bg-three"
          data-background="petpal/assets/img/banner/h3_banner_bg.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-10">
                <div className="banner__content-three">
                  <span className="sub-title" data-aos="fade-up">
                    Find your new pet from our animal shelters.
                  </span>
                  <h2 className="title" data-aos="fade-up" data-aos-delay={400}>
                    Adopt Your Pretty{" "}
                    <img
                      src="petpal/assets/img/banner/h3_banner_title_img.png"
                      alt
                    />
                    Friend
                  </h2>
                  <div
                    className="banner__search-wrap-two"
                    data-aos="fade-up"
                    data-aos-delay={600}
                  >
                    <form action="#" className="banner__search-form-two">
                      <div className="select-grp">
                        <label>
                          <i className="flaticon-placeholder" />
                        </label>
                        <select name="location" className="orderby">
                          <option value="Select Location">
                            Select Location
                          </option>
                          <option value="NewYork City">NewYork City</option>
                          <option value="Carolina City">Carolina City</option>
                          <option value="California City">
                            California City
                          </option>
                          <option value="Downtown City">Downtown City</option>
                          <option value="Kansas City">Kansas City</option>
                        </select>
                      </div>
                      <div className="form-grp">
                        <input
                          type="text"
                          placeholder="What are you looking for . . ."
                        />
                        <button type="submit">
                          Search
                          <i className="flaticon-loupe" />
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    className="banner__pet-wrap"
                    data-aos="fade-up"
                    data-aos-delay={800}
                  >
                    <ul className="list-wrap">
                      <li>
                        <div className="icon">
                          <i className="flaticon-dog" />
                        </div>
                        <div className="content">
                          <h6 className="title">
                            Dogs <span>(2,590)</span>
                          </h6>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="flaticon-cat-face" />
                        </div>
                        <div className="content">
                          <h6 className="title">
                            Cats <span>(1,217)</span>
                          </h6>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="flaticon-paw" />
                        </div>
                        <div className="content">
                          <h6 className="title">
                            Others Pet <span>(1,120)</span>
                          </h6>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="banner__img-three">
                  <img
                    src="petpal/assets/img/banner/h3_banner_img.png"
                    alt="img"
                    data-aos="fade-left"
                    data-aos-delay={1000}
                  />
                  <img
                    src="petpal/assets/img/banner/h3_banner_img_shape.png"
                    alt="shape"
                    className="shape-one"
                    data-aos="fade-up"
                    data-aos-delay={800}
                  />
                  <img
                    src="petpal/assets/img/banner/h3_banner_shape02.png"
                    alt="shape"
                    className="shape-two ribbonRotate"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="banner__shape-wrap-three">
            <img
              src="petpal/assets/img/banner/h3_banner_shape01.png"
              alt="shape"
              data-aos="fade-down-right"
              data-aos-delay={600}
            />
          </div>
        </section>
        {/* banner-area-end */}
        {/* about-area */}
        <section className="about__area-three">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-7">
                <div className="about__img-three">
                  <img
                    src="petpal/assets/img/images/h3_about_img01.png"
                    alt="img"
                  />
                  <div
                    className="customer__review customer__review-two"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <div className="customer__review-img">
                      <ul className="list-wrap">
                        <li>
                          <img
                            src="petpal/assets/img/images/author_01.png"
                            alt
                          />
                        </li>
                        <li>
                          <img
                            src="petpal/assets/img/images/author_02.png"
                            alt
                          />
                        </li>
                        <li>
                          <img
                            src="petpal/assets/img/images/author_03.png"
                            alt
                          />
                        </li>
                        <li>
                          <img
                            src="petpal/assets/img/images/author_04.png"
                            alt
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="customer__review-content">
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span>4.7 (1,567 Reviews)</span>
                    </div>
                  </div>
                  <div
                    className="healthy-pets healthy-pets-two"
                    data-aos="zoom-in"
                    data-aos-delay={400}
                  >
                    <div className="icon">
                      <img
                        src="petpal/assets/img/icon/pet_icon01.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                    <div className="content">
                      <h6 className="circle rotateme">
                        BETTER - HEALTHY - PETS - LOVE -
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-5 order-0 order-lg-3">
                <div className="about__video-wrap">
                  <img
                    src="petpal/assets/img/images/h3_about_img02.png"
                    alt="img"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=XdFfCPK5ycw"
                    className="popup-video play-btn"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="about__content-three">
                  <div className="section__title mb-10">
                    <span className="sub-title">
                      WE LOVE OUR JOB!
                      <strong className="shake">
                        <img
                          src="petpal/assets/img/icon/pet_icon02.svg"
                          alt
                          className="injectable"
                        />
                      </strong>
                    </span>
                    <h2 className="title">Adopt Pets And Save Their Lives</h2>
                  </div>
                  <p>
                    We will work with you to develop individualised care plans
                    including management chronic diseases. We areommit ted to
                    being the network providing healthcare centered care that
                    inspires.
                  </p>
                  <a href="about.html" className="btn">
                    Contact With Us{" "}
                    <img
                      src="petpal/assets/img/icon/right_arrow.svg"
                      alt
                      className="injectable"
                    />
                  </a>
                  <div className="shape">
                    <img
                      src="petpal/assets/img/images/h3_about_shape.png"
                      alt="shape"
                      className="ribbonRotate"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about-area-end */}
        {/* brand-area */}
        <div className="brand__area-three">
          <div className="container">
            <div className="swiper brand-active-two">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="brand__item brand__item-two">
                    <img
                      src="petpal/assets/img/brand/h2_brand_img01.png"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__item brand__item-two">
                    <img
                      src="petpal/assets/img/brand/h2_brand_img02.png"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__item brand__item-two">
                    <img
                      src="petpal/assets/img/brand/h2_brand_img03.png"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__item brand__item-two">
                    <img
                      src="petpal/assets/img/brand/h2_brand_img04.png"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__item brand__item-two">
                    <img
                      src="petpal/assets/img/brand/h2_brand_img05.png"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__item brand__item-two">
                    <img
                      src="petpal/assets/img/brand/h2_brand_img06.png"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__item brand__item-two">
                    <img
                      src="petpal/assets/img/brand/h2_brand_img07.png"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__item brand__item-two">
                    <img
                      src="petpal/assets/img/brand/h2_brand_img03.png"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* brand-area-end */}
        {/* animal-area */}
        <section className="animal__area-two">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="section__title white-title text-center mb-40">
                  <h2 className="title">Available Pets For Adoption</h2>
                  <p>
                    We will work with you to develop individualised care plans,
                    including <br /> management chronic diseases.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                <div className="animal__item animal__item-two shine-animate-item">
                  <div className="animal__thumb animal__thumb-two shine-animate">
                    <a href="animal-details.html">
                      <img
                        src="petpal/assets/img/shop/shop_img01.jpg"
                        alt="img"
                      />
                    </a>
                    <a href="animal-details.html" className="wishlist">
                      <i className="flaticon-love" />
                    </a>
                  </div>
                  <div className="animal__content animal__content-two">
                    <h4 className="title">
                      <a href="animal-details.html">Cute French Bulldog</a>
                    </h4>
                    <div className="pet-info">
                      <ul className="list-wrap">
                        <li>
                          Gender: <span>Male</span>
                        </li>
                        <li>
                          Breed: <span>French</span>
                        </li>
                      </ul>
                    </div>
                    <div className="location">
                      <i className="flaticon-placeholder" />
                      <span>Bakersfield, California</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                <div className="animal__item animal__item-two shine-animate-item">
                  <div className="animal__thumb animal__thumb-two shine-animate">
                    <a href="animal-details.html">
                      <img
                        src="petpal/assets/img/shop/shop_img02.jpg"
                        alt="img"
                      />
                    </a>
                    <a href="animal-details.html" className="wishlist">
                      <i className="flaticon-love" />
                    </a>
                  </div>
                  <div className="animal__content animal__content-two">
                    <h4 className="title">
                      <a href="animal-details.html">purebred pussycat</a>
                    </h4>
                    <div className="pet-info">
                      <ul className="list-wrap">
                        <li>
                          Gender: <span>Female</span>
                        </li>
                        <li>
                          Breed: <span>Germany</span>
                        </li>
                      </ul>
                    </div>
                    <div className="location">
                      <i className="flaticon-placeholder" />
                      <span>Central Park, New York</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                <div className="animal__item animal__item-two shine-animate-item">
                  <div className="animal__thumb animal__thumb-two shine-animate">
                    <a href="animal-details.html">
                      <img
                        src="petpal/assets/img/shop/shop_img03.jpg"
                        alt="img"
                      />
                    </a>
                    <a href="animal-details.html" className="wishlist">
                      <i className="flaticon-love" />
                    </a>
                  </div>
                  <div className="animal__content animal__content-two">
                    <h4 className="title">
                      <a href="animal-details.html">Italian Rabbit</a>
                    </h4>
                    <div className="pet-info">
                      <ul className="list-wrap">
                        <li>
                          Gender: <span>Male</span>
                        </li>
                        <li>
                          Breed: <span>Italy</span>
                        </li>
                      </ul>
                    </div>
                    <div className="location">
                      <i className="flaticon-placeholder" />
                      <span>Birmingham, Alabama</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                <div className="animal__item animal__item-two shine-animate-item">
                  <div className="animal__thumb animal__thumb-two shine-animate">
                    <a href="animal-details.html">
                      <img
                        src="petpal/assets/img/shop/shop_img04.jpg"
                        alt="img"
                      />
                    </a>
                    <a href="animal-details.html" className="wishlist">
                      <i className="flaticon-love" />
                    </a>
                  </div>
                  <div className="animal__content animal__content-two">
                    <h4 className="title">
                      <a href="animal-details.html">Macaw Russian</a>
                    </h4>
                    <div className="pet-info">
                      <ul className="list-wrap">
                        <li>
                          Gender: <span>Male</span>
                        </li>
                        <li>
                          Breed: <span>Canada</span>
                        </li>
                      </ul>
                    </div>
                    <div className="location">
                      <i className="flaticon-placeholder" />
                      <span>Anchorage, Alaska</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="animal__shape-wrap">
            <img
              src="petpal/assets/img/images/adoption_shape01.png"
              alt="shape"
              className="rotateme"
            />
            <img
              src="petpal/assets/img/images/adoption_shape02.png"
              alt="shape"
              data-aos="fade-down-left"
              data-aos-delay={400}
            />
          </div>
        </section>
        {/* animal-area-end */}
        {/* choose-area */}
        <section className="choose__area">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="choose__img">
                  <img
                    src="petpal/assets/img/images/choose_img.png"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="choose__content">
                  <div className="section__title mb-15">
                    <span className="sub-title">
                      Why Choose Us
                      <strong className="shake">
                        <img
                          src="petpal/assets/img/icon/pet_icon02.svg"
                          alt
                          className="injectable"
                        />
                      </strong>
                    </span>
                    <h2 className="title">
                      We thrive on building a <br /> healthy community <br />{" "}
                      for all Pets.
                    </h2>
                  </div>
                  <p>
                    Duis aute irure dolor in reprehenderit in voWe care for the
                    growing needs of our community. We build systems for
                    providing health services for individuals, families and
                    populations.
                  </p>
                  <div className="why__list-box mb-30">
                    <ul className="list-wrap">
                      <li>
                        <div className="why__list-box-item">
                          <div className="why__list-box-item-top">
                            <div className="icon">
                              <img
                                src="petpal/assets/img/icon/check_icon.svg"
                                alt
                                className="injectable"
                              />
                            </div>
                            <h4 className="title">More Experience</h4>
                          </div>
                          <p>
                            Be confident in the treatment plan and your doctor’s
                            abilities.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="why__list-box-item">
                          <div className="why__list-box-item-top">
                            <div className="icon">
                              <img
                                src="petpal/assets/img/icon/check_icon.svg"
                                alt
                                className="injectable"
                              />
                            </div>
                            <h4 className="title">Affordable Pricing</h4>
                          </div>
                          <p>
                            Be confident in the treatment plan and your doctor’s
                            abilities.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <a href="contact.html" className="btn">
                    Contact With Us{" "}
                    <img
                      src="petpal/assets/img/icon/right_arrow.svg"
                      alt
                      className="injectable"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="choose__shape-wrap">
            <img
              src="petpal/assets/img/images/choose_shape01.png"
              alt="shape"
              className="ribbonRotate"
            />
            <img
              src="petpal/assets/img/images/choose_shape02.png"
              alt="shape"
              data-aos="fade-right"
              data-aos-delay={400}
            />
          </div>
        </section>
        {/* choose-area-end */}
        {/* discover-area */}
        <section className="discover__area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="section__title text-center mb-40">
                  <span className="sub-title">
                    Discover Our Cities
                    <strong className="shake">
                      <img
                        src="petpal/assets/img/icon/pet_icon02.svg"
                        alt
                        className="injectable"
                      />
                    </strong>
                  </span>
                  <h2 className="title">Find Pets by state or province</h2>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse <br /> amily and deserves ets are the best care.
                  </p>
                </div>
              </div>
            </div>
            <div className="row gutter-24">
              <div className="col-lg-6">
                <div className="discover__item">
                  <div className="discover__item-img">
                    <img
                      src="petpal/assets/img/images/discover_img01.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="discover__item-content">
                    <h2 className="title">
                      <a href="contact.html">newyork City</a>
                    </h2>
                    <span>50 Pets</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="discover__item">
                  <div className="discover__item-img">
                    <img
                      src="petpal/assets/img/images/discover_img02.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="discover__item-content">
                    <h2 className="title">
                      <a href="contact.html">Carolina City</a>
                    </h2>
                    <span>19 Pets</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="discover__item">
                  <div className="discover__item-img">
                    <img
                      src="petpal/assets/img/images/discover_img03.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="discover__item-content">
                    <h2 className="title">
                      <a href="contact.html">california City</a>
                    </h2>
                    <span>22 Pets</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="discover__item">
                  <div className="discover__item-img">
                    <img
                      src="petpal/assets/img/images/discover_img04.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="discover__item-content">
                    <h2 className="title">
                      <a href="contact.html">downtown City</a>
                    </h2>
                    <span>10 Pets</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="discover__item">
                  <div className="discover__item-img">
                    <img
                      src="petpal/assets/img/images/discover_img05.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="discover__item-content">
                    <h2 className="title">
                      <a href="contact.html">Kansas City</a>
                    </h2>
                    <span>20 Pets</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="discover__shape">
            <img
              src="petpal/assets/img/images/discover_shape.png"
              alt="shape"
              className="ribbonRotate"
            />
          </div>
        </section>
        {/* discover-area-end */}
        {/* cta-area */}
        <section className="cta__area fix">
          <div className="container">
            <div className="row align-items-end justify-content-center">
              <div className="col-lg-7">
                <div className="cta__content">
                  <h2 className="title">
                    Pets are not just animals, they are a part of your family
                  </h2>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse We understand that your furry friend is a treasured
                    membee.
                  </p>
                  <a href="about.html" className="btn">
                    Read More{" "}
                    <img
                      src="petpal/assets/img/icon/right_arrow.svg"
                      alt
                      className="injectable"
                    />
                  </a>
                  <div className="shape">
                    <img
                      src="petpal/assets/img/images/cta_shape01.png"
                      alt="shape"
                      data-aos="fade-up-right"
                      data-aos-delay={400}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-8">
                <div className="cta__img">
                  <img src="petpal/assets/img/images/cta_img.png" alt="img" />
                  <div className="cta__img-shape">
                    <img
                      src="petpal/assets/img/images/cta_shape02.png"
                      alt="shape"
                      data-aos="fade-down-left"
                      data-aos-delay={400}
                    />
                    <img
                      src="petpal/assets/img/images/cta_shape03.png"
                      alt="shape"
                      data-aos="fade-up"
                      data-aos-delay={800}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* cta-area-end */}
        {/* testimonial-area */}
        <section className="testimonial__area-three">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-10">
                <div className="testimonial__img-two">
                  <div className="testimonial__img-mask-two">
                    <img
                      src="petpal/assets/img/images/h3_testimonial_img.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="review__box review__box-two">
                    <div className="review__box-shape">
                      <img
                        src="petpal/assets/img/images/review_shape.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                    <div className="review__box-content">
                      <img
                        src="petpal/assets/img/icon/star.svg"
                        alt
                        className="injectable"
                      />
                      <h2 className="title">1500+</h2>
                      <span>Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="testimonial__content-three">
                  <div className="section__title mb-40">
                    <span className="sub-title">
                      Testimonials
                      <strong className="shake">
                        <img
                          src="petpal/assets/img/icon/pet_icon02.svg"
                          alt
                          className="injectable"
                        />
                      </strong>
                    </span>
                    <h2 className="title">
                      Don't Just Take it From Us, <br /> Hear What Our Clients
                      Say:
                    </h2>
                  </div>
                  <div className="swiper testimonial-active-three">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="testimonial__item-three">
                          <div className="testimonial__item-three-top">
                            <div className="testimonial__author-three">
                              <img
                                src="petpal/assets/img/images/h3_testi_author01.png"
                                alt="img"
                              />
                            </div>
                            <div className="content">
                              <p>
                                “ Duis aute irure dolor in repreerit in
                                voluptate velitesse We understand that your
                                irure dolor in repreerit in voluptate just about
                                you ”
                              </p>
                            </div>
                          </div>
                          <div className="testimonial__item-three-bottom">
                            <div className="testimonial__icon-three">
                              <img
                                src="petpal/assets/img/icon/quote.svg"
                                alt
                                className="injectable"
                              />
                            </div>
                            <div className="testimonial__author-info">
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                              <h4 className="title">Brooklyn Simon</h4>
                              <span>Designer</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial__item-three">
                          <div className="testimonial__item-three-top">
                            <div className="testimonial__author-three">
                              <img
                                src="petpal/assets/img/images/h3_testi_author01.png"
                                alt="img"
                              />
                            </div>
                            <div className="content">
                              <p>
                                “ Duis aute irure dolor in repreerit in
                                voluptate velitesse We understand that your
                                irure dolor in repreerit in voluptate just about
                                you ”
                              </p>
                            </div>
                          </div>
                          <div className="testimonial__item-three-bottom">
                            <div className="testimonial__icon-three">
                              <img
                                src="petpal/assets/img/icon/quote.svg"
                                alt
                                className="injectable"
                              />
                            </div>
                            <div className="testimonial__author-info">
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                              <h4 className="title">Brooklyn Simon</h4>
                              <span>Designer</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial__nav-wrap-two">
                    <button className="testimonial-button-prev">
                      <img
                        src="petpal/assets/img/icon/right_arrow03.svg"
                        alt
                        className="injectable"
                      />
                    </button>
                    <button className="testimonial-button-next">
                      <img
                        src="petpal/assets/img/icon/right_arrow03.svg"
                        alt
                        className="injectable"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial__shape-wrap-three">
            <img
              src="petpal/assets/img/images/h3_testimonial_shape.png"
              alt="shape"
              data-aos="fade-down-left"
              data-aos-delay={400}
            />
          </div>
        </section>
        {/* testimonial-area-end */}
        {/* blog-post-area */}
        <section className="blog__post-area-three">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section__title mb-40">
                  <span className="sub-title">
                    News &amp; Blogs
                    <strong className="shake">
                      <img
                        src="petpal/assets/img/icon/pet_icon02.svg"
                        alt
                        className="injectable"
                      />
                    </strong>
                  </span>
                  <h2 className="title">Our Recent Articles</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="view__all-btn text-end mb-40">
                  <a href="blog.html" className="btn">
                    See All Posts{" "}
                    <img
                      src="petpal/assets/img/icon/right_arrow.svg"
                      alt
                      className="injectable"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="blog__post-item-three shine-animate-item">
                  <div className="blog__post-thumb-three shine-animate">
                    <a href="blog-details.html">
                      <img
                        src="petpal/assets/img/blog/h2_blog_post01.jpg"
                        alt="img"
                      />
                    </a>
                    <ul className="list-wrap blog__post-tag blog__post-tag-two">
                      <li>
                        <a href="blog.html">Pet</a>
                      </li>
                      <li>
                        <a href="blog.html">Medical</a>
                      </li>
                    </ul>
                  </div>
                  <div className="blog__post-content-three">
                    <div className="blog__post-meta">
                      <ul className="list-wrap">
                        <li>
                          <i className="flaticon-calendar" />
                          25th Aug, 2024
                        </li>
                        <li>
                          <i className="flaticon-user" />
                          by <a href="blog-details.html">admin</a>
                        </li>
                      </ul>
                    </div>
                    <h2 className="title">
                      <a href="blog-details.html">
                        Understanding Zoonotic and Safeguarding Your Health
                      </a>
                    </h2>
                    <p>
                      Duis aute irure dolor in reprehenderit innera voWe care
                      for the growing needs of our comm unitye build systems.
                    </p>
                    <a href="blog-details.html" className="btn btn-two">
                      Read More{" "}
                      <img
                        src="petpal/assets/img/icon/right_arrow.svg"
                        alt
                        className="injectable"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="blog__post-item-three shine-animate-item">
                  <div className="blog__post-thumb-three shine-animate">
                    <a href="blog-details.html">
                      <img
                        src="petpal/assets/img/blog/h2_blog_post02.jpg"
                        alt="img"
                      />
                    </a>
                    <ul className="list-wrap blog__post-tag blog__post-tag-two">
                      <li>
                        <a href="blog.html">Pet Love</a>
                      </li>
                    </ul>
                  </div>
                  <div className="blog__post-content-three">
                    <div className="blog__post-meta">
                      <ul className="list-wrap">
                        <li>
                          <i className="flaticon-calendar" />
                          25th Aug, 2024
                        </li>
                        <li>
                          <i className="flaticon-user" />
                          by <a href="blog-details.html">admin</a>
                        </li>
                      </ul>
                    </div>
                    <h2 className="title">
                      <a href="blog-details.html">
                        How to Spot, Treat, and Prevent Hot Spots in Pets
                      </a>
                    </h2>
                    <p>
                      Duis aute irure dolor in reprehenderit innera voWe care
                      for the growing needs of our comm unitye build systems.
                    </p>
                    <a href="blog-details.html" className="btn btn-two">
                      Read More{" "}
                      <img
                        src="petpal/assets/img/icon/right_arrow.svg"
                        alt
                        className="injectable"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="blog__post-item-three shine-animate-item">
                  <div className="blog__post-thumb-three shine-animate">
                    <a href="blog-details.html">
                      <img
                        src="petpal/assets/img/blog/h2_blog_post03.jpg"
                        alt="img"
                      />
                    </a>
                    <ul className="list-wrap blog__post-tag blog__post-tag-two">
                      <li>
                        <a href="blog.html">Pet</a>
                      </li>
                      <li>
                        <a href="blog.html">Care</a>
                      </li>
                    </ul>
                  </div>
                  <div className="blog__post-content-three">
                    <div className="blog__post-meta">
                      <ul className="list-wrap">
                        <li>
                          <i className="flaticon-calendar" />
                          25th Aug, 2024
                        </li>
                        <li>
                          <i className="flaticon-user" />
                          by <a href="blog-details.html">admin</a>
                        </li>
                      </ul>
                    </div>
                    <h2 className="title">
                      <a href="blog-details.html">
                        3 Signs It’s Time for the First Pet Dental Cleaning
                      </a>
                    </h2>
                    <p>
                      Duis aute irure dolor in reprehenderit innera voWe care
                      for the growing needs of our comm unitye build systems.
                    </p>
                    <a href="blog-details.html" className="btn btn-two">
                      Read More{" "}
                      <img
                        src="petpal/assets/img/icon/right_arrow.svg"
                        alt
                        className="injectable"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog__shape-wrap-three">
            <img
              src="petpal/assets/img/blog/blog_shape01.png"
              alt="img"
              data-aos="fade-up-right"
              data-aos-delay={400}
            />
          </div>
        </section>
        {/* blog-post-area-end */}
      </main>
      <Footer />
    </>
  );
}
export default PetAdopt;
