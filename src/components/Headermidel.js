import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import brand from "../img/logo.jpg";
import { Link } from "react-router-dom";
const Headermidel = () => {
  const options = {
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <>
      <div className="header-middle-area sec-p-30">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="header-middle-logo">
                <Link to='/'>
                  <img src={brand} alt="logo" className="logo" />
                </Link>
              </div>
            </div>

            <div className="col-md-7">
              <ul className="header-middle-short-info">
                <OwlCarousel
                  className=" owl-carousel owl-theme float-right"
                  {...options}
                >
                  <li>
                    <i className="fa fa-phone"></i>
                    <div className="short-info">
                      phone number:
                      <h4>00-123-123-4567</h4>
                    </div>
                  </li>

                  <li>
                    <i className="fa fa-at"></i>
                    <div className="short-info">
                      email address:
                      <h4>bd@tractour.com</h4>
                    </div>
                  </li>

                  <li>
                    <i className="fa fa-map-marker"></i>
                    <div className="short-info">
                      address location:
                      <h4>25737 UK Rt 11, BL 22</h4>
                    </div>
                  </li>
                </OwlCarousel>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headermidel;
