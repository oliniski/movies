import axios from 'axios';

export const api = axios.create({
  params: {
    api_key: process.env.API_KEY,
  },
});
