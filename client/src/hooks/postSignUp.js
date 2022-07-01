const axios = require("axios");

export const postSignUp = (data) => {
  return axios.post("/signup", {}).then((response) => response.data);
};
