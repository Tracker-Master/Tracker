import { API_URL, API_KEY, API_TOKEN } from './Settings';
import { useParams } from 'react-router-dom';

export const getLists = async () => {
  const { boardID } = useParams();
  console.log(boardID);
  const apiURL = `${API_URL}/boards/${boardID}/lists/?key=${API_KEY}&token=${API_TOKEN}`;

  try {
    const response = await fetch(apiURL),
      data = await response.json(),
      listId = data.map((list) => list);
    console.log(listId);
    return listId;
  } catch (err) {
    return console.error(err);
  }
};
