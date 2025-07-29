// components/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000',  // or 3001 if that's your backend port
  headers: {
    'Content-Type': 'application/json'
  }
});

export default API;
