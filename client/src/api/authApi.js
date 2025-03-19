import axios from "./axios";

// Login request
export const signin = async (credentials) => {
  return await axios.post("/auth/signin", credentials);
};
// Refresh request
export const refreshAccess = async () => {
  return await axios.get("/auth/refreshAccessToken");
};
// Logout
export const signout = async () => {
  return await axios.get("/auth/signout");
};

// Check session or get user data
export const getSession = async () => {
  return await axios.get("/session");
};
