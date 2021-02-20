import { API_URL, API_KEY, API_TOKEN } from './Settings';
import { useParams } from 'react-router-dom';

export const getMembers = async () => {
  const { boardID } = useParams();
  console.log(boardID);
  const apiURL = `${API_URL}/boards/${boardID}/members/?key=${API_KEY}&token=${API_TOKEN}`;

  try {
    const response = await fetch(apiURL),
      data = await response.json(),
      memberId = data.map((member) => member);
    // console.log(memberId);
    return memberId;
  } catch (err) {
    return console.error(err);
  }
};
