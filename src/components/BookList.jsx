// import React libraries.
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import the project dependencies.
import NavBar from "./Navbar";
import getRequest from "../helpers/api/get";

function BookList() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      {useEffect(() => {
        // Example usage:
        (async () => {
          try {
            const url = "Book/GetBooks";
            const response = await getRequest(url);
          } catch (error) {
            console.error("Error:", error);
          }
        })();
      }, [navigate])}
    </>
  );
}

export default BookList;
