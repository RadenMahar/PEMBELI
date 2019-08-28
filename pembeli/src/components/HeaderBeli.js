import React from "react";
import header_logo from "../static/img/deal.png";
import cart from "../static/img/cart.svg";
import { actions } from "../store";
import { connect } from "unistore/react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
// import "../styles/style.css";

function Header(props) {
  return (
    <div>
      <div className="container-fluid">
        <div className="row bg-light">
          <div className="col-md-4">
            <img src={header_logo} alt="" />
          </div>
          <div className="col-md-4 mt-2"></div>
          <div className="col-md-4 mt-2 text-right">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link
                      to="/chart"
                      class="btn btn-outline-transparent mt-1 btn-space"
                      href="#"
                      role="button"
                    >
                      <img src={cart} alt="" className="cart"></img>{" "}
                      <span class="badge badge-danger">
                        {props.chart.length}
                      </span>
                    </Link>
                    <span> </span>
                    <Link
                      to="/beranda"
                      class="btn btn-outline-info mt-1 btn-space"
                      href="#"
                      role="button"
                    >
                      Beranda <i class="icon-home" />
                    </Link>
                    <span> </span>
                    <Link
                      to="/profil"
                      class="btn btn-outline-info mt-1 btn-space"
                      href="#"
                      role="button"
                    >
                      profile <i class="icon-male" />
                    </Link>
                    <span> </span>
                    <Link
                      to="/"
                      class="btn btn-outline-info mt-1 btn-space"
                      href="#"
                      role="button"
                      onClick={() => props.handleSignOut()}
                    >
                      Keluar <i class="icon-signout" />
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(
  "chart",
  actions
)(withRouter(Header));
