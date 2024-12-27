import React from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import loginBackground from "../assets/login_background.webp"; // Import the background image
import validatePassword from "../helpers/validations/validatePassword";
import Errortag from "./Error";
import postRequest from "../helpers/api/post";

function LoginForm() {
  const [error_msg, setErrorMsg] = React.useState([]);

  const [loginform, setformfields] = React.useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const validateFields = () => {
    var error_msg1 = [];
    setErrorMsg(error_msg1);
    const tempErrors = { username: "", password: "" };
    if (!loginform.username.trim() || loginform.username.length < 5) {
      tempErrors.username =
        "Username is required and must be at least 5 characters";
    }

    if (!validatePassword(loginform.password)) {
      tempErrors.password =
        "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one digit, and one special character.";
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

          const response = await postRequest(url, loginform);
          if (response.UserId != 0) {
            localStorage.setItem("jwtToken", response.seckey);
            navigate("/booklist");
          } else {
            var error_msg1 = [];
            var msg = {
              error: "Please enter correct Username and password",
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
          Login BookStore Website
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
            setformfields({ ...loginform, username: e.target.value })
          }
          value={loginform.username}
        />

        {/* Password Field */}
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          required
          type="password"
          onChange={(e) => {
            setformfields({ ...loginform, password: e.target.value });
          }}
          value={loginform.password}
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
            href="/SignUp"
            variant="body2"
            underline="hover"
            sx={{ cursor: "pointer" }}
          >
            Sign Up
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginForm;
