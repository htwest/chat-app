const validateLogIn = (data) => {
  const username = data.username;
  const password = data.password;

  if (username.length === 0 && password.length === 0) {
    return { error: "Enter a valid username and password" };
  }
  if (username.length === 0) {
    return { error: "Enter a valid username" };
  }
  if (password.length === 0) {
    return { error: "Enter a valid password" };
  }
  return { success: "succesfully logged in" };
};

export default validateLogIn;
