import axios from "axios";
import global from "../../configuration/global";

/**
 * Perform a GET request with support for JWT token and custom headers via interceptors.
 * @param {string} url - The request URL.
 * @param {Object} [params={}] - The request parameters or query string.
 * @param {Object} [customHeaders={}] - Optional custom headers.
 * @returns {Promise} - The Axios response data.
 */
export default async function getRequest(url, params = {}, customHeaders = {}) {
  // Create an Axios instance
  const axiosInstance = axios.create();

  const baseurl = global().BaseAPIURL + url;

  // Add a request interceptor to include JWT token and custom headers
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
    // Make the GET request
    const response = await axiosInstance.get(baseurl, { params });
    return response.data; // Return response data
  } catch (error) {
    // Handle errors
    console.error("Error in GET request:", error);
    throw error;
  }
}
