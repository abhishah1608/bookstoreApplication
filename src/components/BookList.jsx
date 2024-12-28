// import React libraries.
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

// import the project dependencies.
import NavBar from "./Navbar";
import getRequest from "../helpers/api/get";
import BookGridView from "./BookGridView";
import postRequest from "../helpers/api/post";

function BookList() {
  const [data, setData] = useState([]);
  const [StoredCartList, setCartList] = useState([]);

  const navigate = useNavigate();

  const saveToCart = function () {
    const url = "Book/AddCartDetails";
    const response = postRequest(
      url,
      JSON.parse(sessionStorage.getItem("CartList"))
    );
  };

  return (
    <>
      <NavBar />
      <BookGridView books={data} StoredCartList={StoredCartList} />;
      {/* Button */}
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "20px", padding: "10px 20px", marginLeft: "42%" }}
        onClick={saveToCart}
      >
        Save Items To Cart.
      </Button>
      {useEffect(() => {
        // Example usage:
        (async () => {
          try {
            const url = "Book/GetBooks";
            const response = await getRequest(url);
            const url_cartdetails =
              "Book/GetCartDetailsList?UserId=" +
              sessionStorage.getItem("userId");
            const res = await getRequest(url_cartdetails);
            setData(response);
            setCartList(res);
          } catch (error) {
            console.error("Error:", error);
          }
        })();
      }, [])}
    </>
  );
}

export default BookList;
