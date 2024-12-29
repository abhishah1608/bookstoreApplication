import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableContainer,
} from "@mui/material";

import NavBar from "./Navbar";
import getRequest from "../helpers/api/get";
import postRequest from "../helpers/api/post";

export default function PaymentStatus() {
  // Use URLSearchParams to get the sessionId from the query string
  const location = useLocation();

  // Extract the sessionId from the pathname
  const sessionId = location.pathname.split("/").pop();

  const [response, setResponse] = useState({
    details: [],
    OrderId: "",
    amount: 0,
    header: "",
  });

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      const url =
        "StripePayment/GetPaymentDetail?checkoutSessionId=" + sessionId;
      const res = await getRequest(url);
      res.header =
        "Your Order placed Successfully and payment is successful with OrderId " +
        res.OrderId;

      setResponse(res);

      var request = {};

      var removeCart = sessionStorage.getItem("CartList");

      var obj_removeCart = JSON.parse(removeCart);

      if (obj_removeCart && obj_removeCart.length > 0) {
        obj_removeCart.forEach((element) => {
          element.IsRemoved = 1;
          element.total = element.Price;
        });
      }

      request.detail = obj_removeCart;

      request.Amount = res.amount;

      request.UserId = Number(sessionStorage.getItem("userId"));

      request.LoginId = Number(sessionStorage.getItem("LoginId"));

      const url_p = "Book/AddOrder";
      await postRequest(url_p, request);

      const url_post = "Book/AddCartDetails";
      await postRequest(url_post, obj_removeCart);
      sessionStorage.setItem("CartList", []);
    };

    fetchPaymentDetails();
  }, [sessionId]); // Dependency array to re-run if sessionId changes

  return (
    <>
      <NavBar></NavBar>
      <Box sx={{ textAlign: "center", padding: "20px" }}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          Payment Status
        </Typography>
        <Typography variant="h6" gutterBottom>
          {response.header}
        </Typography>

        <TableContainer
          component={Paper}
          sx={{ maxWidth: 800, margin: "20px auto", border: "1px solid #ccc" }}
        >
          <Table>
            {/* Table Head */}
            <TableHead>
              <TableRow>
                <TableCell style={{ padding: "10px 25px", fontWeight: "bold" }}>
                  Book Name
                </TableCell>
                <TableCell
                  style={{ padding: "10px 25px", fontWeight: "bold" }}
                  align="center"
                >
                  Quantity
                </TableCell>
                <TableCell
                  style={{ padding: "10px 25px", fontWeight: "bold" }}
                  align="center"
                >
                  Total Price
                </TableCell>
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {response.details.map((x, index) => (
                <TableRow key={index}>
                  <TableCell style={{ padding: "10px 25px" }}>
                    {x.BookName}
                  </TableCell>
                  <TableCell style={{ padding: "10px 25px" }} align="center">
                    {x.Quantity}
                  </TableCell>
                  <TableCell style={{ padding: "10px 25px" }} align="center">
                    ₹{x.Price.toLocaleString("en-IN")}
                  </TableCell>
                </TableRow>
              ))}
              {/* Total Amount Row */}
              <TableRow>
                <TableCell
                  colSpan={3}
                  align="right"
                  style={{ padding: "20px", fontWeight: "bold" }}
                >
                  Total Amount: ₹{response.amount.toLocaleString("en-IN")}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
