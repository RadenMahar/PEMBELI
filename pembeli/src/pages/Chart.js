import React from "react";
import axios from "axios";
import Header from "../components/Headerberanda";
import { actions } from "../store";
import { connect } from "unistore/react";
import { Link, withRouter } from "react-router-dom";
import Swal from "sweetalert2";

class Chart extends React.Component {
  constructor(props) {
    super(props);
  }

  handleTransaksi = async event => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputPlaceholder: "Masukan Alamat Pengiriman...",
      inputAttributes: {
        "aria-label": "Masukan Alamat Pengiriman"
      },
      showCancelButton: true
    });

    if (text) {
      Swal.fire(text);
    }

    console.log("ini chartku", this.props.chart);
    for (let i = 0; i < this.props.data.length; i++) {
      for (let j = 0; j < this.props.chart.length; j++) {
        if (this.props.data[i].barang_id === this.props.chart[j].id_barang) {
          const req = {
            method: "delete",
            url:
              "http://api.pembeli.raden.top/barang/" +
              this.props.data[i].barang_id,
            headers: {}
          };

          axios(req)
            .then(response => {
              console.log("Ini data ku", response.data);
            })
            .catch(error => {
              console.log("ini Error", error);
            });
        }
      }
    }

    var barang = "";
    let id = "";
    for (let i = 0; i < this.props.chart.length; i++) {
      barang += this.props.chart[i].nama_barang;
      barang += ", ";
      id += this.props.chart[i].id_barang;
      id += ", ";
    }

    const req = {
      method: "post",
      url: "http://api.pembeli.raden.top/barang/nembak",
      headers: {},
      data: {
        namaPembeli: localStorage.getItem("nama_pembeli"),
        emailtujuan: localStorage.getItem("email_pembeli"),
        Barang: barang,
        ID: id,
        alamat: text,
        total: this.props.price
      }
    };

    axios(req)
      .then(response => {
        console.log("Ini data ku", response.data);
        this.props.history.push("/thankyou");
      })
      .catch(error => {
        console.log("ini Error", error);
      });
  };

  handleDelete = async event => {
    console.log("Ini id keranjang", event.target.value);
    if (!isNaN(Number(event.target.value))) {
      const req = {
        method: "delete",
        url: "http://api.pembeli.raden.top/keranjang/" + event.target.value,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Barier")
        }
      };

      await Swal.fire({
        title: "Anda yakin?",
        text: "Anda tidak akan dapat mengembalikan item ini lagi",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, hapus saja!"
      }).then(result => {
        if (result.value) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });

      axios(req)
        .then(response => {
          console.log("Ini data ku", response.data);
          this.props.history.push("/beranda");
        })
        .catch(error => {
          console.log("ini Error", error);
        });
    }
  };

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
          <div class="row" id="ads">
            {this.props.chart.map((value, index) => {
              return (
                <div class="col-md-4 mt-5 animated jackInTheBox" key={index}>
                  <div class="card rounded">
                    <div class="card-image">
                      <img
                        class="img-fluid edit_barang"
                        src={value.image_barang}
                        alt="Alternate Text"
                      />
                    </div>
                    <div class="card-image-overlay m-auto">
                      <span class="card-detail-badge">
                        IDR {value.harga_barang}
                      </span>
                      {/* <span class="card-detail-badge">13000 Kms</span> */}
                    </div>
                    <div class="card-body text-center">
                      <div class="ad-title m-auto">
                        <h5>{value.nama_barang}</h5>
                      </div>
                      <button
                        // to={"/beranda/" + value.id_keranjang}
                        class="ad-btn"
                        href="#"
                        value={value.id_keranjang}
                        onClick={e => this.handleDelete(e)}
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row mt-2">
            <div class="card">
              <div class="card-body">
                <li class="list-group-item list-group-item-transparent">
                  <h5 class="card-title">Total Biaya: </h5>
                  <p class="card-text">IDR {this.props.price}</p>{" "}
                </li>
                <button
                  // to={"/beranda/" + value.id_keranjang}
                  class="btn btn-primary"
                  href="#"
                  // value={value.id_keranjang}
                  onClick={e => this.handleTransaksi(e)}
                >
                  Transaksi
                </button>
                {/* <Link to="/transaksi" class="btn btn-primary">
                  Transaksi
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "data, user_name, Bearer, chart, price",
  actions
)(withRouter(Chart));
