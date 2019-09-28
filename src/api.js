import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type':'application/json',
    "Accept":"application/vnd.github.cloak-preview"
  }
});

export default api;