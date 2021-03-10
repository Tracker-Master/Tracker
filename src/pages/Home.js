import React, { useState, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import { getLists } from 'Services/getLists';

import { SEOHeader } from 'Components/SEOHeader';
import { Carousel } from 'Components/Carousel';
import { CarouselDesktop } from 'Components/CarouselDesktop';
import { useModalWarning } from 'Hooks/useModalWarning';
import { ModalWarning } from 'Components/ModalWarning';

import { StyledHome, Title, FormBoard } from 'Styles/pages/HomeStyles';

export const Home = () => {
  const history = useHistory();
  // const home = useMemo(() => location.pathname, [location.pathname]);

  const [board, setBoard] = useState([]);
  const [open, handleStateModal] = useModalWarning();

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
        <Title id="Top">
          Leemos tu tablero de Trello <br />
          <p>y analizamos tu progreso</p>
        </Title>
        <Carousel />
        <CarouselDesktop />
        <img
          className="Logo"
          src="https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/background/tracker-logo-purple-with-text.svg"
          alt="carousel-slide-3"
        />
        <FormBoard onSubmit={handleSubmit} id="FormBoard">
          <input
            onChange={handleChange}
            type="text"
            value={board}
            placeholder="Write your board ID"
          />
          <button>Search Board</button>
        </FormBoard>
        <Link to="#Top" smooth>
          <img
            className="arrow-top"
            src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
            alt="arrow-top"
          />
        </Link>
      </StyledHome>
      {open && <ModalWarning modal={open} onClose={handleStateModal} />}
    </>
  );
};
