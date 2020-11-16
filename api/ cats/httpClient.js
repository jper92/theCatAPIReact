import Axios from 'axios';

// TODO: store safely
const apiKey = 'baf46045-a564-4fd1-8ee0-1e8378214dd9';

const httpClient = Axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export default httpClient;
