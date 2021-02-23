import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { palette, sizes, devices } from 'Routes/GlobalStyles';
import { Carousell, CarouselContainer } from 'Components/Carousell';

export const Home = () => {
  const history = useHistory();
  const [board, setBoard] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/board/${board}`);
  };

  const handleChange = (event) => {
    setBoard(event.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Proyect Tracker</title>
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
          Leemos tu tablero de Trello <br />
          <p>y analizamos tu progreso</p>
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
            value={board}
            placeholder="Write your board ID"
          />
          <button>Search Board</button>
        </FormBoard>
      </StyledHome>
    </>
  );
};

export const StyledHome = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;
export const Title = styled.h1`
  text-align: center;
  color: ${palette.firstColor};
  @media ${devices.breakpointsMobile} {
    font-size: 1.5rem;
  }
  & p {
    color: ${palette.secondColor};
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
    color: ${palette.firstColor};
    & ::placeholder {
      opacity: 0.5;
    }
    & :focus {
      font-weight: 600;
    }
  }
  & button {
    margin-right: 0.125rem;
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
