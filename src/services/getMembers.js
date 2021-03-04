import { API_URL, API_KEY, API_TOKEN } from './Settings';

export const getMembers = async ({ boardID }) => {
  const apiURL = `${API_URL}/boards/${boardID}/members/?key=${API_KEY}&token=${API_TOKEN}`;

  try {
    const response = await fetch(apiURL);
      const data = await response.json(),
        membersData = data.map((member) => {
          const { fullName, id, username } = member;
          return { fullName, id, username };
        });
      return membersData;
  } catch (err) {
    return new Error()
  }
};
