const axios = require("axios");

const postSignUp = (user, pass) => {
  return axios
    .post("/signup", {
      username: user,
      password: pass,
    })
    .then((response) => response.data);
};

export default postSignUp;
