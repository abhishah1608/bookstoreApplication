import { Route, Routes } from "react-router-dom";
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
      <Route path="/booklist" element={<BookList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/history" element={<CartHistory />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
}

export default RouteConfig;
