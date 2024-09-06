import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8080/api/';

export const fetchData = async (endpoint: string) => {
  try {
    const response = await axios.get(`${baseUrl}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
