import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import postRequest from "../helpers/api/post";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout logic (e.g., clearing user session or tokens)
    var loginId = localStorage.getItem("LoginId");
    var data = {};
    (async () => {
      try {
        const url = "Login/LogoutService" + "?loginId=" + loginId;
        const response = await postRequest(url, data);
        localStorage.clear();
        // Redirect to the login page
        navigate("/");
      } catch (error) {}
    })();
  }, [navigate]); // Dependency ensures this runs only once when the component mounts
}
