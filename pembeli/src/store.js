import createStore from "unistore";
import axios from "axios";

export const store = createStore({
  nama_pembeli: "",
  id_pembeli: "",
  user_name: "",
  alamat_pembeli: "",
  contact_pembeli: "",
  email_pembeli: null,
  password_pembeli: null,
  is_login: false,
  Bearer: "",
  data: [],
  chart: [],
  idbarang: [],
  price: 0
});

export const actions = store => ({
  setToken: (state, value) => {
    return { Bearer: value };
  },

  setPrice: (state, value) => {
    return {
      price: value
    };
  },

  setNama: (state, value) => {
    return {
      nama_pembeli: value
    };
  },

  setId: (state, value) => {
    return {
      id_pembeli: value
    };
  },

  setUser: (state, value) => {
    return {
      user_name: value
    };
  },

  setContact: (state, value) => {
    return {
      contact_pembeli: value
    };
  },

  setEmail: (state, value) => {
    return {
      email_pembeli: value
    };
  },

  setLogin: (state, value) => {
    return {
      is_login: value
    };
  },

  setData: (state, value) => {
    return {
      data: value
    };
  },

  setChart: (state, value) => {
    return {
      chart: value
    };
  },

  setIDBARANG: (state, value) => {
    store.setState({ idbarang: value });
  }
});
