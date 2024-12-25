// // component/NavBar.js
// import React from "react";
// import { NavLink } from "react-router-dom";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";

// function NavBar() {
//   const pageList = [
//     {
//       name: "Home",
//       path: "/home",
//     },
//     {
//       name: "About",
//       path: "/about",
//     },
//     {
//       name: "Products",
//       path: "/products",
//     },
//   ];

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           BookStore Application
//         </Typography>
//         <Box sx={{ display: "flex", gap: 2 }}>
//           {pageList.map((page) => (
//             <Button
//               key={page.name}
//               color="inherit"
//               component={NavLink}
//               to={page.path}
//               style={({ isActive }) => ({
//                 textDecoration: "none",
//                 color: isActive ? "yellow" : "white",
//               })}
//             >
//               {page.name}
//             </Button>
//           ))}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default NavBar;

import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function NavBar() {
  const pageList = [
    { name: "Home", path: "/home" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Logout", path: "/logout" },
  ];

  const handleLogout = () => {
    alert("Logged out successfully!");
  };

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
        {/* 
        Logout Button
        <Button
          color="inherit"
          onClick={handleLogout}
          sx={{
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          Logout
        </Button> */}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
