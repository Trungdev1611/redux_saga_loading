import axios from "axios";


export function callApi(url) {
  return axios.get(url);
}
