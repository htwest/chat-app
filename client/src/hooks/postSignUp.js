const axios = require("axios");

const postSignUp = (user, pass) => {
  return axios
    .post("/signup", {
      username: user,
      password: pass,
    })
    .catch((err) => {
      console.log(err);
    })
    .then((response) => response.data);
};

export default postSignUp;
