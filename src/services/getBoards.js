import { API_URL, API_KEY, API_TOKEN } from './Settings';
import { useParams } from 'react-router-dom';

export const getBoards = async () => {
  const { boardID } = useParams();
  // console.log(boardID);
  const apiURL = `${API_URL}/boards/${boardID}/?key=${API_KEY}&token=${API_TOKEN}`;

  try {
    const response = await fetch(apiURL),
      data = await response.json(),
      { id, name, shortUrl } = data;
    console.log({ id, name, shortUrl });
    return { id, name, shortUrl };
  } catch (err) {
    return console.error(err);
  }
};
