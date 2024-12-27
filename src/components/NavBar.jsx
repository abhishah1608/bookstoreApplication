// Import React Libraries.
import React from "react";
import { NavLink } from "react-router-dom";

// import Material UI libraries.
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function NavBar() {
  const pageList = [
    { name: "BookList", path: "/booklist" },
    { name: "Cart", path: "/cart" },
    { name: "History", path: "/history" },
    { name: "Logout", path: "/logout" },
  ];

  return (
    <AppBar position="static" sx={{ width: "100%" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Application Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          BookStore Application
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {pageList.map((page) => (
            <Button
              key={page.name}
              color="inherit"
              component={NavLink}
              to={page.path}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "yellow" : "white",
              })}
            >
              {page.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
