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

class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSignOut = () => {
    this.props.setLogin("false");
    console.log("ini login", this.props.is_login);
    this.props.history.replace("/");
  };

  componentWillMount = async () => {
    const self = this;
    {
      try {
        const req = {
          method: "get",
          url: "http://api.pembeli.raden.top/barang/search",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("Barier")
          },
          params: {
            katakunci: this.props.match.params.kategori
          }
        };
        const response = await axios(req);
        self.props.setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    const req1 = {
      method: "get",
      url: "http://api.pembeli.raden.top/keranjang/semuadikeranjang",
      headers: {
        // Authorization: "Bearer " + localStorage.getItem("Barier")
      },
      params: {
        id_pembeli: localStorage.getItem("id_pembeli")
      }
    };
    await axios(req1)
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
    console.log(this.props.match);
    return (
      <div>
        <Header handleSignOut={this.handleSignOut} />
        <div className="constructor">
          <div className="row justify-content-center mt-4">
            <div className="col-md-8 text-center">
              <Link
                to={"/kategori/" + this.props.match.params.kategori}
                onSelect="  targetTouches"
              >
                <img src={this.props.match.params.kategori} alt="" />
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
)(withRouter(Category));
