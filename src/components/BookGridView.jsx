// import React libraries.
import React from "react";

// import Material Design UI libraties.
import { DataGrid } from "@mui/x-data-grid";
import { Button, Box } from "@mui/material";

export default function BookGridView({ books, StoredCartList }) {
  var CartList = StoredCartList;

  var list = sessionStorage.getItem("CartList");

  if (!list) {
    alert("first time");
    sessionStorage.setItem("CartList", JSON.stringify(CartList));
  }

  function handleAdd(bookid, BookName, row) {
    var obj = CartList.filter((p) => {
      return p.BookId == bookid;
    });
    if (obj && obj.length != 0) {
      obj[0].Quantity = obj[0].Quantity + 1;
      obj[0].Price = row.BookPrice * obj[0].Quantity;
      row.stock = row.stock - 1;
    } else {
      var obj1 = {};
      obj1.BookId = bookid;
      obj1.Quantity = Number(1);
      obj1.Price = row.BookPrice * obj1.Quantity;
      row.stock = row.stock - 1;
      obj1.userId = sessionStorage.getItem("userId");
      obj1.IsPurchased = "N";
      obj1.BookName = BookName;
      CartList.push(obj1);
    }
    sessionStorage.setItem("CartList", JSON.stringify(CartList));
  }

  function handleRemove(bookid, BookName, row) {
    var obj = CartList.filter((p) => {
      return p.BookId == bookid;
    });

    if (obj && obj.length != 0) {
      if (obj[0].Quantity >= 1) {
        obj[0].Quantity = obj[0].Quantity - 1;
        obj[0].Price = row.BookPrice * obj[0].Quantity;
        row.stock = row.stock + 1;
        sessionStorage.setItem("CartList", JSON.stringify(CartList));
      }
    }
  }

  // Define Columns
  const columns = [
    { field: "BookName", headerName: "Book Name", flex: 1 },
    { field: "BookAuthor", headerName: "Book Author", flex: 1 },
    { field: "Description", headerName: "Book Description", flex: 2 },
    { field: "stock", headerName: "Book Stock", flex: 1 },
    { field: "BookPrice", headerName: "Book Price", flex: 1 },
    {
      field: "add",
      headerName: "Add",
      flex: 0.5,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            handleAdd(params.row.id, params.row.BookName, params.row)
          }
        >
          +
        </Button>
      ),
    },
    {
      field: "remove",
      headerName: "Remove",
      flex: 0.5,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="secondary"
          onClick={() =>
            handleRemove(params.row.id, params.row.BookName, params.row)
          }
        >
          -
        </Button>
      ),
    },
  ];

  // Solution 1: Add an `id` if not already present
  const rowsWithId = books.map((book, index) => ({
    ...book,
    id: book.BookId, // Ensure unique id for each row
  }));

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rowsWithId}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </Box>
  );
}
