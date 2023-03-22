import axios from 'axios';

const API_URL = 'https://shoppingmall.onrender.com/api/v1/users/';

// Register user
const register = async (username, password, type) => {
  const response = await axios.post(
    API_URL,
    {
      username,
      password,
      type,
    },
    {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    }
  );

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (username, password) => {
  const response = await axios.post(
    API_URL + 'log-in',
    { username, password },
    {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    }
  );

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem('user');
};

// Get me
const getMe = async () => {
  const response = await axios.get(API_URL + 'me', {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  });

  return response.data;
};

const authService = {
  register,
  logout,
  login,
  getMe,
};

export default authService;
