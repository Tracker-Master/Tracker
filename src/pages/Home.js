import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { palette, sizes, devices } from 'Routes/GlobalStyles';
import { Carousell, CarouselContainer } from 'Components/Carousell';

export const Home = () => {
  const [boardID, setBoardID] = useState('');
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    history.push(`/board/${boardID}`);
  };

  const handleChange = (evt) => {
    setBoardID(evt.target.value);
  };

  return (
    <>
      <Helmet>
        <title>🧡 Proyect Tracker</title>
        <meta property="og:title" content="Proyect Tracker" />
        <meta property="og:description" content="Proyect Tracker" />
        <meta property="og:image" content="" />
        <meta property="og:url" content=".github" />
        <meta property="og:site_name" content="Proyect Tracker" />
        <meta property="og:locale" content="es_EN" />
        <meta property="og:type" content="article" />
      </Helmet>
      <StyledHome>
        <Title>
          Leemos tu tablero de Trello <br /> y <br />{' '}
          <p>analizamos tu progreso</p>
        </Title>
        <CarouselContainer>
          <Carousell>
            <img src="https://i.imgur.com/USKP8pl.png" alt="" />
            <img src="https://i.imgur.com/UnbKc7E.png" alt="" />
            <img src="https://i.imgur.com/8GjBkuM.png" alt="" />
          </Carousell>
          <Carousell>
            <About>
              Sólo necesitas introducir el ID de tu tablero y nosotros haremos
              el resto
            </About>
            <About>
              Sabrás el número de miembros con los que cuenta tu tablero, y el
              nombre de cada uno de ellos
            </About>
            <About>
              Sabrás de una manera rápida el número total de tarjetas que tienes
              en cada lista
            </About>
          </Carousell>
        </CarouselContainer>
        <FormBoard onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            value={boardID}
            placeholder="Board ID"
          />
          <button>Search Board</button>
        </FormBoard>
      </StyledHome>
    </>
  );
};

export const StyledHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  max-width: ${sizes.desktop};
  margin: 0 auto;
  overflow: auto;
  background-image: url('https://i.imgur.com/M8kOD68.png');

  @media ${devices.breakpointsMobile} {
    width: 90%;
  }
`;
export const Title = styled.h1`
  text-align: center;
  color: ${palette.firstColor};
  & p {
    color: ${palette.secondColor};
  }
  @media ${devices.breakpointsMobile} {
    font-size: 1.5rem;
  }
`;
export const About = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  max-width: ${sizes.tablet};
  text-align: center;
  font-size: 0.875rem;
`;
export const FormBoard = styled.form`
  display: grid;
  width: 100%;
  gap: 1rem 0;
  justify-items: end;
  max-width: ${sizes.mobile};

  & input {
    width: 100%;
    height: 2rem;
    padding: 0 0.5rem;
    border: 2px solid ${palette.firstColor};
    border-radius: 1rem;
    outline: none;
    text-align: center;
    font-weight: 600;
    color: ${palette.firstColor};
  }
  & button {
    height: 2rem;
    width: 120px;
    border: none;
    border-radius: 1rem;
    box-shadow: 0 0 2px 2px ${palette.secondColor};
    background-color: ${palette.secondColor};
    color: ${palette.whiteColor};
    font-weight: bold;
  }
`;
