import { API_URL, API_KEY, API_TOKEN } from './Settings';

export const getCards = async ({ boardID }) => {
  const apiURL = `${API_URL}/boards/${boardID}/cards/?key=${API_KEY}&token=${API_TOKEN}`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json(),
      cardsData = data.map((card) => {
        const { id, name } = card;
        return { id, name };
      });
    return cardsData;
  } catch (err) {
    return console.error(err);
  }
};
