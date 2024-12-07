import axios from "axios";

const http = axios.create({
  baseURL: "https://upload-file-540c6-default-rtdb.firebaseio.com/",
});

export const get = async (apiEndpoint, option = {}) => {
  const res = await http.get(apiEndpoint);
  return res.data;
};
