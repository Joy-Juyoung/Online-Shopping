import axios from 'axios';

const API_URL = 'https://shoppingmall.onrender.com/api/v1/users/me';

const getMe = async () => {
  const response = await axios.get(
    API_URL,
    // { username, password },
    {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    }
  );

  // if (response.data) {
  //   localStorage.setItem('me', JSON.stringify(response.data));
  // }

  return response.data;
};

const meService = {
  getMe,
};

export default meService;
