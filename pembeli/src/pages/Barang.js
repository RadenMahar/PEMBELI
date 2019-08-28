import React from "react";
import { actions } from "../store";
import { connect } from "unistore/react";
import { Link } from "react-router-dom";
import axios from "axios";

class Barang extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = async () => {
    const self = this;
    const req = {
      method: "get",
      url: "http://api.pembeli.raden.top/barang/semuabarang",
      headers: {
        // Authorization: "Bearer " + localStorage.getItem("Barier")
      }
    };
    await axios(req)
      .then(response => {
        self.props.setData(response.data);
        console.log(response);
      })
      .catch(function(error) {
        console.log("Error", error);
      });
  };

  render() {
    return (
      <div class="container">
        <br />
        <br />
        <div class="row" id="ads">
          {this.props.data.map((value, index) => {
            return (
              <div class="col-md-4 mt-5 animated jackInTheBox" key={index}>
                <div class="card rounded">
                  <div class="card-image">
                    <span class="card-notify-badge">{value.tipe_barang}</span>
                    <span class="card-notify-year">{value.tahun_barang}</span>
                    <img
                      class="img-fluid edit_barang"
                      src={value.image_barang}
                      alt="Alternate Text"
                    />
                  </div>
                  <div class="card-image-overlay m-auto">
                    <span class="card-detail-badge">Used</span>
                    <span class="card-detail-badge">
                      IDR {value.harga_barang}
                    </span>
                    {/* <span class="card-detail-badge">13000 Kms</span> */}
                  </div>
                  <div class="card-body text-center">
                    <div class="ad-title m-auto">
                      <h5>{value.nama_barang}</h5>
                    </div>
                    <Link
                      to={"/detail/" + value.barang_id}
                      class="ad-btn"
                      href="#"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(
  "data, user_name, Bearer",
  actions
)(Barang);
