import axios from 'axios';


const API_BASE_URL = 'https://kazam-ev-2hxf.onrender.com';

export const fetchAllTasks = async (): Promise<string[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/fetchAllTasks`);
    return response.data.tasks || [];
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};