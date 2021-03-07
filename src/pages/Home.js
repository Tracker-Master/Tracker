import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getLists } from 'Services/getLists';

import SEOHeader from 'Components/SEOHeader';
import Carousel from 'Components/Carousel';
import { StyledHome, Title, FormBoard } from 'Styles/pages/HomeStyles';
import { useModal } from 'Hooks/useModal';
import { Modal } from 'Components/Modal';

export const Home = () => {
  const history = useHistory();
  const [board, setBoard] = useState([]);
  const [open, handleStateModal] = useModal();

  const TODO_DOING_DONE = [
    'To Do',
    'Things To Do',
    'Pendientes',
    'Doing',
    'En Curso',
    'Done',
    'Finalizados',
  ];

  const handleChange = (event) => {
    setBoard(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (board === '') {
      handleStateModal();
    } else {
      getLists({ boardID: `${board}` }).then((list) => {
        const MAX_NUMBER_OF_LISTS = 3;
        if (list.length === MAX_NUMBER_OF_LISTS) {
          list.filter((singleList) => {
            const capitalizeListTitle = singleList.name
              .trim()
              .toLowerCase()
              .replace(/\w\S*/g, (w) =>
                w.replace(/^\w/, (c) => c.toUpperCase())
              );
            return TODO_DOING_DONE.includes(capitalizeListTitle);
          });
          history.push(`/board/${board}`);
        } else if (list.length > MAX_NUMBER_OF_LISTS) {
          console.log(`Tu tablero cuenta con más de los listas necesarios`);
        } else if (list.length < MAX_NUMBER_OF_LISTS) {
          console.log(`Tu tablero cuenta con menos de los listas necesarios`);
        }
      });
    }
  };

  return (
    <>
      <SEOHeader title={'❣ Project Tracker'} />
      <StyledHome>
        <Title>
          Leemos tu tablero de Trello <br />
          <p>y analizamos tu progreso</p>
        </Title>
        <Carousel />
        <FormBoard onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            value={board}
            placeholder="Write your board ID"
          />
          <button>Search Board</button>
        </FormBoard>
      </StyledHome>
      {open && <Modal modal={open} onClose={handleStateModal} />}
    </>
  );
};
