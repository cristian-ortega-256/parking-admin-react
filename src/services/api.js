import axios from 'axios'
import CONFIG from 'config';

var api = axios.create({
  baseURL: CONFIG.API_BASE_URL
})

export default api
