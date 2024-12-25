import { Route, Routes } from "react-router-dom";
import About from "./About";
import Products from "./products";
import LoginForm from "./LoginForm";
import Home from "./Home";
import Logout from "./Logout";
import SignUp from "./Signup";

function RouteConfig() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
}

export default RouteConfig;
