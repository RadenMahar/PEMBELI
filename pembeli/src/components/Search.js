import React from "react";
import axios from "axios";
import { actions } from "../store";
import { connect } from "unistore/react";
import "../static/css/styles.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  //menangkap value dari form search
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = async event => {
    const self = this;
    event.preventDefault();
    {
      if (this.state.value.length > 2) {
        try {
          const req = {
            method: "get",
            url: "http://api.pembeli.raden.top/barang/search",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("Barier")
            },
            params: {
              katakunci: this.state.value
            }
          };
          const response = await axios(req);
          self.props.setData(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  render() {
    return (
      <div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-5 col-md-offset-3 text-center">
              <nav class="navbar navbar-light bg-transparent">
                <form class="form-inline" onSubmit={this.handleSubmit}>
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "chart",
  actions
)(Search);
