const validateLogIn = (username, password, setUsrErr, setPassErr) => {
  if (
    (username.length === 0 || !username) &&
    (password.length === 0 || !password)
  ) {
    setUsrErr("Enter a valid username");
    setPassErr("Enter a valid password");
  } else if (username.length === 0 || !username) {
    setUsrErr("Enter a valid username");
  } else if (password.length === 0 || !password) {
    setPassErr("Enter a valid password");
  } else {
    return true;
  }
};

export default validateLogIn;
