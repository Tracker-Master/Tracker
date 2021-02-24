import { API_URL, API_KEY, API_TOKEN } from './Settings';

export const getCards = async ({ boardID }) => {
  const apiURL = `${API_URL}/boards/${boardID}/cards/?key=${API_KEY}&token=${API_TOKEN}`;

  try {
    const response = await fetch(apiURL);
    if (typeof response === 'object') {
      const data = await response.json(),
        cardsData = data.map((card) => {
          const { desc, id, name, shortUrl } = card;
          return { desc, id, name, shortUrl };
        });
      return cardsData;
    }
    return {};
  } catch (err) {
    return console.error(err);
  }
};
