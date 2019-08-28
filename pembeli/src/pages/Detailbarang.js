import React from "react";
import { actions } from "../store";
import { connect } from "unistore/react";
import { Link } from "react-router-dom";
import Header from "../components/HeaderDetail";
import axios from "axios";
import Swal from "sweetalert2";
import "../static/css/styles.css";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idbarang: []
    };
  }

  addChart = event => {
    const self = this;
    event.preventDefault();
    console.log("Ini state idbarang", this.props.idbarang);
    console.log("ini true", this.props.idbarang.includes(event.target.value));
    if (this.props.idbarang.includes(event.target.value)) {
      Swal.fire("Item ini sudah ada di keranjang", "error");
    } else {
      var data_by_id;
      for (let i = 0; i < this.props.data.length; i++) {
        if (this.props.data[i].barang_id == event.target.value) {
          data_by_id = this.props.data[i];
        }
      }
      console.log("dataku", data_by_id);
      const req = {
        method: "post",
        url: "http://api.pembeli.raden.top/keranjang",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Barier")
        },
        data: {
          id_barang: event.target.value,
          nama_barang: data_by_id.nama_barang,
          harga_barang: data_by_id.harga_barang,
          image_barang: data_by_id.image_barang
        }
      };

      axios(req)
        .then(async response => {
          console.log("Ini data ku", response.data);
          var data_temp = [];
          for (let i = 0; i < this.props.chart.length; i++) {
            data_temp.push(this.props.chart[i].id_barang);
          }
          self.props.history.push("/beranda");
        })
        .catch(error => {
          console.log("ini Error", error);
        });
    }
  };
  render() {
    return (
      <div>
        <Header />
        <div class="container">
          {this.props.data.map((value, index) => {
            if (value.barang_id == this.props.match.params.barang_id) {
              return (
                <h1 class="my-4">
                  {value.nama_barang}
                  {/* <small> {value.tipe_barang}</small> */}
                </h1>
              );
            }
          })}
          {this.props.data.map((value, index) => {
            if (value.barang_id == this.props.match.params.barang_id) {
              return (
                <div class="row" id="ads">
                  <div class="col-md-8">
                    <img
                      class="img-fluid big"
                      src={value.image_barang}
                      alt=""
                    />
                  </div>

                  <div class="col-md-4">
                    <h3 class="my-3">Car Description</h3>
                    <p>{value.deskripsi_barang}</p>
                    <h3 class="my-3">Details gained</h3>
                    <ul>
                      <li>IDR {value.harga_barang}</li>
                      <li>{value.tahun_barang}</li>
                      <li>{value.username_pelapak}</li>
                      <li>{value.tipe_barang}</li>
                    </ul>

                    {/* <Link to={"/chart/" + value.barang_id} class="ad-btn"> */}
                    <button
                      class="ad-btn"
                      role="button"
                      value={value.barang_id}
                      onClick={this.addChart}
                    >
                      {" "}
                      Add Chart{" "}
                    </button>

                    {/* </Link> */}
                  </div>
                </div>
              );
            }
          })}

          <h3 class="my-4">Related Item</h3>
          <div class="row" id="ads">
            {this.props.data.map((value, index) => {
              if (value.barang_id != this.props.match.params.barang_id) {
                return (
                  <div class="col-md-3 col-sm-6 mb-4">
                    <div class="card rounded">
                      <div class="card-image">
                        <span class="card-notify-badge">
                          {value.tipe_barang}
                        </span>
                        <span class="card-notify-year">
                          {value.tahun_barang}
                        </span>
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
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "data, user_name, Bearer, idbarang, chart",
  actions
)(Detail);
// this.props.match.params.source_name

{
  /* <Link to={"/detail/" + value.barang_id}>

<img
  class="img-fluid kecil"
  src={value.image_barang}
  alt=""
/>
</Link> */
}
