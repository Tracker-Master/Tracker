import { API_URL, API_KEY, API_TOKEN } from './Settings';
import { useParams } from 'react-router-dom';

export const getCards = async () => {
  const { boardID } = useParams();
  // console.log(boardID);
  const apiURL = `${API_URL}/boards/${boardID}/cards/?key=${API_KEY}&token=${API_TOKEN}`;

  try {
    const response = await fetch(apiURL),
      data = await response.json(),
      { id, name, closed } = data.map((card) => card);

    return { id, name, closed };
  } catch (err) {
    return console.error(err);
  }
};
