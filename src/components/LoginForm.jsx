import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import loginBackground from "../assets/login_background.webp"; // Import the background image
import validatePassword from "../helpers/validations/validatePassword";

function LoginForm() {
  const [error_msg, setErrorMsg] = React.useState([]);

  const [loginform, setformfields] = React.useState({
    username: "",
    password: "",
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
    if (validateFields() || true) {
      navigate("/home");
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

        {error_msg && // Render only if error_msg exists
          error_msg.map((e1) => (
            <Box
              key={e1.key}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "red",
                fontSize: "12px",
                marginTop: 1,
              }}
            >
              <span>{e1.error}</span>
              <IconButton
                size="small"
                onClick={() => clearError(e1.key)}
                sx={{ color: "red" }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
          ))}

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
