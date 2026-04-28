function Index() {
  return (
    <>
      <button className="scroll__top scroll-to-target" data-target="html">
        <i className="fas fa-angle-up" />
      </button>
      {/* Scroll-top-end*/}
      {/* header-area */}
      <header>
        <div id="header-fixed-height" />
        <div className="tg-header__top">
          <div className="container custom-container">
            <div className="row">
              <div className="col-xl-6 col-lg-8">
                <ul className="tg-header__top-info left-side list-wrap">
                  <li>
                    <i className="flaticon-placeholder" />
                    59 Jakc Street Brooklyn, New York
                  </li>
                  <li>
                    <i className="flaticon-mail" />
                    <a href="mailto:Petspostinfo@gmail.com">
                      Petspostinfo@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-6 col-lg-4">
                <ul className="tg-header__top-right list-wrap">
                  <li>
                    <i className="flaticon-three-o-clock-clock" />
                    Opening Hour: 09.00 am- 11.00 pm
                  </li>
                  <li className="tg-header__top-social">
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
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="sticky-header" className="tg-header__area">
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="tgmenu__wrap">
                  <nav className="tgmenu__nav">
                    <div className="logo">
                      <a href="index-2.html">
                        <img src="petpal/assets/img/logo/logo.png" alt="Logo" />
                      </a>
                    </div>
                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li className="active menu-item-has-children">
                          <a href="#">Home</a>
                          <ul className="sub-menu">
                            <li className="active">
                              <a href="index-2.html">
                                Pet Care &amp; Veterinary
                              </a>
                            </li>
                            <li>
                              <a href="index-3.html">Pet Breed</a>
                            </li>
                            <li>
                              <a href="index-4.html">Pet Adopt</a>
                            </li>
                            <li>
                              <a href="index-5.html">pet Woocommerce</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Shop</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="product.html">Our Shop</a>
                            </li>
                            <li>
                              <a href="product-details.html">Shop Details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Pages</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="animal.html">All Pets</a>
                            </li>
                            <li>
                              <a href="animal-details.html">Pet Details</a>
                            </li>
                            <li>
                              <a href="gallery.html">Gallery</a>
                            </li>
                            <li>
                              <a href="faq.html">Faq Page</a>
                            </li>
                            <li>
                              <a href="pricing.html">Pricing Page</a>
                            </li>
                            <li>
                              <a href="reservation.html">Reservation Page</a>
                            </li>
                            <li>
                              <a href="team.html">Our Team</a>
                            </li>
                            <li>
                              <a href="team-details.html">Team Details</a>
                            </li>
                            <li>
                              <a href="blog.html">Our Blog</a>
                            </li>
                            <li>
                              <a href="blog-details.html">Blog Details</a>
                            </li>
                            <li>
                              <a href="error.html">404 Error Page</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">contacts</a>
                        </li>
                      </ul>
                    </div>
                    <div className="tgmenu__action d-none d-md-block">
                      <ul className="list-wrap">
                        <li className="header-search">
                          <a
                            href="javascript:void(0)"
                            className="search-open-btn"
                          >
                            <i className="flaticon-loupe" />
                          </a>
                        </li>
                        <li className="header-cart">
                          <a href="javascript:void(0)">
                            <i className="flaticon-shopping-bag" />
                            <span>0</span>
                          </a>
                        </li>
                        <li className="offCanvas-menu">
                          <a href="javascript:void(0)" className="menu-tigger">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={26}
                              height={16}
                              viewBox="0 0 26 16"
                              fill="none"
                            >
                              <rect
                                width={9}
                                height={2}
                                rx={1}
                                fill="currentcolor"
                              />
                              <rect
                                x={11}
                                width={15}
                                height={2}
                                rx={1}
                                fill="currentcolor"
                              />
                              <rect
                                y={14}
                                width={26}
                                height={2}
                                rx={1}
                                fill="currentcolor"
                              />
                              <rect
                                y={7}
                                width={16}
                                height={2}
                                rx={1}
                                fill="currentcolor"
                              />
                              <rect
                                x={17}
                                y={7}
                                width={9}
                                height={2}
                                rx={1}
                                fill="currentcolor"
                              />
                            </svg>
                          </a>
                        </li>
                        <li className="header-btn">
                          <a href="contact.html" className="btn">
                            <i className="flaticon-calendar-1" />
                            Appointment
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mobile-nav-toggler">
                      <i className="flaticon-layout" />
                    </div>
                  </nav>
                </div>
                {/* Mobile Menu  */}
                <div className="tgmobile__menu">
                  <nav className="tgmobile__menu-box">
                    <div className="close-btn">
                      <i className="fas fa-times" />
                    </div>
                    <div className="nav-logo">
                      <a href="index-2.html">
                        <img src="petpal/assets/img/logo/logo.png" alt="Logo" />
                      </a>
                    </div>
                    <div className="tgmobile__search">
                      <form action="#">
                        <input type="text" placeholder="Search here..." />
                        <button>
                          <i className="fas fa-search" />
                        </button>
                      </form>
                    </div>
                    <div className="tgmobile__menu-outer">
                      {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                    </div>
                    <div className="social-links">
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
                  </nav>
                </div>
                <div className="tgmobile__menu-backdrop" />
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
        {/* header-search */}
        <div className="search__popup">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="search__wrapper">
                  <div className="search__close">
                    <button type="button" className="search-close-btn">
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 1L1 17"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 1L17 17"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="search__form">
                    <form action="#">
                      <div className="search__input">
                        <input
                          className="search-input-field"
                          type="text"
                          placeholder="Type keywords here"
                        />
                        <span className="search-focus-border" />
                        <button>
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M19.0002 19.0002L17.2002 17.2002"
                              stroke="currentcolor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-popup-overlay" />
        {/* header-search-end */}
        {/* offCanvas-menu */}
        <div className="offCanvas__info">
          <div className="offCanvas__close-icon menu-close">
            <button>
              <i className="far fa-window-close" />
            </button>
          </div>
          <div className="offCanvas__logo mb-30">
            <a href="index-2.html">
              <img src="petpal/assets/img/logo/logo.png" alt="Logo" />
            </a>
          </div>
          <div className="offCanvas__side-info mb-30">
            <div className="contact-list mb-30">
              <h4>Office Address</h4>
              <p>
                123/A, Miranda City Likaoli <br /> Prikano, Dope
              </p>
            </div>
            <div className="contact-list mb-30">
              <h4>Phone Number</h4>
              <p>+0989 7876 9865 9</p>
              <p>+(090) 8765 86543 85</p>
            </div>
            <div className="contact-list mb-30">
              <h4>Email Address</h4>
              <p>info@example.com</p>
              <p>example.mail@hum.com</p>
            </div>
          </div>
          <div className="offCanvas__social-icon mt-30">
            <a href="javascript:void(0)">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="javascript:void(0)">
              <i className="fab fa-twitter" />
            </a>
            <a href="javascript:void(0)">
              <i className="fab fa-google-plus-g" />
            </a>
            <a href="javascript:void(0)">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
        <div className="offCanvas__overly" />
        {/* offCanvas-menu-end */}
      </header>
      {/* header-area-end */}
      {/* main-area */}
      <main className="fix">
        {/* banner-area */}
        <section
          className="banner__area banner__bg"
          data-background="petpal/assets/img/banner/banner_bg.jpg"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-5 col-lg-6">
                <div className="banner__content">
                  <h2 className="title" data-aos="fade-up" data-aos-delay={200}>
                    Trusted Pet{" "}
                    <img
                      src="petpal/assets/img/banner/banner_title_img01.png"
                      alt
                    />{" "}
                    care &amp; Veterinary Center{" "}
                    <span className="icon">
                      <img
                        src="petpal/assets/img/banner/banner_title_img02.png"
                        alt
                      />
                    </span>{" "}
                    Point
                  </h2>
                  <p data-aos="fade-up" data-aos-delay={400}>
                    Template Kit uses demo images from Envato Elements Follower
                    will need to license these images from Envato.
                  </p>
                  <a
                    href="about.html"
                    className="btn"
                    data-aos="fade-up"
                    data-aos-delay={600}
                  >
                    Read More{" "}
                    <img
                      src="petpal/assets/img/icon/right_arrow.svg"
                      alt
                      className="injectable"
                    />
                  </a>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-9">
                <div className="banner__img text-end">
                  <img
                    src="petpal/assets/img/banner/banner_img01.png"
                    alt="img"
                    data-aos="fade-left"
                    data-aos-delay={800}
                  />
                  <div
                    className="healthy-pets"
                    data-aos="zoom-in"
                    data-aos-delay={1000}
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
            </div>
          </div>
          <div className="banner__shape-wrap">
            <img
              src="petpal/assets/img/banner/banner_shape01.png"
              alt="img"
              data-aos="fade-down"
              data-aos-delay={1200}
            />
            <img
              src="petpal/assets/img/banner/banner_shape02.png"
              alt="img"
              data-aos="fade-up-right"
              data-aos-delay={1200}
            />
            <img
              src="petpal/assets/img/banner/banner_shape03.png"
              alt="img"
              className="ribbonRotate"
            />
            <img src="petpal/assets/img/banner/banner_shape04.png" alt="img" />
          </div>
        </section>
        {/* banner-area-end */}
        {/* about-area */}
        <section className="about__area">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="about__img">
                  <img src="petpal/assets/img/images/about_img.png" alt />
                  <div className="video__box">
                    <div className="video__box-shape">
                      <img
                        src="petpal/assets/img/images/about_video_shape.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                    <h5 className="title">
                      Watch Our <br /> Working Video
                    </h5>
                    <a
                      href="https://www.youtube.com/watch?v=XdFfCPK5ycw"
                      className="popup-video play-btn"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="about__content">
                  <div className="section__title mb-20">
                    <span className="sub-title">
                      Know More Us
                      <strong className="shake">
                        <img
                          src="petpal/assets/img/icon/pet_icon02.svg"
                          alt
                          className="injectable"
                        />
                      </strong>
                    </span>
                    <h2 className="title">
                      Our Passion Is Providing <br /> Superior Pet Care
                    </h2>
                  </div>
                  <div className="about__content-inner">
                    <div className="experience__box">
                      <div className="experience__box-shape">
                        <img
                          src="petpal/assets/img/images/experience_shape.svg"
                          alt
                          className="injectable"
                        />
                      </div>
                      <div className="experience__box-content">
                        <h4 className="title">
                          15 <span>Yr</span>
                        </h4>
                        <p>Experience</p>
                      </div>
                    </div>
                    <p>
                      Come see how I’m styling these final days of summer with
                      bright palettes and pops of color that will dazzle your
                      wardrobe year round!
                    </p>
                  </div>
                  <p>
                    We will work with you to develop individualised care plans,
                    including management of chronic diseases. We are committed
                    to being the region’s premier healthcare network providing
                    patient centered care that inspires.
                  </p>
                  <div className="about__content-bottom">
                    <div className="about__content-sign">
                      <img src="petpal/assets/img/images/author_sign.png" alt />
                    </div>
                    <div className="customer__review">
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
                  </div>
                  <div className="shape">
                    <img
                      src="petpal/assets/img/images/about_shape02.png"
                      alt="img"
                      data-aos="fade-down-left"
                      data-aos-delay={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about__shape-wrap">
            <img
              src="petpal/assets/img/images/about_shape01.png"
              alt="img"
              data-aos="fade-up-right"
              data-aos-delay={800}
            />
            <img
              src="petpal/assets/img/images/about_shape03.png"
              alt="img"
              className="ribbonRotate"
            />
          </div>
        </section>
        {/* about-area-end */}
        {/* marquee-area */}
        <div className="marquee__area">
          <div className="marquee__wrap">
            <div className="marquee__box">
              <a href="contact.html">
                Book For Online Appointment{" "}
                <img src="petpal/assets/img/images/marquee_icon.svg" alt />
              </a>
              <a href="contact.html">
                Book For Online Appointment{" "}
                <img src="petpal/assets/img/images/marquee_icon.svg" alt />
              </a>
              <a href="contact.html">
                Book For Online Appointment{" "}
                <img src="petpal/assets/img/images/marquee_icon.svg" alt />
              </a>
              <a href="contact.html">
                Book For Online Appointment{" "}
                <img src="petpal/assets/img/images/marquee_icon.svg" alt />
              </a>
            </div>
            <div className="marquee__box">
              <a href="contact.html">
                Book For Online Appointment{" "}
                <img src="petpal/assets/img/images/marquee_icon.svg" alt />
              </a>
              <a href="contact.html">
                Book For Online Appointment{" "}
                <img src="petpal/assets/img/images/marquee_icon.svg" alt />
              </a>
              <a href="contact.html">
                Book For Online Appointment{" "}
                <img src="petpal/assets/img/images/marquee_icon.svg" alt />
              </a>
              <a href="contact.html">
                Book For Online Appointment{" "}
                <img src="petpal/assets/img/images/marquee_icon.svg" alt />
              </a>
            </div>
          </div>
        </div>
        {/* marquee-area-end */}
        {/* services-area */}
        <section className="services__area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-7">
                <div className="section__title mb-40">
                  <span className="sub-title">
                    Delivering world class home care
                    <strong className="shake">
                      <img
                        src="petpal/assets/img/icon/pet_icon02.svg"
                        alt
                        className="injectable"
                      />
                    </strong>
                  </span>
                  <h2 className="title">
                    Providing Our Best Pet Care &amp; Veterinary Services
                  </h2>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5">
                <div className="view__all-btn text-end mb-40">
                  <a href="animal-details.html" className="btn border-btn">
                    See All Services{" "}
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="services__item">
                  <div className="services__shape">
                    <div className="shape-one">
                      <img
                        src="petpal/assets/img/images/services_shape01.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                    <div className="shape-two">
                      <img
                        src="petpal/assets/img/images/services_shape02.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                  </div>
                  <div className="services__icon">
                    <i className="flaticon-vaccine" />
                    <div className="services__icon-shape">
                      <img
                        src="petpal/assets/img/images/services_icon_shape.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                  </div>
                  <div className="services__content">
                    <h4 className="title">
                      <a href="animal-details.html">Pet Vaccination</a>
                    </h4>
                    <p>
                      We will work with you to develop individu alised care
                      plans including
                    </p>
                    <a href="animal-details.html" className="btn border-btn">
                      See Details{" "}
                      <img
                        src="petpal/assets/img/icon/right_arrow02.svg"
                        alt
                        className="injectable"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="services__item">
                  <div className="services__shape">
                    <div className="shape-one">
                      <img
                        src="petpal/assets/img/images/services_shape01.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                    <div className="shape-two">
                      <img
                        src="petpal/assets/img/images/services_shape02.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                  </div>
                  <div className="services__icon">
                    <i className="flaticon-beauty-saloon" />
                    <div className="services__icon-shape">
                      <img
                        src="petpal/assets/img/images/services_icon_shape.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                  </div>
                  <div className="services__content">
                    <h4 className="title">
                      <a href="animal-details.html">Pet Grooming</a>
                    </h4>
                    <p>
                      We will work with you to develop individu alised care
                      plans including
                    </p>
                    <a href="animal-details.html" className="btn border-btn">
                      See Details{" "}
                      <img
                        src="petpal/assets/img/icon/right_arrow02.svg"
                        alt
                        className="injectable"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="services__item">
                  <div className="services__shape">
                    <div className="shape-one">
                      <img
                        src="petpal/assets/img/images/services_shape01.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                    <div className="shape-two">
                      <img
                        src="petpal/assets/img/images/services_shape02.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                  </div>
                  <div className="services__icon">
                    <i className="flaticon-vet" />
                    <div className="services__icon-shape">
                      <img
                        src="petpal/assets/img/images/services_icon_shape.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                  </div>
                  <div className="services__content">
                    <h4 className="title">
                      <a href="animal-details.html">Pet Veterinary</a>
                    </h4>
                    <p>
                      We will work with you to develop individu alised care
                      plans including
                    </p>
                    <a href="animal-details.html" className="btn border-btn">
                      See Details{" "}
                      <img
                        src="petpal/assets/img/icon/right_arrow02.svg"
                        alt
                        className="injectable"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="services__item">
                  <div className="services__shape">
                    <div className="shape-one">
                      <img
                        src="petpal/assets/img/images/services_shape01.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                    <div className="shape-two">
                      <img
                        src="petpal/assets/img/images/services_shape02.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                  </div>
                  <div className="services__icon">
                    <i className="flaticon-spay" />
                    <div className="services__icon-shape">
                      <img
                        src="petpal/assets/img/images/services_icon_shape.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                  </div>
                  <div className="services__content">
                    <h4 className="title">
                      <a href="animal-details.html">Pet Surgery</a>
                    </h4>
                    <p>
                      We will work with you to develop individu alised care
                      plans including
                    </p>
                    <a href="animal-details.html" className="btn border-btn">
                      See Details{" "}
                      <img
                        src="petpal/assets/img/icon/right_arrow02.svg"
                        alt
                        className="injectable"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services__shape-wrap">
            <img
              src="petpal/assets/img/images/services_shape01.png"
              alt="img"
              className="ribbonRotate"
            />
            <img
              src="petpal/assets/img/images/services_shape02.png"
              alt="img"
              data-aos="fade-up-right"
              data-aos-delay={800}
            />
            <img
              src="petpal/assets/img/images/services_shape03.png"
              alt="img"
              data-aos="fade-down-left"
              data-aos-delay={400}
            />
          </div>
        </section>
        {/* services-area-end */}
        {/* why-we-are-area */}
        <section className="why__we-are-area">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-8 col-sm-10">
                <div className="why__we-are-img">
                  <img src="petpal/assets/img/images/why_we_are_img.png" alt />
                  <div
                    className="shape shape-one"
                    data-aos="fade-down-right"
                    data-aos-delay={500}
                  >
                    <img
                      src="petpal/assets/img/images/why_shape01.svg"
                      alt
                      className="injectable"
                    />
                  </div>
                  <div
                    className="shape shape-two"
                    data-aos="fade-up-right"
                    data-aos-delay={500}
                  >
                    <img
                      src="petpal/assets/img/images/why_shape02.svg"
                      alt
                      className="injectable"
                    />
                  </div>
                  <div
                    className="shape shape-three"
                    data-aos="fade-up-left"
                    data-aos-delay={500}
                  >
                    <img
                      src="petpal/assets/img/images/why_shape03.svg"
                      alt
                      className="injectable"
                    />
                  </div>
                  <div className="shape shape-four ribbonRotate">
                    <img
                      src="petpal/assets/img/images/why_shape04.svg"
                      alt
                      className="injectable"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="why__we-are-content">
                  <div className="section__title mb-10">
                    <span className="sub-title">
                      Why We are The Best
                      <strong className="shake">
                        <img
                          src="petpal/assets/img/icon/pet_icon02.svg"
                          alt
                          className="injectable"
                        />
                      </strong>
                    </span>
                    <h2 className="title">
                      Pet emergencies <br /> what you need to know.
                    </h2>
                  </div>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse We understand that your furry friend is a treasured
                    member of your family and deserves pets are the best care
                    and attention possible.
                  </p>
                  <div className="why__list-box">
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
                            <h4 className="title">Modern Pet Training</h4>
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
                            <h4 className="title">Maintain a daily routine</h4>
                          </div>
                          <p>
                            Be confident in the treatment plan and your doctor’s
                            abilities.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* why-we-are-area-end */}
        {/* counter-area */}
        <section className="counter__area">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-5 col-md-8 order-0 order-lg-2">
                <div className="counter__img">
                  <div className="mask-img-wrap">
                    <img
                      src="petpal/assets/img/images/counter_img.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="counter__img-shape">
                    <img
                      src="petpal/assets/img/images/counter_img_shape.svg"
                      alt
                      className="injectable"
                    />
                  </div>
                  <div className="shape">
                    <img
                      src="petpal/assets/img/images/counter_shape01.png"
                      alt="img"
                      className="ribbonRotate"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-7">
                <div className="counter__content">
                  <div className="section__title white-title mb-10">
                    <span className="sub-title">
                      Your Trust Our Prirority
                      <strong className="shake">
                        <img
                          src="petpal/assets/img/icon/pet_icon02.svg"
                          alt
                          className="injectable"
                        />
                      </strong>
                    </span>
                    <h2 className="title">
                      Professional vest care and guaranteed quality
                    </h2>
                  </div>
                  <p>
                    Duis aute irure dolor in repreerit in voluptate velit esse
                    We understand that your furry friend treas ured member of
                    your pets are.
                  </p>
                  <a href="about.html" className="btn border-btn white-btn">
                    Read More{" "}
                    <img
                      src="petpal/assets/img/icon/right_arrow.svg"
                      alt
                      className="injectable"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-5 order-3">
                <div className="counter__item-wrap">
                  <div className="counter__item">
                    <h2 className="count">
                      <span className="odometer" data-count={15} />+
                    </h2>
                    <p>27 years of experience</p>
                  </div>
                  <div className="counter__item">
                    <h2 className="count">
                      <span className="odometer" data-count={23} />K
                    </h2>
                    <p>Our Beloved Clients</p>
                  </div>
                  <div className="counter__item">
                    <h2 className="count">
                      <span className="odometer" data-count={15} />
                      K+
                    </h2>
                    <p>Real Customer Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="counter__shape">
            <img
              src="petpal/assets/img/images/counter_shape02.png"
              alt="img"
              data-aos="fade-up-left"
              data-aos-delay={400}
            />
          </div>
        </section>
        {/* counter-area-end */}
        {/* brand-area */}
        <div className="brand__area">
          <div className="container">
            <div className="brand__item-wrap">
              <div className="swiper brand-active">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="brand__item">
                      <img
                        src="petpal/assets/img/brand/brand_img01.png"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand__item">
                      <img
                        src="petpal/assets/img/brand/brand_img02.png"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand__item">
                      <img
                        src="petpal/assets/img/brand/brand_img03.png"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand__item">
                      <img
                        src="petpal/assets/img/brand/brand_img04.png"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand__item">
                      <img
                        src="petpal/assets/img/brand/brand_img05.png"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand__item">
                      <img
                        src="petpal/assets/img/brand/brand_img06.png"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand__item">
                      <img
                        src="petpal/assets/img/brand/brand_img07.png"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand__item">
                      <img
                        src="petpal/assets/img/brand/brand_img03.png"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* brand-area-end */}
        {/* team-area */}
        <section className="team__area">
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
                    Meet Our Expertise <br /> Pet Doctors
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
                See All Doctors{" "}
                <img
                  src="petpal/assets/img/icon/right_arrow.svg"
                  alt
                  className="injectable"
                />
              </a>
            </div>
          </div>
          <div className="team__shape">
            <img
              src="petpal/assets/img/team/team_shape.png"
              alt="img"
              className="ribbonRotate"
            />
          </div>
        </section>
        {/* team-area-end */}
        {/* testimonial-area */}
        <section className="testimonial__area">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-8 order-0 order-lg-2">
                <div className="testimonial__img">
                  <div className="mask-img testimonial__img-mask">
                    <img
                      src="petpal/assets/img/images/testimonial_img.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="testimonial__img-shape">
                    <div className="shape-one">
                      <img
                        src="petpal/assets/img/images/testimonial_img_shape.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                    <div className="shape-two">
                      <img
                        src="petpal/assets/img/images/testimonial_shape03.png"
                        alt="img"
                        className="alltuchtopdown"
                      />
                    </div>
                  </div>
                  <div className="review__box">
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
              <div className="col-lg-6">
                <div className="testimonial__item-wrap">
                  <div className="swiper testimonial-active">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="testimonial__item">
                          <div className="testimonial__icon">
                            <img
                              src="petpal/assets/img/icon/quote.svg"
                              alt
                              className="injectable"
                            />
                          </div>
                          <div className="testimonial__content">
                            <h2 className="title">Pet Health Important</h2>
                            <p>
                              “ Duis aute irure dolor in repreerit in voluptate
                              velitesse We understand that your furry aute irure
                              dolor in repreerit in voluptate ute irure dolor in
                              repreerit in voluptate understand that you ”
                            </p>
                            <div className="testimonial__author">
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
                        <div className="testimonial__item">
                          <div className="testimonial__icon">
                            <img
                              src="petpal/assets/img/icon/quote.svg"
                              alt
                              className="injectable"
                            />
                          </div>
                          <div className="testimonial__content">
                            <h2 className="title">Pet Health Important</h2>
                            <p>
                              “ Duis aute irure dolor in repreerit in voluptate
                              velitesse We understand that your furry aute irure
                              dolor in repreerit in voluptate ute irure dolor in
                              repreerit in voluptate understand that you ”
                            </p>
                            <div className="testimonial__author">
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
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial__shape-wrap">
            <img
              src="petpal/assets/img/images/testimonial_shape01.png"
              alt="img"
              data-aos="fade-down-right"
              data-aos-delay={400}
            />
            <img
              src="petpal/assets/img/images/testimonial_shape02.png"
              alt="img"
              data-aos="fade-right"
              data-aos-delay={400}
            />
          </div>
        </section>
        {/* testimonial-area-end */}
        {/* registration-area */}
        <section className="registration__area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="registration__inner-wrap">
                  <h2 className="title">Schedule a visit today!</h2>
                  <div className="shape">
                    <img
                      src="petpal/assets/img/images/registration_shape.svg"
                      alt
                    />
                  </div>
                  <form action="#">
                    <div className="row gutter-15">
                      <div className="col-lg-4 col-md-6">
                        <div className="form-grp">
                          <label htmlFor="name">Name</label>
                          <input
                            id="name"
                            type="text"
                            placeholder="Type Full Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="form-grp select-grp">
                          <label>Pet Type</label>
                          <select name="pet_type" className="orderby">
                            <option value="Select Pet Type">
                              Select Pet Type
                            </option>
                            <option value="Cat">Cat</option>
                            <option value="Dog">Dog</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="form-grp select-grp">
                          <label>Interest In</label>
                          <select name="interest" className="orderby">
                            <option value="Select Service">
                              Select Service
                            </option>
                            <option value="Pet Training">Pet Training</option>
                            <option value="Pet Grooming">Pet Grooming</option>
                            <option value="Care Services">Care Services</option>
                            <option value="Pet Boarding">Pet Boarding</option>
                            <option value="Pet Bath">Pet Bath</option>
                            <option value="Pet Adoption">Pet Adoption</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="form-grp">
                          <label htmlFor="date">Date</label>
                          <input id="date" className="textbox-n" type="date" />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="form-grp">
                          <label htmlFor="time">Time</label>
                          <input id="time" placeholder="08:00 am - 10:00 am" />
                          <i className="flaticon-three-o-clock-clock" />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="form-grp">
                          <label htmlFor="phone">Phone</label>
                          <input
                            id="phone"
                            type="number"
                            placeholder="+123 888 ...."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="submit__btn text-center mt-25">
                      <button type="submit" className="btn">
                        Start a Reservation{" "}
                        <img
                          src="petpal/assets/img/icon/right_arrow.svg"
                          alt
                          className="injectable"
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* registration-area-end */}
        {/* blog-post-area */}
        <section className="blog__post-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
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
              <div className="col-md-4">
                <div className="view__all-btn text-end mb-40">
                  <a href="blog.html" className="btn btn-two">
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
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="blog__post-item shine-animate-item">
                  <div className="blog__post-thumb">
                    <div className="blog__post-mask shine-animate">
                      <a href="blog-details.html">
                        <img
                          src="petpal/assets/img/blog/blog_post01.jpg"
                          alt="img"
                        />
                      </a>
                      <ul className="list-wrap blog__post-tag">
                        <li>
                          <a href="blog.html">Pet</a>
                        </li>
                        <li>
                          <a href="blog.html">Medical</a>
                        </li>
                      </ul>
                    </div>
                    <div className="shape">
                      <img
                        src="petpal/assets/img/blog/blog_img_shape.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                  </div>
                  <div className="blog__post-content">
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
                    <h2 className="title">
                      <a href="blog-details.html">
                        Clean indoor air as important in controlling asthma
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="blog__post-item shine-animate-item">
                  <div className="blog__post-thumb">
                    <div className="blog__post-mask shine-animate">
                      <a href="blog-details.html">
                        <img
                          src="petpal/assets/img/blog/blog_post02.jpg"
                          alt="img"
                        />
                      </a>
                      <ul className="list-wrap blog__post-tag">
                        <li>
                          <a href="blog.html">Care</a>
                        </li>
                      </ul>
                    </div>
                    <div className="shape">
                      <img
                        src="petpal/assets/img/blog/blog_img_shape.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                  </div>
                  <div className="blog__post-content">
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
                    <h2 className="title">
                      <a href="blog-details.html">
                        Clean indoor air as important in controlling asthma
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="blog__post-item shine-animate-item">
                  <div className="blog__post-thumb">
                    <div className="blog__post-mask shine-animate">
                      <a href="blog-details.html">
                        <img
                          src="petpal/assets/img/blog/blog_post03.jpg"
                          alt="img"
                        />
                      </a>
                      <ul className="list-wrap blog__post-tag">
                        <li>
                          <a href="blog.html">Pet Care</a>
                        </li>
                      </ul>
                    </div>
                    <div className="shape">
                      <img
                        src="petpal/assets/img/blog/blog_img_shape.svg"
                        alt
                        className="injectable"
                      />
                    </div>
                  </div>
                  <div className="blog__post-content">
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
                    <h2 className="title">
                      <a href="blog-details.html">
                        Clean indoor air as important in controlling asthma
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog__shape-wrap">
            <img
              src="petpal/assets/img/blog/blog_shape01.png"
              alt="img"
              data-aos="fade-up-right"
              data-aos-delay={400}
            />
            <img
              src="petpal/assets/img/blog/blog_shape02.png"
              alt="img"
              className="ribbonRotate"
            />
          </div>
        </section>
        {/* blog-post-area-end */}
        {/* instagram-area */}
        <div className="instagram__area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="instagram__follow-btn">
                  <a href="https://www.instagram.com/" target="_blank">
                    Follow Us On Instagram
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper instagram-active">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="instagram__item">
                    <a href="https://www.instagram.com/" target="_blank">
                      <img
                        src="petpal/assets/img/instagram/instagram_img01.jpg"
                        alt
                      />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="instagram__item">
                    <a href="https://www.instagram.com/" target="_blank">
                      <img
                        src="petpal/assets/img/instagram/instagram_img02.jpg"
                        alt
                      />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="instagram__item">
                    <a href="https://www.instagram.com/" target="_blank">
                      <img
                        src="petpal/assets/img/instagram/instagram_img03.jpg"
                        alt
                      />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="instagram__item">
                    <a href="https://www.instagram.com/" target="_blank">
                      <img
                        src="petpal/assets/img/instagram/instagram_img04.jpg"
                        alt
                      />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="instagram__item">
                    <a href="https://www.instagram.com/" target="_blank">
                      <img
                        src="petpal/assets/img/instagram/instagram_img05.jpg"
                        alt
                      />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="instagram__item">
                    <a href="https://www.instagram.com/" target="_blank">
                      <img
                        src="petpal/assets/img/instagram/instagram_img03.jpg"
                        alt
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* instagram-area-end */}
      </main>
      {/* main-area-end */}
      {/* footer-area */}
      <footer>
        <div className="footer__area">
          <div className="footer__top fix">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="footer__widget">
                    <div className="footer__logo">
                      <a href="index-2.html">
                        <img src="petpal/assets/img/logo/w_logo.png" alt />
                      </a>
                    </div>
                    <div className="footer__content">
                      <p>
                        555 A, East Manster Street, Ready Halley Neon, Uk 4512
                      </p>
                      <a href="tel:0123456789">+00 123 45678 44</a>
                      <a href="mailto:Supportinfo@gmail.com">
                        Supportinfo@gmail.com
                      </a>
                    </div>
                    <div className="footer__social">
                      <h6 className="title">Follow Us On:</h6>
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
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                  <div className="footer__widget">
                    <h4 className="footer__widget-title">Quick Links</h4>
                    <div className="footer__link">
                      <ul className="list-wrap">
                        <li>
                          <a href="animal.html">Animal Rescue</a>
                        </li>
                        <li>
                          <a href="contact.html">Humane Education</a>
                        </li>
                        <li>
                          <a href="animal-details.html">Animal Hospital</a>
                        </li>
                        <li>
                          <a href="animal.html">Street Animal Feeding</a>
                        </li>
                        <li>
                          <a href="index-2.html">Homepage 01</a>
                        </li>
                        <li>
                          <a href="pricing.html">Pricing Table</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="footer__widget">
                    <h4 className="footer__widget-title">Opening Hours</h4>
                    <div className="footer__link">
                      <ul className="list-wrap">
                        <li>
                          Monday <span>8.00 - 21.00</span>
                        </li>
                        <li>
                          Tuesday <span>8.00 - 21.00</span>
                        </li>
                        <li>
                          Thursday <span>8.00 - 21.00</span>
                        </li>
                        <li>
                          Friday <span>8.00 - 21.00</span>
                        </li>
                        <li>
                          Saturday <span>8.00 - 21.00</span>
                        </li>
                        <li>
                          Sunday <span>8.00 - 21.00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="footer__widget">
                    <div className="footer__newsletter">
                      <h2 className="title">Subscribe to our newsletter</h2>
                      <div className="shape">
                        <img
                          src="petpal/assets/img/images/footer_newsletter_shape.svg"
                          alt
                          className="injectable"
                        />
                      </div>
                      <form action="#">
                        <input
                          id="email"
                          type="email"
                          placeholder="Type Your E-mail"
                        />
                        <button className="btn" type="submit">
                          Subscribe Now
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__shape-wrap">
              <img
                src="petpal/assets/img/images/footer_shape01.png"
                alt="img"
                data-aos="fade-up-right"
                data-aos-delay={400}
              />
              <img
                src="petpal/assets/img/images/footer_shape02.png"
                alt="img"
                data-aos="fade-up-left"
                data-aos-delay={400}
              />
            </div>
          </div>
          <div className="footer__bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="footer__bottom-menu">
                    <ul className="list-wrap">
                      <li>
                        <a href="contact.html">Support</a>
                      </li>
                      <li>
                        <a href="contact.html">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a href="contact.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="contact.html">Career</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="copyright-text text-end">
                    <p>Copyright © 2024. All Rights Reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer-area-end */}
    </>
  );
}
export default Index;
