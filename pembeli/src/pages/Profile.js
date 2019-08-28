import React from "react";
import Header from "../components/Headerberanda";
import { actions } from "../store";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import Tesla from "../static/img/tesla.jpg";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSignOut = () => {
    this.props.setLogin("false");
    console.log("ini login", this.props.is_login);
    this.props.history.replace("/");
  };

  render() {
    return (
      <div>
        <Header handleSignOut={this.handleSignOut} />
        <div className="container">
          <div className="row justify-content-center mt-3">
            <div className="col-md-8">
              <div class="card mb-3">
                <img class="card-img-top" src={Tesla} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">My Profile</h5>
                  <p class="card-text">
                    <i class="icon-chevron-sign-right" />{" "}
                    {/* {this.props.nama_pelapak} */}
                    {localStorage.getItem("id_pembeli")}
                  </p>
                  <p class="card-text">
                    <i class="icon-chevron-sign-right" />{" "}
                    {/* {this.props.nama_pelapak} */}
                    {localStorage.getItem("nama_pembeli")}
                  </p>
                  <p class="card-text">
                    <i class="icon-chevron-sign-right" />{" "}
                    {localStorage.getItem("user_name")}
                    {/* {this.props.user_name} */}
                  </p>
                  <p class="card-text">
                    <i class="icon-chevron-sign-right" />{" "}
                    {/* {this.props.alamat_pelapak} */}
                    {localStorage.getItem("contact_pembeli")}
                  </p>
                  <p class="card-text">
                    <i class="icon-chevron-sign-right" />{" "}
                    {/* {this.props.contact_pelapak} */}
                    {localStorage.getItem("email_pembeli")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "nama_pelapak, idktp_pelapak, user_name, alamat_pelapak, contact_pelapak, kelamin_pelapak, email_pelapak",
  actions
)(withRouter(Profile));
