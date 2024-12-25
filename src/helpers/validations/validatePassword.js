const validatePassword = function (password) {
  // Define the validation regex
  var isvalid = false;
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Check if the password matches the regex
  if (regex.test(password)) {
    isvalid = true;
  } else {
    isvalid = false;
  }
  return isvalid;
};

export default validatePassword;
