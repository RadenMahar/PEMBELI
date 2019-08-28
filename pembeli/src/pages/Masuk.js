import React from "react";
import { actions } from "../store";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Image from "../static/img/loginpembeli.png";

class Masuk extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { email_pembeli: null, password_pembeli: null };

  changeInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  postLogin = () => {
    const { email_pembeli, password_pembeli } = this.state;

    const req = {
      method: "post",
      url: "http://api.pembeli.raden.top/login",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        email_pembeli: email_pembeli,
        password_pembeli: password_pembeli
      }
    };

    const self = this;
    axios(req)
      .then(function(response) {
        self.props.setToken(response.data.token);
        console.log("data ku", response.data);
        console.log("my token", response.data.token);
        localStorage.setItem("Barier", response.data.token);
        console.log("my bearer", self.props.Bearer);
        if (response.data.pembeli.hasOwnProperty("status")) {
          localStorage.setItem(
            "nama_pembeli",
            response.data.pembeli.nama_pembeli
          );
          localStorage.setItem("user_name", response.data.pembeli.user_name);

          localStorage.setItem(
            "contact_pembeli",
            response.data.pembeli.contact_pembeli
          );
          localStorage.setItem(
            "email_pembeli",
            response.data.pembeli.email_pembeli
          );
          localStorage.setItem("id_pembeli", response.data.pembeli.id_pembeli);
          localStorage.setItem("status", response.data.pembeli.status);

          self.props.setId(response.data.pembeli.id_pembeli);
          self.props.setNama(response.data.pembeli.nama_pembeli);
          self.props.setUser(response.data.pembeli.user_name);
          self.props.setContact(response.data.pembeli.contact_pembeli);
          self.props.setEmail(response.data.pembeli.email_pembeli);
          self.props.setLogin(response.data.pembeli.status);
          self.props.history.push("/beranda");
        }
      })
      .catch(function(error) {
        console.log("ASEM1", error);
      });
    //   .then(response => {
    //     console.log(response.data);
    //     console.log(this.props.is_login);
    //     if (response.data.hasOwnProperty("status")) {
    //       this.props.setLogin(true);
    //       this.props.setEmail(this.state.Email);
    //       this.props.setName(this.state.password);
    //       this.props.history.push("/news");
    //     }
    //   })
    //   .catch(error => {
    //     console.log("ini Error", error);
    //   });
  };

  render() {
    console.log("ini props", this.props);
    console.log("is_login");
    console.log("state", this.state);
    return (
      <div>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-8 text-center">
              <img src={Image} alt="" className="Login" />
            </div>
            <div className="col-md-4 login">
              <form onSubmit={e => e.preventDefault()}>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    name="email_pembeli"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={e => this.changeInput(e)}
                    required
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    name="password_pembeli"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={e => this.changeInput(e)}
                    required
                  />
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={() => this.postLogin()}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "Bearer",
  actions
)(withRouter(Masuk));
