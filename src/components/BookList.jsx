// import React libraries.
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import the project dependencies.
import NavBar from "./Navbar";
import getRequest from "../helpers/api/get";
import BookGridView from "./BookGridView";

function BookList() {
  const [data, setData] = useState([]);
  const [StoredCartList, setCartList] = useState([]);

  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <BookGridView books={data} StoredCartList={StoredCartList} />;
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
