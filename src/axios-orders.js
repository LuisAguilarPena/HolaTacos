import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://holatacos-xo.firebaseio.com/'
});

export default instance;