import { React, useState, useEffect } from "react";

import { Box, Typography, List, ListItem, Divider } from "@mui/material";

import NavBar from "./Navbar";
import postRequest from "../helpers/api/post";

export default function CartHistory() {
  const [historyInfo, setHistoryDetails] = useState([]);

  useEffect(() => {
    const fetchUserPurchaseHistoryDetails = async () => {
      var user = {};
      user.LoginId = 0;
      user.emailId = "";
      user.UserId = Number(sessionStorage.getItem("userId"));

      const url = "History/GetPurchaseHistory";
      const res = await postRequest(url, user);
      setHistoryDetails(res);
    };

    fetchUserPurchaseHistoryDetails();
  }, []); // Dependency array to re-run if sessionId changes

  return (
    <>
      <NavBar />
      <Box sx={{ textAlign: "center", padding: "20px" }}>
        {/* Title */}
        <Typography
          variant="h4"
          sx={{ color: "blueviolet", marginBottom: "20px" }}
        >
          Order History
        </Typography>

        {historyInfo && historyInfo.length >= 1 ? (
          historyInfo?.map((info, index) => (
            <Box key={index} sx={{ marginBottom: "30px" }}>
              {/* Order ID */}
              <Typography variant="h6" sx={{ marginBottom: "10px" }}>
                {info.OrderId}
              </Typography>

              {/* Purchase Information */}
              <List sx={{ display: "inline-block", textAlign: "left" }}>
                {info?.purchaseInfo?.map((detail, idx) => (
                  <>
                    <ListItem>
                      <Typography>
                        <strong>Book Name:</strong> {detail.BookName} &nbsp;
                        <strong>Quantity:</strong> {detail.Quantity} &nbsp;
                        <strong>Price:</strong> ₹
                        {detail.total.toLocaleString("en-IN")}
                      </Typography>
                    </ListItem>
                    {idx < info.purchaseInfo.length - 1 && <Divider />}
                  </>
                ))}
              </List>
            </Box>
          ))
        ) : (
          <p>No history available for this user Account.</p>
        )}
      </Box>
    </>
  );
}
