import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout logic (e.g., clearing user session or tokens)
    console.log("Logging out user...");
    // Redirect to the login page or home page
    navigate("/");
  }, [navigate]); // Dependency ensures this runs only once when the component mounts
}
