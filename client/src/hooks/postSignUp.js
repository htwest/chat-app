const axios = require("axios");

const postSignUp = (user, pass) => {
  return axios
    .post("http://localhost:4000/signup", {
      username: user,
      password: pass,
    })
    .then((response) => response.data);
};

export default postSignUp;
