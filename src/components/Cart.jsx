import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  Paper,
} from "@mui/material";

import NavBar from "./NavBar";

function Cart() {
  var json = sessionStorage.getItem("CartList");

  const [obj, setObj] = useState(!json ? [] : JSON.parse(json));

  if (!obj) {
    setObj([]);
  }

  const navigate = useNavigate();

  const RedirectToPaymentForm = function () {
    navigate("/paymentform");
  };

  return (
    <>
      <NavBar />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {/* Title */}
        <Typography variant="h4" style={{ color: "red", marginBottom: "20px" }}>
          --- Items Added In Cart ---
        </Typography>

        {/* Table */}
        <TableContainer
          component={Paper}
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>Book Name</TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">
                  Quantity
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">
                  Total Price
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {obj.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.BookName}</TableCell>
                  <TableCell align="center">{item.Quantity}</TableCell>
                  <TableCell align="center">{item.Price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "20px", padding: "10px 20px" }}
          onClick={RedirectToPaymentForm}
        >
          Checkout Items
        </Button>
      </div>
    </>
  );
}

export default Cart;
