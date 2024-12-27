// import React libraries.
import React from "react";

// import Material Design UI libraties.
import { DataGrid } from "@mui/x-data-grid";
import { Button, Box } from "@mui/material";

export default function BookGridView({ books }) {
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
          onClick={() => handleAdd(params.row.id)}
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
          onClick={() => handleRemove(params.row.id)}
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
