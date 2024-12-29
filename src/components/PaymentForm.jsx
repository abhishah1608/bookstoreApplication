import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid2,
  TextField,
  Button,
  Typography,
  InputAdornment,
} from "@mui/material";

import NavBar from "./Navbar";
import Errortag from "./Error";
import validateEmailAddress from "../helpers/validations/validateEmailAddress";
import postRequest from "../helpers/api/post";

export default function PaymentForm() {
  const [error_msg, setErrorMsg] = React.useState([]);

  const navigate = useNavigate();

  const [paymentform, setformfields] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    address1: "",
    address2: "",
    zipCode: "",
  });

  const validateFields = () => {
    var error_msg1 = [];
    setErrorMsg(error_msg1);
    const tempErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      state: "",
      city: "",
      address1: "",
      address2: "",
      zipCode: "",
    };
    if (!paymentform.firstName.trim()) {
      tempErrors.firstName = "First Name is Required";
    }

    if (!paymentform.lastName.trim()) {
      tempErrors.lastName = "Last Name is Required";
    }

    if (!validateEmailAddress(paymentform.email)) {
      tempErrors.email = "Enter valid Email Address";
    }

    if (!paymentform.country.trim()) {
      tempErrors.country = "Country is Required";
    }

    if (!paymentform.state.trim()) {
      tempErrors.state = "State is Required";
    }

    if (!paymentform.city.trim()) {
      tempErrors.city = "City Name is Required";
    }

    if (!paymentform.address1.trim()) {
      tempErrors.address1 = "Address 1 is Required";
    }

    if (!paymentform.zipCode.trim()) {
      tempErrors.zipCode = "Last Name is Required";
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

  const submitform = async () => {
    if (validateFields()) {
      try {
        var product = sessionStorage.getItem("CartList");
        var paymentInfo = { ...paymentform }; // Ensure paymentform is copied (if needed)
        paymentInfo.productInfo = product;
        paymentInfo.IsReact = "Y";

        const url = "StripePayment/Checkout";
        const response = await postRequest(url, paymentInfo);

        // Navigate to Stripe URL
        window.location.href = response.StripeUrl;
      } catch (error) {
        console.error("Error during submission:", error);
      }
    }
  };

  return (
    <>
      <NavBar></NavBar>

      <Box
        sx={{
          maxWidth: "600px",
          margin: "auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        {/* Form Title */}
        <Typography variant="h5" gutterBottom style={{ textAlign: "center" }}>
          Payment Information
        </Typography>

        <Errortag error_msg={error_msg} setErrorMsg={setErrorMsg} />

        {/* Form Fields */}
        <Grid2 container spacing={2}>
          {/* First Name */}
          <Grid2 item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              required
              onChange={(e) =>
                setformfields({ ...paymentform, firstName: e.target.value })
              }
              value={paymentform.firstName}
            />
          </Grid2>

          {/* Last Name */}
          <Grid2 item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              required
              onChange={(e) =>
                setformfields({ ...paymentform, lastName: e.target.value })
              }
              value={paymentform.lastName}
            />
          </Grid2>

          {/* Email */}
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              required
              onChange={(e) =>
                setformfields({ ...paymentform, email: e.target.value })
              }
              value={paymentform.email}
            />
          </Grid2>

          {/* Mobile Number */}
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="Mobile Number"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+1</InputAdornment>
                ),
                endAdornment: <InputAdornment position="end">-</InputAdornment>,
              }}
              required
              onChange={(e) =>
                setformfields({ ...paymentform, phone: e.target.value })
              }
              value={paymentform.phone}
            />
          </Grid2>

          {/* Country */}
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="Country*"
              variant="outlined"
              required
              onChange={(e) =>
                setformfields({ ...paymentform, country: e.target.value })
              }
              value={paymentform.country}
            />
          </Grid2>

          {/* State */}
          <Grid2 item xs={12} sm={6}>
            <TextField
              fullWidth
              label="State"
              variant="outlined"
              required
              onChange={(e) =>
                setformfields({ ...paymentform, state: e.target.value })
              }
              value={paymentform.state}
            />
          </Grid2>

          {/* City */}
          <Grid2 item xs={12} sm={6}>
            <TextField
              fullWidth
              label="City"
              variant="outlined"
              required
              onChange={(e) =>
                setformfields({ ...paymentform, city: e.target.value })
              }
              value={paymentform.city}
            />
          </Grid2>

          {/* Address 1 */}
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="Address 1"
              variant="outlined"
              multiline
              rows={2}
              required
              onChange={(e) =>
                setformfields({ ...paymentform, address1: e.target.value })
              }
              value={paymentform.address1}
            />
          </Grid2>

          {/* Address 2 */}
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="Address 2"
              variant="outlined"
              multiline
              rows={2}
              onChange={(e) =>
                setformfields({ ...paymentform, address2: e.target.value })
              }
              value={paymentform.address2}
            />
          </Grid2>

          {/* Zipcode */}
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="Zipcode"
              variant="outlined"
              required
              onChange={(e) =>
                setformfields({ ...paymentform, zipCode: e.target.value })
              }
              value={paymentform.zipCode}
            />
          </Grid2>
        </Grid2>

        {/* Submit Button */}
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button variant="contained" color="primary" onClick={submitform}>
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}
