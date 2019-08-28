import React from "react";
import header_logo from "../static/img/Tambahkan.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

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
                      to="/profil"
                      class="btn btn-outline-info mt-1 btn-space"
                      href="#"
                      role="button"
                    >
                      Profil <i class="icon-male" />
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link
                      to="/tambah"
                      class="btn btn-outline-info mt-1 btn-space"
                      href="#"
                      role="button"
                    >
                      Tambahkan <i class="icon-plus" />
                    </Link>
                  </li>
                  <span class="caret" />
                  <li className="nav-item">
                    <Link
                      to="/mobil"
                      class="btn btn-outline-info mt-1 btn-space"
                      href="#"
                      role="button"
                    >
                      Milik Saya <i class="icon-sitemap" />
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

export default withRouter(Header);
