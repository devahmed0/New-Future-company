import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import brand from "../img/h-main-parallax-2.jpg";
import brand1 from "../img/about-img.jpg";
import { Link } from "react-router-dom";

const Mainslider = () => {
  const options = {
    loop: true,
    autoplay: true,
    animateOut: "slideOutDown",
    animateIn: "flipInX",
    dots: false,
    nav: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <>
      <div className="slider-area">
        <div className="tractor-main-slider">
          <OwlCarousel className="owl-carousel owl-theme" {...options}>
            <div className="tractor-single-slider  ">
            <img src={brand} alt="logo"  className="img-fluid4" />
              <div className="tractor-single-table">
                <div className="tractor-single-tablecell">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <h1>
                          tr<span>a</span>ct<span>o</span>ur <br />
                          choice for industry
                        </h1>
                        <p>
                          lorem ipsum dolor sit amt, consectet adop adipisicing
                          elit, sed do eiusmod
                          <br />
                          teporara incididunt ugt labore.
                        </p>
                        <Link href="#" className="btn btn-type-1">
                          our services
                        </Link>
                        <Link href="#" className="btn btn-type-2">
                          purchase now
                        </Link>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tractor-single-slider  ">
            <img src={brand1} alt="logo"  className="img-fluid4" />

              <div className="tractor-single-table">
                <div className="tractor-single-tablecell">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <h1>
                          tr<span>a</span>ct<span>o</span>ur <br />
                          choice for industry
                        </h1>
                        <p>
                          lorem ipsum dolor sit amt, consectet adop adipisicing
                          elit, sed do eiusmod
                          <br />
                          teporara incididunt ugt labore.
                        </p>
                        <Link href="#" className="btn btn-type-1">
                          our services
                        </Link>
                        <Link href="#" className="btn btn-type-2">
                          purchase now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default Mainslider;
