import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Masuk from "../pages/Masuk";
import Daftar from "../pages/Daftar";
import { Provider } from "unistore/react";
import { store } from "../store";
import Profile from "../pages/Profile";
import Tambahkan from "../pages/Tambahkan";
import Item from "../pages/Barangsaya";
import React from "react";
import Beranda from "../pages/Beranda";
import Detail from "../pages/Detailbarang";
import Chart from "../pages/Chart";
import Category from "../pages/Category";
import NotMatch from "../components/Notmatch";
import Thankyou from "../pages/Thankyou";
// import Invoice from "../pages/Invoice"

const MainRoutes = () => {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/daftar" component={Daftar} />
          <Route exact path="/masuk" component={Masuk} />
          <Route exact path="/profil" component={Profile} />
          <Route exact path="/tambah" component={Tambahkan} />
          <Route exact path="/mobil" component={Item} />
          <Route exact path="/beranda" component={Beranda} />
          <Route exact path="/chart" component={Chart} />
          <Route path="/detail/:barang_id" component={Detail} />
          <Route path="/kategori/:kategori" component={Category} />
          <Route path="/beranda/:id_keranjang" component={Chart} />
          <Route exact path="/thankyou" component={Thankyou} />
          {/* <Route path="/beli/:barang_id" component={Invoice} /> */}
          <Route component={NotMatch} />
        </Switch>
      </Provider>
    </Router>
  );
};

export default MainRoutes;
