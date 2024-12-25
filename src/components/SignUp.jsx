import React from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import loginBackground from "../assets/login_background.webp"; // Import the background image
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

export default function SignUp() {
  const [error_msg, setErrorMsg] = React.useState([]);

  const [SignUpForm, setformfields] = React.useState({
    username: "",
    password: "",
    email: "",
    confirm_password: "",
  });
  const navigate = useNavigate();

  const handlesubmitclick = () => {
    if (loginform.username === "Admin" && loginform.password === "12345") {
      navigate("/home");
    } else {
      alert("error for Registration");
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
