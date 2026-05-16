import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/navbar";
import Footer from "../components/footer";
function PetBreed() {
  return (
    <>
      <Nav />
      <main className="fix">
        {/* banner-area */}
        <section className="banner__area-two">
          <div
            className="banner__bg-two"
            data-background="petpal/assets/img/banner/h2_banner_bg.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-9 col-lg-10">
                  <div className="banner__content-two">
                    <span className="sub-title" data-aos="fade-up">
                      Let's get started. Search pets for your home
                    </span>
                    <h2
                      className="title"
                      data-aos="fade-up"
                      data-aos-delay={400}
                    >
                      Easy Way to Find Your <br /> Perfect Pets Breed
                    </h2>
                    <div
                      className="banner__radio-wrap"
                      data-aos="fade-up"
                      data-aos-delay={600}
                    >
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="dog"
                        />
                        <label className="form-check-label" htmlFor="dog">
                          Dog
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="cat"
                        />
                        <label className="form-check-label" htmlFor="cat">
                          Cat
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="pet"
                        />
                        <label className="form-check-label" htmlFor="pet">
                          Other Pet
                        </label>
                      </div>
                    </div>
                    <div
                      className="banner__search-wrap"
                      data-aos="fade-up"
                      data-aos-delay={800}
                    >
                      <form action="#" className="banner__search-form">
                        <div className="select-grp">
                          <select name="pet_type" className="orderby">
                            <option value="Select Breed">Select Breed</option>
                            <option value="Cat">Cat</option>
                            <option value="Dog">Dog</option>
                            <option value="Dog">Other Pet</option>
                          </select>
                        </div>
                        <div className="select-grp select-grp-two">
                          <select name="male" className="orderby">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                        <div className="form-grp">
                          <input
                            type="text"
                            placeholder="What are you looking for . . ."
                          />
                          <button type="submit">
                            <i className="flaticon-loupe" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="banner__img-two">
                    <img
                      src="petpal/assets/img/banner/h2_banner_img.png"
                      alt="img"
                      data-aos="fade-left"
                      data-aos-delay={400}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="banner__shape-wrap-two">
              <img
                src="petpal/assets/img/banner/h2_banner_shape01.png"
                alt="shape"
                data-aos="fade-right"
                data-aos-delay={600}
              />
              <img
                src="petpal/assets/img/banner/h2_banner_shape02.png"
                alt="shape"
                data-aos="fade-up-left"
                data-aos-delay={600}
              />
            </div>
          </div>
        </section>
        {/* banner-area-end */}
        {/* brand-area */}
        <div className="brand__area-two">
          <div className="container">
            <div className="swiper brand-active">
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
        {/* about-area */}
        <section className="about__area-two">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-6 col-lg-7 col-md-9">
                <div className="about__img-two">
                  <div
                    className="mask-img-wrap"
                    data-aos="fade-right"
                    data-aos-delay={200}
                  >
                    <div className="mask-img">
                      <img
                        src="petpal/assets/img/images/h2_about_img01.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="shape">
                      <img
                        src="petpal/assets/img/images/h2_about_img_shape.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                  </div>
                  <div
                    className="img-two"
                    data-aos="fade-left"
                    data-aos-delay={300}
                  >
                    <img
                      src="petpal/assets/img/images/h2_about_img02.jpg"
                      alt="img"
                    />
                  </div>
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
                  <div className="shape">
                    <img
                      src="petpal/assets/img/images/h2_about_shape01.png"
                      alt="shape"
                      data-aos="fade-up-right"
                      data-aos-delay={600}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5">
                <div className="about__content-two">
                  <div className="section__title mb-15">
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
                    <h2 className="title">
                      We'll Make Your Pets <br /> Really Happy
                    </h2>
                  </div>
                  <p>
                    We will work with you to develop individualised care plans,
                    including management chronic diseases. We are committed to
                    being the region’s premier healthcare network providing
                    patient centered care that inspires.
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
                      src="petpal/assets/img/images/h2_about_shape02.png"
                      alt="shape"
                      data-aos="fade-down-left"
                      data-aos-delay={800}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about-area-end */}
        {/* animal-shop-area */}
        <section
          className="animal__area animal__bg"
          data-background="petpal/assets/img/bg/shop_bg.jpg"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section__title white-title mb-40">
                  <span className="sub-title">POPULAR BREEDS</span>
                  <h2 className="title">
                    See our most popular <br /> pets Breed for sale
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="view__all-btn view__all-btn-two text-end mb-40">
                  <a href="animal.html" className="btn">
                    See More pets{" "}
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                <div className="animal__item shine-animate-item">
                  <div className="animal__thumb shine-animate">
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
                  <div className="animal__content">
                    <span className="animal-code">ID: 2596-DG</span>
                    <h4 className="title">
                      <a href="animal-details.html">Cute French Bulldog</a>
                    </h4>
                    {/* <h4 className="price">$590.00</h4> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                <div className="animal__item shine-animate-item">
                  <div className="animal__thumb shine-animate">
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
                  <div className="animal__content">
                    <span className="animal-code">ID: 2019-CT</span>
                    <h4 className="title">
                      <a href="animal-details.html">purebred pussycat</a>
                    </h4>
                    {/* <h4 className="price">$45.00</h4> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                <div className="animal__item shine-animate-item">
                  <div className="animal__thumb shine-animate">
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
                  <div className="animal__content">
                    <span className="animal-code">ID: 5669-RB</span>
                    <h4 className="title">
                      <a href="animal-details.html">Italian Rabbit</a>
                    </h4>
                    {/* <h4 className="price">$20.00</h4> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                <div className="animal__item shine-animate-item">
                  <div className="animal__thumb shine-animate">
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
                  <div className="animal__content">
                    <span className="animal-code">ID: 2019-BR</span>
                    <h4 className="title">
                      <a href="animal-details.html">Macaw Russian</a>
                    </h4>
                    {/* <h4 className="price">$130.00</h4> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                <div className="animal__item shine-animate-item">
                  <div className="animal__thumb shine-animate">
                    <a href="animal-details.html">
                      <img
                        src="petpal/assets/img/shop/shop_img05.jpg"
                        alt="img"
                      />
                    </a>
                    <a href="animal-details.html" className="wishlist">
                      <i className="flaticon-love" />
                    </a>
                  </div>
                  <div className="animal__content">
                    <span className="animal-code">ID: 2060-CT</span>
                    <h4 className="title">
                      <a href="animal-details.html">Egypt Cat</a>
                    </h4>
                    {/* <h4 className="price">$590.00</h4> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                <div className="animal__item shine-animate-item">
                  <div className="animal__thumb shine-animate">
                    <a href="animal-details.html">
                      <img
                        src="petpal/assets/img/shop/shop_img06.jpg"
                        alt="img"
                      />
                    </a>
                    <a href="animal-details.html" className="wishlist">
                      <i className="flaticon-love" />
                    </a>
                  </div>
                  <div className="animal__content">
                    <span className="animal-code">ID: 2580-DG</span>
                    <h4 className="title">
                      <a href="animal-details.html">Australian Shepherd</a>
                    </h4>
                    {/* <h4 className="price">$45.00</h4> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                <div className="animal__item shine-animate-item">
                  <div className="animal__thumb shine-animate">
                    <a href="animal-details.html">
                      <img
                        src="petpal/assets/img/shop/shop_img07.jpg"
                        alt="img"
                      />
                    </a>
                    <a href="animal-details.html" className="wishlist">
                      <i className="flaticon-love" />
                    </a>
                  </div>
                  <div className="animal__content">
                    <span className="animal-code">ID: 2592-DG</span>
                    <h4 className="title">
                      <a href="animal-details.html">Beagle Britain</a>
                    </h4>
                    {/* <h4 className="price">$190.00</h4> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                <div className="animal__item shine-animate-item">
                  <div className="animal__thumb shine-animate">
                    <a href="animal-details.html">
                      <img
                        src="petpal/assets/img/shop/shop_img08.jpg"
                        alt="img"
                      />
                    </a>
                    <a href="animal-details.html" className="wishlist">
                      <i className="flaticon-love" />
                    </a>
                  </div>
                  <div className="animal__content">
                    <span className="animal-code">ID: 2552-DG</span>
                    <h4 className="title">
                      <a href="animal-details.html">Maltipoo USA</a>
                    </h4>
                    {/* <h4 className="price">$90.00</h4> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* animal-area-end */}
        {/* why-we-are-area */}
        <section className="why__we-are-area-two">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section__title text-center mb-40">
                  <span className="sub-title">
                    Why we are the best
                    <strong className="shake">
                      <img
                        src="petpal/assets/img/icon/pet_icon02.svg"
                        alt
                        className="injectable"
                      />
                    </strong>
                  </span>
                  <h2 className="title">See How Petpal can Help</h2>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse <br /> amily and deserves ets are the best care.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="why__we-are-item">
                  <div className="why__we-are-item-icon">
                    <img
                      src="petpal/assets/img/icon/why_icon01.svg"
                      alt
                      className="injectable"
                    />
                  </div>
                  <div className="why__we-are-item-content">
                    <h4 className="title">Health Guarantee</h4>
                    <p>
                      Duis aute irure dolor in reprehenderit voluptate velit
                      essed eservesets are their health best care
                    </p>
                  </div>
                  <div className="why__we-are-item-shape">
                    <div className="shape-one">
                      <img
                        src="petpal/assets/img/images/why_item_shape01.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                    <div className="shape-two">
                      <img
                        src="petpal/assets/img/images/why_item_shape02.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="why__we-are-item">
                  <div className="why__we-are-item-icon">
                    <img
                      src="petpal/assets/img/icon/why_icon02.svg"
                      alt
                      className="injectable"
                    />
                  </div>
                  <div className="why__we-are-item-content">
                    <h4 className="title">Ethical breeding</h4>
                    <p>
                      Duis aute irure dolor in reprehenderit voluptate velit
                      essed eservesets are their health best care
                    </p>
                  </div>
                  <div className="why__we-are-item-shape">
                    <div className="shape-one">
                      <img
                        src="petpal/assets/img/images/why_item_shape01.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                    <div className="shape-two">
                      <img
                        src="petpal/assets/img/images/why_item_shape02.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="why__we-are-item">
                  <div className="why__we-are-item-icon">
                    <img
                      src="petpal/assets/img/icon/why_icon03.svg"
                      alt
                      className="injectable"
                    />
                  </div>
                  <div className="why__we-are-item-content">
                    <h4 className="title">Transparent Policy</h4>
                    <p>
                      Duis aute irure dolor in reprehenderit voluptate velit
                      essed eservesets are their health best care
                    </p>
                  </div>
                  <div className="why__we-are-item-shape">
                    <div className="shape-one">
                      <img
                        src="petpal/assets/img/images/why_item_shape01.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                    <div className="shape-two">
                      <img
                        src="petpal/assets/img/images/why_item_shape02.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="why__shape-wrap">
            <img
              src="petpal/assets/img/images/h2_why_shape01.png"
              alt="shape"
              data-aos="fade-down-right"
              data-aos-delay={400}
            />
            <img
              src="petpal/assets/img/images/h2_why_shape02.png"
              alt="shape"
              className="ribbonRotate"
            />
          </div>
        </section>
        {/* why-we-are-area-end */}
        {/* introducing-area */}
        <section className="introducing__area">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="introducing__img">
                  <img
                    src="petpal/assets/img/images/introducing_img.png"
                    alt="img"
                  />
                  <div className="shape">
                    <img
                      src="petpal/assets/img/images/introducing_img_shape.svg"
                      alt
                      className="injectable"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="introducing__content">
                  <div className="section__title mb-15">
                    <span className="sub-title">
                      INTRODUCING
                      <strong className="shake">
                        <img
                          src="petpal/assets/img/icon/pet_icon02.svg"
                          alt
                          className="injectable"
                        />
                      </strong>
                    </span>
                    <h2 className="title">
                      We thrive on building a healthy community <br /> for all
                      Pets.
                    </h2>
                  </div>
                  <p>
                    Duis aute irure dolor in reprehenderit in voWe care for the
                    growing needs of our community. We build systems for
                    providing health services for individuals, families and
                    populations.
                  </p>
                  <div className="introducing__list-box mb-35">
                    <ul className="list-wrap">
                      <li>
                        <span className="icon">
                          <img
                            src="petpal/assets/img/icon/check_icon02.svg"
                            alt
                            className="injectable"
                          />
                        </span>
                        Over 10 years of experience
                      </li>
                      <li>
                        <span className="icon">
                          <img
                            src="petpal/assets/img/icon/check_icon02.svg"
                            alt
                            className="injectable"
                          />
                        </span>
                        20 talented vets ready to help you
                      </li>
                      <li>
                        <span className="icon">
                          <img
                            src="petpal/assets/img/icon/check_icon02.svg"
                            alt
                            className="injectable"
                          />
                        </span>
                        High-quality products only
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
                  <div className="shape">
                    <img
                      src="petpal/assets/img/images/introducing_shape.png"
                      alt="shape"
                      data-aos="fade-up-left"
                      data-aos-delay={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* introducing-area-end */}
        {/* counter-area */}
        <div
          className="counter__area-two counter__area-bg"
          data-background="petpal/assets/img/bg/counter_bg.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="counter__item-two">
                  <div className="counter__item-shape">
                    <img
                      src="petpal/assets/img/images/h2_counter_shape.png"
                      alt
                    />
                  </div>
                  <span className="count odometer" data-count={5985} />
                  <p>Happy Family</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter__item-two">
                  <div className="counter__item-shape">
                    <img
                      src="petpal/assets/img/images/h2_counter_shape.png"
                      alt
                    />
                  </div>
                  <span className="count odometer" data-count={1322} />
                  <p>New Listed States</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter__item-two">
                  <div className="counter__item-shape">
                    <img
                      src="petpal/assets/img/images/h2_counter_shape.png"
                      alt
                    />
                  </div>
                  <span className="count odometer" data-count={3102} />
                  <p>Core Breeding</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter__item-two">
                  <div className="counter__item-shape">
                    <img
                      src="petpal/assets/img/images/h2_counter_shape.png"
                      alt
                    />
                  </div>
                  <span className="count odometer" data-count={1125} />
                  <p>Annual Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* counter-area-end */}
        {/* team-area */}
        <section className="team__area-two">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section__title text-center mb-40">
                  <span className="sub-title">
                    WE CHANGE YOUR LIFE &amp; WORLD
                    <strong className="shake">
                      <img
                        src="petpal/assets/img/icon/pet_icon02.svg"
                        alt
                        className="injectable"
                      />
                    </strong>
                  </span>
                  <h2 className="title">
                    We’re dedicated to excellent <br /> service and care
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="team__item">
                  <div className="team__item-img">
                    <div className="mask-img-wrap">
                      <img
                        src="petpal/assets/img/team/team_img01.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="team__item-img-shape">
                      <div className="shape-one">
                        <img
                          src="petpal/assets/img/team/team_img_shape01.svg"
                          alt
                          className="injectable"
                        />
                      </div>
                      <div className="shape-two">
                        <img
                          src="petpal/assets/img/team/team_img_shape02.svg"
                          alt
                          className="injectable"
                        />
                      </div>
                    </div>
                    <div className="team__social">
                      <ul className="list-wrap">
                        <li>
                          <a href="https://www.facebook.com/" target="_blank">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/" target="_blank">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.whatsapp.com/" target="_blank">
                            <i className="fab fa-whatsapp" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/" target="_blank">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/" target="_blank">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team__item-content">
                    <h4 className="title">
                      <a href="team-details.html">Daria Andaloro</a>
                    </h4>
                    <span>Veterinary Technician</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="team__item">
                  <div className="team__item-img">
                    <div className="mask-img-wrap">
                      <img
                        src="petpal/assets/img/team/team_img02.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="team__item-img-shape">
                      <div className="shape-one">
                        <img
                          src="petpal/assets/img/team/team_img_shape01.svg"
                          alt
                          className="injectable"
                        />
                      </div>
                      <div className="shape-two">
                        <img
                          src="petpal/assets/img/team/team_img_shape02.svg"
                          alt
                          className="injectable"
                        />
                      </div>
                    </div>
                    <div className="team__social">
                      <ul className="list-wrap">
                        <li>
                          <a href="https://www.facebook.com/" target="_blank">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/" target="_blank">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.whatsapp.com/" target="_blank">
                            <i className="fab fa-whatsapp" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/" target="_blank">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/" target="_blank">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team__item-content">
                    <h4 className="title">
                      <a href="team-details.html">Michael Brian</a>
                    </h4>
                    <span>Medicine Specialist</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="team__item">
                  <div className="team__item-img">
                    <div className="mask-img-wrap">
                      <img
                        src="petpal/assets/img/team/team_img03.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="team__item-img-shape">
                      <div className="shape-one">
                        <img
                          src="petpal/assets/img/team/team_img_shape01.svg"
                          alt
                          className="injectable"
                        />
                      </div>
                      <div className="shape-two">
                        <img
                          src="petpal/assets/img/team/team_img_shape02.svg"
                          alt
                          className="injectable"
                        />
                      </div>
                    </div>
                    <div className="team__social">
                      <ul className="list-wrap">
                        <li>
                          <a href="https://www.facebook.com/" target="_blank">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/" target="_blank">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.whatsapp.com/" target="_blank">
                            <i className="fab fa-whatsapp" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/" target="_blank">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/" target="_blank">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team__item-content">
                    <h4 className="title">
                      <a href="team-details.html">Kenroly Gajon</a>
                    </h4>
                    <span>Food Technician</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="team__item">
                  <div className="team__item-img">
                    <div className="mask-img-wrap">
                      <img
                        src="petpal/assets/img/team/team_img04.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="team__item-img-shape">
                      <div className="shape-one">
                        <img
                          src="petpal/assets/img/team/team_img_shape01.svg"
                          alt
                          className="injectable"
                        />
                      </div>
                      <div className="shape-two">
                        <img
                          src="petpal/assets/img/team/team_img_shape02.svg"
                          alt
                          className="injectable"
                        />
                      </div>
                    </div>
                    <div className="team__social">
                      <ul className="list-wrap">
                        <li>
                          <a href="https://www.facebook.com/" target="_blank">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/" target="_blank">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.whatsapp.com/" target="_blank">
                            <i className="fab fa-whatsapp" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/" target="_blank">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/" target="_blank">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team__item-content">
                    <h4 className="title">
                      <a href="team-details.html">Lizay Arianya</a>
                    </h4>
                    <span>Veterinary Technician</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="team__bottom-content">
              <p>Our Valuable Expert Doctors Team</p>
              <a href="team.html" className="btn">
                See All Team{" "}
                <img
                  src="petpal/assets/img/icon/right_arrow.svg"
                  alt
                  className="injectable"
                />
              </a>
            </div>
          </div>
          <div className="team__shape-two">
            <img
              src="petpal/assets/img/team/h2_team_shape.png"
              alt="img"
              className="ribbonRotate"
            />
          </div>
        </section>
        {/* team-area-end */}
        {/* testimonial-area */}
        <section className="testimonial__area-two">
          <div className="container">
            <div className="testimonial__item-wrap-two">
              <div className="swiper testimonial-active-two">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial__item-two">
                      <div className="testimonial__icon-two">
                        <img
                          src="petpal/assets/img/icon/quote.svg"
                          alt
                          className="injectable"
                        />
                      </div>
                      <div className="testimonial__content-two">
                        <h2 className="title">Pet Health Important</h2>
                        <p>
                          “ Duis aute irure dolor in repreerit in voluptate
                          velitesse We understand that your furry aute irure
                          dolor in repreerit in voluptate just about the best
                          thing you can do. dolor in repreerit in voluptate
                          understand that you ”
                        </p>
                        <div className="testimonial__author-two">
                          <div className="testimonial__author-thumb">
                            <img
                              src="petpal/assets/img/images/testi_author01.png"
                              alt
                            />
                          </div>
                          <div className="testimonial__author-content">
                            <h4 className="title">Uraney Jacke</h4>
                            <span>Business Study</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial__item-two">
                      <div className="testimonial__icon-two">
                        <img
                          src="petpal/assets/img/icon/quote.svg"
                          alt
                          className="injectable"
                        />
                      </div>
                      <div className="testimonial__content-two">
                        <h2 className="title">Pet Health Important</h2>
                        <p>
                          “ Duis aute irure dolor in repreerit in voluptate
                          velitesse We understand that your furry aute irure
                          dolor in repreerit in voluptate just about the best
                          thing you can do. dolor in repreerit in voluptate
                          understand that you ”
                        </p>
                        <div className="testimonial__author-two">
                          <div className="testimonial__author-thumb">
                            <img
                              src="petpal/assets/img/images/testi_author01.png"
                              alt
                            />
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
              </div>
              <div className="testimonial__nav-wrap">
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
              <div className="shape">
                <img
                  src="petpal/assets/img/images/h2_testimonial_shape01.png"
                  alt
                />
              </div>
            </div>
          </div>
          <div className="testimonial__shape-wrap-two">
            <img
              src="petpal/assets/img/images/h2_testimonial_shape02.png"
              alt="img"
              data-aos="fade-down-left"
              data-aos-delay={400}
            />
          </div>
        </section>
        {/* testimonial-area-end */}
        {/* blog-post-area */}
        <section className="blog__post-area-two">
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
                <div className="blog__post-item-two shine-animate-item">
                  <div className="blog__post-thumb-two shine-animate">
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
                  <div className="blog__post-content-two">
                    <h2 className="title">
                      <a href="blog-details.html">
                        Clean indoor air as important in controlling asthma
                      </a>
                    </h2>
                    <div className="blog__post-meta">
                      <ul className="list-wrap">
                        <li>
                          <i className="flaticon-user" />
                          by <a href="blog-details.html">admin</a>
                        </li>
                        <li>
                          <i className="flaticon-calendar" />
                          25th Aug, 2024
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="blog__post-item-two shine-animate-item">
                  <div className="blog__post-thumb-two shine-animate">
                    <a href="blog-details.html">
                      <img
                        src="petpal/assets/img/blog/h2_blog_post02.jpg"
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
                  <div className="blog__post-content-two">
                    <h2 className="title">
                      <a href="blog-details.html">
                        How to Spot, Treat, and Prevent Hot Spots in Pets
                      </a>
                    </h2>
                    <div className="blog__post-meta">
                      <ul className="list-wrap">
                        <li>
                          <i className="flaticon-user" />
                          by <a href="blog-details.html">admin</a>
                        </li>
                        <li>
                          <i className="flaticon-calendar" />
                          25th Aug, 2024
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="blog__post-item-two shine-animate-item">
                  <div className="blog__post-thumb-two shine-animate">
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
                        <a href="blog.html">Medical</a>
                      </li>
                    </ul>
                  </div>
                  <div className="blog__post-content-two">
                    <h2 className="title">
                      <a href="blog-details.html">
                        3 Signs It’s Time for the First Pet Dental Cleaning
                      </a>
                    </h2>
                    <div className="blog__post-meta">
                      <ul className="list-wrap">
                        <li>
                          <i className="flaticon-user" />
                          by <a href="blog-details.html">admin</a>
                        </li>
                        <li>
                          <i className="flaticon-calendar" />
                          25th Aug, 2024
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog__shape-wrap-two">
            <img
              src="petpal/assets/img/blog/blog_shape01.png"
              alt="img"
              className="alltuchtopdown"
            />
          </div>
        </section>
        {/* blog-post-area-end */}
      </main>
      <Footer />
    </>
  );
}
export default PetBreed;
