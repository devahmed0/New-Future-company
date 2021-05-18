import React from "react";
import secimg from "../img/separ-logo.png";
import proimg1 from "../img/project/project-1.jpg";
import proimg2 from "../img/project/project-2.jpg";
import proimg3 from "../img/project/project-3.jpg";
import proimg4 from "../img/project/project-4.jpg";
import proimg5 from "../img/project/project-5.jpg";
import proimg6 from "../img/project/project-6.jpg";
import proimg7 from "../img/project/project-7.jpg";
import proimg8 from "../img/project/project-8.jpg";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <>
      <div className="project-area bg-color3 sec-p-100 text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="section-title text-center mb-70">
                <h2>projects</h2>
                <span>
                  <img src={secimg} alt="separetor" />
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor ncc msm lal uFlaboreLorem ipsum dolor sit
                  amet,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="project-wraper">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="single-project">
                  <img src={proimg1} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <Link to="">
                      <h3>automated machine systems</h3>
                    </Link>
                    <Link className="btn" to="">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="single-project">
                  <img src={proimg2} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <Link to="">
                      <h3>bridge making technology</h3>
                    </Link>
                    <Link className="btn" to="">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="single-project">
                  <img src={proimg3} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <Link to="">
                      <h3>gas energy saving system</h3>
                    </Link>
                    <Link className="btn" to="">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="single-project">
                  <img src={proimg4} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <Link to="">
                      <h3>latest welding technology</h3>
                    </Link>
                    <Link className="btn" to="">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer-20"></div>

            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="single-project">
                  <img src={proimg5} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <Link to="">
                      <h3>future architecture ideas</h3>
                    </Link>
                    <Link className="btn" to="">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="single-project">
                  <img src={proimg6} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <Link to="">
                      <h3>reusable power system</h3>
                    </Link>
                    <Link className="btn" to="">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="single-project">
                  <img src={proimg7} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <Link to="">
                      <h3>gas saving system</h3>
                    </Link>
                    <Link className="btn" to="">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="single-project">
                  <img src={proimg8} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <Link to="">
                      <h3>best talented engineer</h3>
                    </Link>
                    <Link className="btn" to="">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="" className="btn btn-type-5 mt-30">
          more
        </Link>
      </div>
    </>
  );
};

export default Projects;
