// import React libraries
import React from "react";
import { useNavigate } from "react-router-dom";

// import Material UI libraties
import { Box, TextField, Button, Typography, Link } from "@mui/material";

// import the project dependencies.
import loginBackground from "../assets/login_background.webp"; // Import the background image
import validatePassword from "../helpers/validations/validatePassword";
import validateEmailAddress from "../helpers/validations/validateEmailAddress";
import Errortag from "./Error";
import postRequest from "../helpers/api/post";

export default function SignUp() {
  const [error_msg, setErrorMsg] = React.useState([]);

  const [SignUpForm, setformfields] = React.useState({
    username: "",
    password: "",
    email: "",
    confirm_password: "",
  });
  const navigate = useNavigate();

  const clearError = (key1) => {
    var errlist = error_msg;

    errlist = errlist.filter((e) => {
      return e.key != key1;
    });

    setErrorMsg(errlist);
  };

  const validateFields = () => {
    var error_msg1 = [];
    setErrorMsg(error_msg1);
    const tempErrors = {
      username: "",
      password: "",
      email: "",
      confirm_password: "",
    };

    if (!SignUpForm.username.trim() || SignUpForm.username.length < 5) {
      tempErrors.username =
        "Username is required and must be at least 5 characters";
    }

    if (!validateEmailAddress(SignUpForm.email)) {
      tempErrors.email = "Enter valid Email Address";
    }

    if (!validatePassword(SignUpForm.password)) {
      tempErrors.password =
        "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one digit, and one special character.";
    }

    if (SignUpForm.confirm_password != SignUpForm.password) {
      tempErrors.confirm_password =
        "Password does not match with confirm password";
    }

    Object.keys(tempErrors).forEach((key) => {
      var e1 = tempErrors[key];
      if (e1) {
        var msg = {
          error: e1,
          key: key,
        };
        error_msg1.push(msg);
      }
    });
    setErrorMsg(error_msg1);
    return Object.values(tempErrors).every((err) => err === "");
  };

  const handlesubmitclick = () => {
    if (validateFields()) {
      (async () => {
        try {
          const url = "Login/AddUser";
          var data = SignUpForm;
          data.Signup = 1;
          const response = await postRequest(url, SignUpForm);
          if (response.UserId != 0) {
            localStorage.setItem("jwtToken", response.seckey);
            localStorage.setItem("LoginId", response.LoginId);
            sessionStorage.setItem("userId", response.UserId);
            navigate("/booklist");
          } else {
            var error_msg1 = [];
            var msg = {
              error: "User is already Added",
              key: "incorrect_u_p",
            };
            error_msg1.push(msg);
            setErrorMsg(error_msg1);
          }
        } catch (error) {
          var error_msg1 = [];
          var msg = {
            error: "Server side error",
            key: "server_error",
          };
          console.log("error:" + error);
          error_msg1.push(msg);
          setErrorMsg(error_msg1);
        }
      })();
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh", // Full viewport height
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${loginBackground})`, // Background image
        backgroundSize: "cover", // Ensure the image covers the screen
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Avoid repeating the image
      }}
    >
      {/* Login Box */}
      <Box
        component="form"
        sx={{
          width: 300,
          padding: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background for the form
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h5" sx={{ textAlign: "center", marginBottom: 2 }}>
          Register for the BookStore Website
        </Typography>

        <Errortag error_msg={error_msg} setErrorMsg={setErrorMsg} />

        {/* Username Field */}
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          required
          type="text"
          onChange={(e) =>
            setformfields({ ...SignUpForm, username: e.target.value })
          }
          value={SignUpForm.username}
        />

        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          required
          type="email"
          onChange={(e) =>
            setformfields({ ...SignUpForm, email: e.target.value })
          }
          value={SignUpForm.email}
        />

        {/* Password Field */}
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          required
          type="password"
          onChange={(e) => {
            setformfields({ ...SignUpForm, password: e.target.value });
          }}
          value={SignUpForm.password}
        />

        {/* Confirm Password Field */}
        <TextField
          label="Confirm Password"
          variant="outlined"
          fullWidth
          required
          type="password"
          onChange={(e) => {
            setformfields({ ...SignUpForm, confirm_password: e.target.value });
          }}
          value={SignUpForm.confirm_password}
        />

        {/* Submit Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handlesubmitclick}
        >
          Submit
        </Button>

        {/* Additional Links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: 2,
          }}
        >
          <Link
            href="/"
            variant="body2"
            underline="hover"
            sx={{ cursor: "pointer" }}
          >
            Login
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
