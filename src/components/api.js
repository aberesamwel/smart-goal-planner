// components/api.js
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:5000', // ✅ NO space before http!
  headers: {
    'Content-Type': 'application/json'
  }
});
