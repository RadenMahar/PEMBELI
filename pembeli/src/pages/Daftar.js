import React from "react";
import image from "../static/img/daftarpembeli.png";
import axios from "axios";
import { Link } from "react-router-dom";

class Daftar extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    nama_pembeli: "",
    user_name: "",
    contact_pembeli: "",
    email_pembeli: "",
    password_pembeli: ""
  };

  changeInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  postLogin = () => {
    const {
      nama_pembeli,
      user_name,
      contact_pembeli,
      email_pembeli,
      password_pembeli
    } = this.state;

    console.log("INI STATEKU", this.state);

    const req = {
      method: "post",
      url: "http://api.pembeli.raden.top/pembeli",
      headers: {},
      data: {
        nama_pembeli: nama_pembeli,
        user_name: user_name,
        contact_pembeli: contact_pembeli,
        email_pembeli: email_pembeli,
        password_pembeli: password_pembeli
      }
    };

    axios(req)
      .then(response => {
        console.log("Ini data ku", response.data);
      })
      .catch(error => {
        console.log("ini Error", error);
      });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 mt-5">
              <form onSubmit={e => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="exampleInputNama">Nama Lenkap</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    name="nama_pembeli"
                    id="exampleInputEmail1"
                    placeholder="Nama Lengkap"
                    ref="namapembeli"
                    onChange={e => this.changeInput(e)}
                  />
                  <small id="emailHelp" class="form-text text-muted" />
                </div>
                <div class="form-group">
                  <label htmlFor="exampleInputNama">Username</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    name="user_name"
                    id="exampleInputEmail1"
                    placeholder="Username"
                    ref="username"
                    onChange={e => this.changeInput(e)}
                  />
                  <small id="emailHelp" class="form-text text-muted" />
                </div>
                <div class="form-group">
                  <label htmlFor="exampleInputNama">Contact</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    name="contact_pembeli"
                    id="exampleInputEmail1"
                    placeholder="Contact"
                    ref="contact"
                    onChange={e => this.changeInput(e)}
                  />
                  <small id="emailHelp" class="form-text text-muted" />
                </div>
                <div class="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    required
                    type="email"
                    class="form-control"
                    name="email_pembeli"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    ref="email"
                    onChange={e => this.changeInput(e)}
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    name="password_pembeli"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    ref="password"
                    onChange={e => this.changeInput(e)}
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
                <Link to="/masuk">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={() => this.postLogin()}
                  >
                    Submit
                  </button>
                </Link>
              </form>
            </div>
            <div className="col-md-8 text-center">
              <img className="registergambar" src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Daftar;
