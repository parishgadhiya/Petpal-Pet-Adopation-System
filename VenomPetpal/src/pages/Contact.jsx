import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { db } from "../firebaseconfig";
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import Nav from '../components/navbar'
import Footer from "../components/footer"
import useAuthCheck from "../hooks/useAuthCheck";
function Contact() {
  const { checkAuth } = useAuthCheck();

  const handleSubmit = (e) => {
    if (!checkAuth("send a message")) {
      e.preventDefault();
      return;
    }
  };


  return (
    <>
      <div>
        {/* Scroll-top */}
        <button className="scroll__top scroll-to-target" data-target="html">
          <i className="fas fa-angle-up" />
        </button>
        {/* Scroll-top-end*/}
        {/* header-area */}
        <Nav />
        {/* header-area-end */}
        {/* main-area */}
        <main className="fix">
          {/* breadcrumb-area */}
          <section className="breadcrumb__area fix">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-8">
                  <div className="breadcrumb__content">
                    <h3 className="title">Contact Page</h3>
                    <nav className="breadcrumb">
                      <span property="itemListElement" typeof="ListItem">
                        <Link to="/PetCare">Home</Link>
                      </span>
                      <span className="breadcrumb-separator">
                        <i className="flaticon-right-arrow-angle" />
                      </span>
                      <span property="itemListElement" typeof="ListItem">
                        Contact
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
          {/* contact-area */}
          <section className="contact__area">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="contact__content">
                    <div className="section__title mb-30">
                      <h2 className="title">
                        We Are Always Available For You &amp; Your Pets
                      </h2>
                      <p>
                        Maecenas quis viverra metus, et efficitur ligula. Nam
                        coueaugue congue sed luctus lectus conIn onondimentum .
                      </p>
                    </div>
                    <div className="contact__info-wrap">
                      <h6 className="title">Information:</h6>
                      <ul className="list-wrap">
                        <li>
                          <div className="icon">
                            <i className="flaticon-phone" />
                          </div>
                          <a href="tel:0123456789">+911236547890</a>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="flaticon-placeholder" />
                          </div>
                          Sindhu Bhavan Road, Ahmedabad, Gujarat 380058
                        </li>
                        <li>
                          <div className="icon">
                            <i className="flaticon-mail" />
                          </div>
                          <a href="mailto:info@gmail.com">petpal@gmail.com</a>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fas fa-share-alt" />
                          </div>
                          <ul className="list-wrap contact__social">
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
                              <a
                                href="https://www.instagram.com/"
                                target="_blank"
                              >
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
                <div className="col-lg-7">
                  <div className="contact__form-wrap">
                    <form
                      action="https://getform.io/f/aqoqeqna"
                      method="POST"
                      onSubmit={handleSubmit}
                      className="contact__form"

                    >
                      <h2 className="title">Post a comment</h2>
                      <span>
                        Your email address will not be published. Required fields
                        are marked *
                      </span>

                      <div className="row gutter-20">
                        <div className="col-md-6">
                          <div className="form-grp">
                            <input
                              type="text"
                              name="name"
                              placeholder="Name"
                              required
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-grp">
                            <input
                              type="email"
                              name="email"
                              placeholder="E-mail"
                              required
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-grp">
                            <input
                              type="text"
                              name="website"
                              placeholder="Website"
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-grp">
                            <textarea
                              type="text"
                              name="message"
                              placeholder="Message"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <button type="submit" className="btn">
                        Send Us Message
                      </button>
                    </form>

                    <p className="ajax-response mb-0" />
                  </div>
                </div>
              </div>
              {/* contact-map */}
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.488230934611!2d72.47327938983163!3d23.04255559939036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b799eeba2e1%3A0x5c704afb0523cfc7!2sSindhu%20Bhavan%20Rd%2C%20Bopal%2C%20Ahmedabad%2C%20Gujarat%20380058!5e0!3m2!1sen!2sin!4v1773569010232!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              {/* contact-map-end */}
            </div>
          </section>
          {/* contact-area-end */}
        </main>
        {/* main-area-end */}
        {/* footer-area */}
        <Footer />
      </div>
    </>
  );
}

export default Contact;
