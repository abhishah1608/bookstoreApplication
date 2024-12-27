// import React libraries.
import { Route, Routes } from "react-router-dom";

// import dependencies from the project.
import PrivateRoute from "./PrivateRoute";
import CartHistory from "./CartHistory";
import Cart from "./Cart";
import LoginForm from "./LoginForm";
import Logout from "./Logout";
import SignUp from "./Signup";
import BookList from "./BookList";

function RouteConfig() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route
        path="/booklist"
        element={
          <PrivateRoute>
            <BookList />
          </PrivateRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route
        path="/history"
        element={
          <PrivateRoute>
            <CartHistory />
          </PrivateRoute>
        }
      />
      <Route
        path="/logout"
        element={
          <PrivateRoute>
            <Logout />
          </PrivateRoute>
        }
      />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
}

export default RouteConfig;
