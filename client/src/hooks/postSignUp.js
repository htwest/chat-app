const axios = require("axios");

const postSignUp = (user, pass) => {
  return axios
    .post("/auth/register", {
      username: user,
      password: pass,
    })
    .catch((err) => {
      console.log(err);
    })
    .then((response) => response.data);
};

export default postSignUp;
