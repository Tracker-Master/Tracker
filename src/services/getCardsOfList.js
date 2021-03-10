// import { useContext, useMemo } from 'react';
// import { Context } from 'Context/BoardContext';
// import { API_URL, API_KEY, API_TOKEN } from './Settings';

// export const getCardsOfLists = async () => {
//   const { list } = useContext(Context);

//   const TODO_DOING_DONE = [
//     'To Do',
//     'Things To Do',
//     'Pendientes',
//     'Doing',
//     'En Curso',
//     'Done',
//     'Finalizados',
//   ];

//   const filteredList = list.filter((singleList) => {
//     const capitalizeListTitle = singleList.name
//       .trim()
//       .toLowerCase()
//       .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
//     return TODO_DOING_DONE.includes(capitalizeListTitle);
//   });
//   const getListsOfCards = filteredList.map(
//     ({ id }) => `${API_URL}/lists/${id}/cards?key=${API_KEY}&token=${API_TOKEN}`
//   );
//   const data = getListsOfCards.map((url) =>
//     fetch(url, { method: 'GET' }).then((response) => response.json())
//   );
//   const cardsOfLists = await Promise.allSettled(data);

//   const lengthOfCards = cardsOfLists.map(({ value }) => {
//     return (
//       value.length,
//       value.map(({ name }) => {
//         return name;
//       })
//     );
//   });

//   // console.log(lengthOfCards);

//   return lengthOfCards;
// };
