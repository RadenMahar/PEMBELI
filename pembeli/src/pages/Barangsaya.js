import React from "react";
import Home from "./Home";
import { actions } from "../store";
import { connect } from "unistore/react";
import Header from "../components/Headeritem";
import axios from "axios";

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    axios
      .get("http://api.raden.top/barang/barangpelapak")
      .then(response => {
        this.props.setData(response.data);
        console.log(response);
      })
      .catch(error => {
        console.log("terdapat eror ini :", error);
      });
  };

  render() {
    return (
      <div>
        <Header />
        <div class="container">
          <div class="row">
            {this.props.data.map((value, index) => {
              if (
                value.username_pelapak === localStorage.getItem("user_name")
              ) {
                return (
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                    key={index}
                  >
                    <div className="col-md-4">
                      <img
                        src={value.image_barang}
                        class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                        alt=""
                      />
                    </div>
                    <div className="col-md-8">
                      <h4>{value.nama_barang}</h4>
                      <h5>{value.tipe_barang}</h5>
                      <br />
                      <h6>{value.tahun_barang}</h6>
                      <br />
                      <p>
                        <strong>{value.username_pelapak}</strong>
                      </p>
                      <br />
                      <p>{value.deskripsi_barang}</p>
                    </div>
                  </a>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "data, user_name",
  actions
)(Item);

// if(this.match.params.source_name === this.props.values.Category)
