import { API_URL, API_KEY, API_TOKEN } from './Settings';

export const getBoards = async ({ boardID }) => {
  const apiURL = `${API_URL}/boards/${boardID}/?key=${API_KEY}&token=${API_TOKEN}`;

  try {
    const response = await fetch(apiURL);
    if (typeof response === 'object') {
      const boardData = await response.json(),
        { id, name } = boardData;
      return { id, name };
    }
    return {};
  } catch (err) {
    return console.error(err);
  }
};
