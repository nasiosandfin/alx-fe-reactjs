import axios from "axios";

const BASE_URL = "https://api.github.com/users";

export const getUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;


import axios from "axios";

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};
