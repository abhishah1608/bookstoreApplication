// import React libraries.
import { Route, Routes } from "react-router-dom";

// import dependencies from the project.
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import CartHistory from "./CartHistory";
import Cart from "./Cart";
import LoginForm from "./LoginForm";
import Logout from "./Logout";
import Register from "./Register";
import BookList from "./BookList";
import PaymentForm from "./PaymentForm";
import PaymentStatus from "./PaymentStatus";

function RouteConfig() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route
        path="/paymentstatus/:sessionId"
        element={
          <PrivateRoute>
            <PaymentStatus />
          </PrivateRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
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
      <Route
        path="/paymentform"
        element={
          <PrivateRoute>
            <PaymentForm />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default RouteConfig;
