const axios = require('axios');

const api = axios.create({
  baseURL: 'httos://localhost:3000'
});

module.exports = api;
