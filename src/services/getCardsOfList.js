import React, { useState, useEffect, useContext } from 'react';
import { API_URL, API_KEY, API_TOKEN } from './Settings';

import { Context } from 'Context/BoardContext';

export const getCardsOfList = async () => {
  const { list } = useContext(Context);

  const apiURL = `${API_URL}/lists/${filter.id}/cards?key=${API_KEY}&token=${API_TOKEN}`;

  const TODO_DOING_DONE = [
    'To Do',
    'Things To Do',
    'Pendientes',
    'Doing',
    'En Curso',
    'Done',
    'Finalizados',
  ];

  const filter = list.filter((singleList) => {
    const capitalizeListTitle = singleList.name
      .trim()
      .toLowerCase()
      .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
    return TODO_DOING_DONE.includes(capitalizeListTitle);
  });
  console.log(filter);

  Promise.allSettled(filter.id).then(async () => {
    try {
      const response = await fetch(apiURL);
      const data = await response.json(),
        cardsOfListData = data.map((cardsOfList) => {
          const { id, desc, name } = cardsOfList;
          return { id, desc, name };
        });
      return cardsOfListData;
    } catch (err) {
      return console.error(err);
    }
  });
};
