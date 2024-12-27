// import Axios as  third party library.
import axios from "axios";

// import Global configurations.
import global from "../../configuration/global";

export default async function postRequest(url, data, customHeaders = {}) {
  // Create an Axios instance
  const axiosInstance = axios.create();

  const baseurl = global().BaseAPIURL + url;

  // Added a request interceptor to include JWT token and custom headers
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("jwtToken"); // Replace with your token retrieval logic
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      // Add custom headers
      config.headers = {
        ...config.headers,
        ...customHeaders,
      };

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  try {
    // Make the POST request
    const response = await axiosInstance.post(baseurl, data);
    return response.data; // Return response data
  } catch (error) {
    // Handle errors
    throw error;
  }
}
