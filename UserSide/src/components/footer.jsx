import React from 'react'
import { Link } from "react-router-dom";
function Footer() {
  return (

    <footer>
      <div className="footer__area">
        <div className="footer__top footer__top-three fix">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer__widget">
                  <div className="footer__logo">
                    <Link to="/Index"><img src="/petpal/assets/img/logo/w_logo.png" alt="" /></Link>
                  </div>
                  <div className="footer__content footer__content-two">
                    <p>Duis aute irure dolor in repreerit in voluptate velitesse We understand that your furry friend tred member</p>
                  </div>
                  <div className="footer__social">
                    <h6 className="title">Follow Us On:</h6>
                    <ul className="list-wrap">
                      <li><a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter" /></a></li>
                      <li><a href="https://www.whatsapp.com/" target="_blank"><i className="fab fa-whatsapp" /></a></li>
                      <li><a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram" /></a></li>
                      <li><a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <h4 className="footer__widget-title">Quick Links</h4>
                  <div className="footer__link">
                    <ul className="list-wrap">
                      <li><Link to="/Pets">Animal Rescue</Link></li>
                      <li><Link to="/contact">Humane Education</Link></li>
                      <li><Link to="/contact">Caregivers</Link></li>
                      <li><Link to="/Blogdetails">New &amp; Blog</Link></li>
                      <li><Link to="/Gallery">Gallery</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <h4 className="footer__widget-title">Support</h4>
                  <div className="footer__link">
                    <ul className="list-wrap">
                      <li><Link to="/About">About us</Link></li>
                      <li><Link to="/contact">Contact us</Link></li>
                      <li><Link to="/contact">Book Appointment</Link></li>
                      <li><Link to="/contact">FAQ</Link></li>
                      <li><Link to="/contact">Locations</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <h4 className="footer__widget-title">Contact</h4>
                  <div className="footer__contact">
                    <ul className="list-wrap">
                      <li>Sindhu bhavan, Ahmedabad</li>
                      <li><a href="tel:0123456789">+919998452631</a></li>
                      <li><a href="mailto:petpal@gmail.com">petpal@gmail.com</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__shape-wrap">
            <img src="/petpal/assets/img/images/footer_shape01.png" alt="img" data-aos="fade-up-right" data-aos-delay={400} />
            <img src="/petpal/assets/img/images/footer_shape02.png" alt="img" data-aos="fade-up-left" data-aos-delay={400} />
          </div>
        </div>
        <div className="footer__bottom footer__bottom-two">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="copyright-text copyright-text-three">
                  <p>Copyright © 2026. All Rights Reserved.</p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="footer__bottom-menu footer__bottom-menu-two">
                  <ul className="list-wrap">
                    <li><Link to="/contact">Support</Link></li>
                    <li><Link to="/contact">Terms &amp; Conditions</Link></li>
                    <li><Link to="/contact">Privacy Policy</Link></li>
                    <li><Link to="/contact">Career</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer