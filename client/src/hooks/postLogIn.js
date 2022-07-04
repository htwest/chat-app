const axios = require("axios");

const postLogIn = (user, pass) => {
  return axios
    .post("/auth/login", {
      username: user,
      password: pass,
    })
    .catch((err) => {
      console.log(err);
    })
    .then((response) => response.data);
};

export default postLogIn;
