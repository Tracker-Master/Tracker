import { API_URL, API_KEY, API_TOKEN } from './Settings';

export const getLists = async ({ boardID }) => {
  const apiURL = `${API_URL}/boards/${boardID}/lists/?key=${API_KEY}&token=${API_TOKEN}`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json(),
      listData = data.map((list) => {
        const { id, name } = list;
        return { id, name };
      });
    return listData;
  } catch (err) {
    return new Error()
  }
};
