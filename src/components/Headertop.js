import React from "react";
import { Link} from "react-router-dom";

const Headertop = () => {
  return (
    <>
      <div className="header-top-area  text-center sec-p-30">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tractor-lang float-left">
                <select name="select" id="lang-typ" className="tractor-lang">
                  <option>english</option>
                  <option>عربي</option>
                 </select>
              </div>

              <ul className="header-top-social">
                <li>
                  <Link to="#">
                    <i className="fa fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-skype"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-behance"></i>
                  </Link>
                </li>
              </ul>
              <div className="quote-btn float-right ">
                <Link to="#" className="btn btn-type-4">
                Order now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headertop;
