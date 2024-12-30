// import React libraries.
import { Route, Routes, BrowserRouter } from "react-router-dom";

// import dependencies from the project.
import PrivateRoute from "./PrivateRoute";
import CartHistory from "./CartHistory";
import Cart from "./Cart";
import LoginForm from "./LoginForm";
import Logout from "./Logout";
import SignUp from "./SignUp";
import Register from "./Register";
import BookList from "./BookList";
import PaymentForm from "./PaymentForm";
import PaymentStatus from "./PaymentStatus";

function RouteConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/paymentstatus/:sessionId" element={<PaymentStatus />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register" element={<Register />} />
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
    </BrowserRouter>
  );
}

export default RouteConfig;
