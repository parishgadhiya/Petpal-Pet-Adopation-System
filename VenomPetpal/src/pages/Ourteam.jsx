import React from 'react'
import { Link } from "react-router-dom";
import Nav from '../components/navbar'
import Footer from "../components/footer"
function Ourteam() {
  return (
    <>
      <Nav />
      <main className="fix">
        {/* breadcrumb-area */}
        <section className="breadcrumb__area fix">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8">
                <div className="breadcrumb__content">
                  <h3 className="title">Team Members</h3>
                  <nav className="breadcrumb">
                    <span property="itemListElement" typeof="ListItem">
                      <Link to="/PetCare">Home</Link>
                    </span>
                    <span className="breadcrumb-separator">
                      <i className="flaticon-right-arrow-angle" />
                    </span>
                    <span property="itemListElement" typeof="ListItem">
                      Team
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
        {/* team-area */}
        <section className="team__area-three">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="team__item">
                  <div className="team__item-img">
                    <div className="mask-img-wrap">
                      <img src="petpal/assets/img/team/team_img01.jpg" alt="img" />
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
                      <img src="petpal/assets/img/team/team_img02.jpg" alt="img" />
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
                      <img src="petpal/assets/img/team/team_img03.jpg" alt="img" />
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
                      <img src="petpal/assets/img/team/team_img04.jpg" alt="img" />
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="team__item">
                  <div className="team__item-img">
                    <div className="mask-img-wrap">
                      <img src="petpal/assets/img/team/team_img05.jpg" alt="img" />
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
                      <a href="team-details.html">Savannah Nguyen</a>
                    </h4>
                    <span>Medicine Specialist</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="team__item">
                  <div className="team__item-img">
                    <div className="mask-img-wrap">
                      <img src="petpal/assets/img/team/team_img06.jpg" alt="img" />
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
                      <a href="team-details.html">Guy Hawkins</a>
                    </h4>
                    <span>Food Technician</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="team__item">
                  <div className="team__item-img">
                    <div className="mask-img-wrap">
                      <img src="petpal/assets/img/team/team_img07.jpg" alt="img" />
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
                      <a href="team-details.html">Esther Howard</a>
                    </h4>
                    <span>Food Technician</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="team__item">
                  <div className="team__item-img">
                    <div className="mask-img-wrap">
                      <img src="petpal/assets/img/team/team_img08.jpg" alt="img" />
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
                      <a href="team-details.html">Wade Warren</a>
                    </h4>
                    <span>Veterinary Technician</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* team-area-end */}
        {/* brand-area */}
        <div className="brand__area-five">
          <div className="container">
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
      </main>

      <Footer />
    </>
  );
}
export default Ourteam;
