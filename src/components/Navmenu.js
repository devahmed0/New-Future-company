import React from "react";
import { Link } from "react-router-dom";

const Navmenu = () => {
  return (
    <>
      <div className="main-menu-area">
        <div className="container">
          <div className="main-menu-border bg-color3">
            <div className="row">
              <div className="col-12">
                <div className="tractour-main-menu-area">
                  <div className="search-area">
                    <div className="header-search-bar">
                      <form>
                        <input type="search" placeholder="keywords ..." />
                      </form>
                    </div>
                  </div>

                  <nav className="navbar navbar-expand-xl navbar-light main-menu">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav mr-auto ml-auto">
                        <li className="nav-item active">
                          <Link
                            className="nav-link"
                            to="/"
                          >
                            Home
                          </Link>
                        </li>
                       
                        <li className="nav-item active">
                          <Link
                            className="nav-link"
                            to="/Project"
                          >
                            Projects
                          </Link>
                        </li>
                        <li className="nav-item active">
                          <Link
                            className="nav-link"
                            to={`${process.env.PUBLIC_URL + "/Project"}`}
                          >
                            About US
                          </Link>
                        </li>
                        <li className="nav-item active">
                          <Link
                            className="nav-link"
                            to= "/Contact"
                          >
                            Contact US
                          </Link>
                        </li>
                       
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navmenu;
