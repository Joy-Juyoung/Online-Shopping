import axios from 'axios';

export default axios.create({
  baseURL: 'https://shoppingmall.onrender.com/api/v1',
  headers: {
    'Content-type': 'application/json',
  },
});
