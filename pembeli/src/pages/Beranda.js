import React from "react";
import { actions } from "../store";
import { connect } from "unistore/react";
import { Link, withRouter } from "react-router-dom";
import Header from "../components/Headerberanda";
import BMW from "../static/img/BMW.png";
import HONDA from "../static/img/HONDA.png";
import SUZUKI from "../static/img/SUZUKI.png";
import MAZDA from "../static/img/MAZDA.png";
import TOYOTA from "../static/img/TOYOTA.png";
import MITSUBISHI from "../static/img/MITSUBISHI.png";
import Barang from "../pages/Barang";
import Search from "../components/Search";
import axios from "axios";

class Beranda extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSignOut = () => {
    this.props.setLogin("false");
    console.log("ini login", this.props.is_login);
    this.props.history.replace("/");
  };

  componentDidMount = async () => {
    console.log("Ini id keranjang", this.props.match.params.id_keranjang);
    if (!isNaN(Number(this.props.match.params.id_keranjang))) {
      const req = {
        method: "delete",
        url:
          "http://api.pembeli.raden.top/keranjang/" +
          this.props.match.params.id_keranjang,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Barier")
        }
      };

      await axios(req)
        .then(response => {
          console.log("Ini data ku", response.data);
        })
        .catch(error => {
          console.log("ini Error", error);
        });
    }
  };

  componentWillMount = async () => {
    const self = this;
    const req = {
      method: "get",
      url: "http://api.pembeli.raden.top/keranjang/semuadikeranjang",
      headers: {
        // Authorization: "Bearer " + localStorage.getItem("Barier")
      },
      params: {
        id_pembeli: localStorage.getItem("id_pembeli")
      }
    };
    await axios(req)
      .then(response => {
        self.props.setChart(response.data);
        console.log(response);
      })
      .catch(function(error) {
        console.log("Error", error);
      });

    let sum = 0;
    for (let i = 0; i < this.props.chart.length; i++) {
      sum += Number(this.props.chart[i].harga_barang);
      console.log(sum);
    }
    this.props.setPrice(sum);
    console.log(this.props.sum);
  };

  render() {
    console.log(this.props.match.params.id_keranjang);
    return (
      <div>
        <Header handleSignOut={this.handleSignOut} />
        <div className="constructor">
          <div className="row justify-content-center mt-4">
            <div className="col-md-8 text-center">
              <Link to="kategori/HONDA" onSelect="  targetTouches">
                <img src={HONDA} alt="" />
              </Link>
              <Link to="kategori/BMW">
                <img className="bmw" src={BMW} alt="" />
              </Link>
              <Link to="kategori/SUZUKI">
                <img src={SUZUKI} alt="" />
              </Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <Link to="kategori/MAZDA">
                <img className="bmw" src={MAZDA} alt="" />
              </Link>
              <Link to="kategori/MITSUBISHI">
                <img src={MITSUBISHI} alt="" />
              </Link>
              <Link to="kategori/TOYOTA">
                <img src={TOYOTA} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <Search />
        <Barang />
      </div>
    );
  }
}

export default connect(
  "data, user_name, Bearer, chart",
  actions
)(withRouter(Beranda));
