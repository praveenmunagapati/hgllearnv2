import axios from "axios";

const instance = axios.create({
  baseURL: `https://hubitbackend.onrender.com`,
  //   baseURL: `https://himal-hubitbackend.adaptable.app/`,
});
export default instance;
