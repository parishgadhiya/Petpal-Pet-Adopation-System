import React from 'react'
import { Link } from "react-router-dom";
import Nav from '../components/navbar'
import Footer from "../components/footer"
function Gallery() {
  return (
    <>
     
        <button className="scroll__top scroll-to-target" data-target="html">
          <i className="fas fa-angle-up" />
        </button>
        {/* Scroll-top-end*/}
        {/* header-area */}
        <Nav/>
        {/* header-area-end */}
        {/* main-area */}
        <main className="fix">
          {/* breadcrumb-area */}
          <section className="breadcrumb__area fix">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-8">
                  <div className="breadcrumb__content">
                    <h3 className="title">Our Gallery</h3>
                    <nav className="breadcrumb">
                      <span property="itemListElement" typeof="ListItem">
                        <Link to="/PetCare">Home</Link>
                      </span>
                      <span className="breadcrumb-separator">
                        <i className="flaticon-right-arrow-angle" />
                      </span>
                      <span property="itemListElement" typeof="ListItem">
                        Gallery
                      </span>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="breadcrumb__img">
                    <img
                      src="petpal/assets/img/images/breadcrumb_img.png"
                      alt="img"
                      data-aos="fade-left"
                      data-aos-delay={800}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="breadcrumb__shape-wrap">
              <img
                src="petpal/assets/img/images/breadcrumb_shape01.png"
                alt="img"
                data-aos="fade-down-right"
                data-aos-delay={400}
              />
              <img
                src="petpal/assets/img/images/breadcrumb_shape02.png"
                alt="img"
                data-aos="fade-up-left"
                data-aos-delay={400}
              />
            </div>
          </section>
          {/* breadcrumb-area-end */}
          {/* gallery-area */}
          <div className="gallery__area">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="gallery__item">
                    <div className="gallery__img">
                      <img
                        src="petpal/assets/img/gallery/gallery_img01.jpg"
                        alt="img"
                      />
                    </div>
                    <a
                      href="petpal/assets/img/gallery/gallery_img01.jpg"
                      className="popup-image"
                    >
                      <img
                        src="petpal/assets/img/icon/popup_icon.svg"
                        alt
                        className="injectable"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="gallery__item">
                    <div className="gallery__img">
                      <img
                        src="petpal/assets/img/gallery/gallery_img02.jpg"
                        alt="img"
                      />
                    </div>
                    <a
                      href="petpal/assets/img/gallery/gallery_img02.jpg"
                      className="popup-image"
                    >
                      <img
                        src="petpal/assets/img/icon/popup_icon.svg"
                        alt
                        className="injectable"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="gallery__item">
                    <div className="gallery__img">
                      <img
                        src="petpal/assets/img/gallery/gallery_img03.jpg"
                        alt="img"
                      />
                    </div>
                    <a
                      href="petpal/assets/img/gallery/gallery_img03.jpg"
                      className="popup-image"
                    >
                      <img
                        src="petpal/assets/img/icon/popup_icon.svg"
                        alt
                        className="injectable"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="gallery__item">
                    <div className="gallery__img">
                      <img
                        src="petpal/assets/img/gallery/gallery_img04.jpg"
                        alt="img"
                      />
                    </div>
                    <a
                      href="petpal/assets/img/gallery/gallery_img04.jpg"
                      className="popup-image"
                    >
                      <img
                        src="petpal/assets/img/icon/popup_icon.svg"
                        alt
                        className="injectable"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="gallery__item">
                    <div className="gallery__img">
                      <img
                        src="petpal/assets/img/gallery/gallery_img05.jpg"
                        alt="img"
                      />
                    </div>
                    <a
                      href="petpal/assets/img/gallery/gallery_img05.jpg"
                      className="popup-image"
                    >
                      <img
                        src="petpal/assets/img/icon/popup_icon.svg"
                        alt
                        className="injectable"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="gallery__item">
                    <div className="gallery__img">
                      <img
                        src="petpal/assets/img/gallery/gallery_img06.jpg"
                        alt="img"
                      />
                    </div>
                    <a
                      href="petpal/assets/img/gallery/gallery_img06.jpg"
                      className="popup-image"
                    >
                      <img
                        src="petpal/assets/img/icon/popup_icon.svg"
                        alt
                        className="injectable"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="gallery__item">
                    <div className="gallery__img">
                      <img
                        src="petpal/assets/img/gallery/gallery_img07.jpg"
                        alt="img"
                      />
                    </div>
                    <a
                      href="petpal/assets/img/gallery/gallery_img07.jpg"
                      className="popup-image"
                    >
                      <img
                        src="petpal/assets/img/icon/popup_icon.svg"
                        alt
                        className="injectable"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="gallery__item">
                    <div className="gallery__img">
                      <img
                        src="petpal/assets/img/gallery/gallery_img08.jpg"
                        alt="img"
                      />
                    </div>
                    <a
                      href="petpal/assets/img/gallery/gallery_img08.jpg"
                      className="popup-image"
                    >
                      <img
                        src="petpal/assets/img/icon/popup_icon.svg"
                        alt
                        className="injectable"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="gallery__item">
                    <div className="gallery__img">
                      <img
                        src="petpal/assets/img/gallery/gallery_img09.jpg"
                        alt="img"
                      />
                    </div>
                    <a
                      href="petpal/assets/img/gallery/gallery_img09.jpg"
                      className="popup-image"
                    >
                      <img
                        src="petpal/assets/img/icon/popup_icon.svg"
                        alt
                        className="injectable"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* gallery-area-end */}
        </main>
        {/* main-area-end */}
        {/* footer-area */}
        <Footer />
        {/* footer-area-end */}
    
    </>
  );
}
export default Gallery;
