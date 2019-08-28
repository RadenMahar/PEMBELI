import React from "react";
import Header from "../components/HeaderBeli";

class Thankyou extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <div class="jumbotron text-center">
          <h1 class="display-3">Thank You!</h1>
          <p class="lead">
            Anda telah melakukan transaksi di beliaja.com, setelah ini anda akan
            mendapatkan invoice yang kami kirim melalui email anda.
            <strong> Silahkan cek email anda</strong>
          </p>
          <hr />
          <p class="lead">
            <a
              class="btn btn-primary btn-sm"
              href="https://mail.google.com/mail/u/0/#inbox"
              role="button"
            >
              Lanjutkan menuju email!
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Thankyou;
