import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { SEOHeader } from 'Components/SEOHeader';
import { Carousel } from 'Components/Carousel';
import { StyledHome, Title, FormBoard } from 'Styles/pages/HomeStyles';
import { useModalWarning } from 'Hooks/useModalWarning';
import { ModalWarning } from 'Components/ModalWarning';

export const Home = () => {
  const history = useHistory();
  const [board, setBoard] = useState([]);
  const [open, handleStateModal] = useModalWarning();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (board === '') {
      handleStateModal();
    } else {
      history.push(`/board/${board}`);
    }
  };

  const handleChange = (event) => {
    setBoard(event.target.value);
  };

  return (
    <>
      <SEOHeader title={'Project Tracker ❣'} />
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
      {open && <ModalWarning modal={open} onClose={handleStateModal} />}
    </>
  );
};
