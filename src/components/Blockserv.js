import React from "react";
import img1 from "../img/blocks/block-1.jpg";
import img2 from "../img/blocks/block-2.jpg";
import img3 from "../img/blocks/block-3.jpg";
const Blockserv = () => {
  return (
    <>
      <div className="blocks-services-area text-center mb-100 minus-t-100 wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="single-blocks-services">
                <div className="single-blocks-img">
                  <img src={img1} alt="img-1" className="img-fluid" />
                </div>
                <h3>
                  <a href="#">welding machine using</a>
                </h3>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demor
                </p>
                <a href="#" className="btn">
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single-blocks-services">
                <div className="single-blocks-img">
                  <img src={img3} alt="img-2" className="img-fluid1" />
                </div>
                <h3>
                  <a href="#">new compost technology</a>
                </h3>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demor
                </p>
                <a href="#" className="btn">
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single-blocks-services">
                <div className="single-blocks-img">
                  <img src={img2} alt="img-3" className="img-fluid" />
                </div>
                <h3>
                  <a href="#">new welding machine</a>
                </h3>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demor
                </p>
                <a href="#" className="btn">
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blockserv;
