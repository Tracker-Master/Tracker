const fetch = require('node-fetch');
import { API_URL, API_KEY, API_TOKEN } from './Settings';

export const getLists = async ({ boardID }) => {
  const apiURL = `${API_URL}/boards/${boardID}/lists/?key=${API_KEY}&token=${API_TOKEN}`;

  try {
    const response = await fetch(apiURL);
    const listData = await response.json();
    console.log('here', listData);
    return listData;
    // { id, name } = listData;
    // return {id, name};
  } catch (err) {
    throw new Error('Invalid ID');
  }
};
