import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { palette, sizes, devices } from 'Routes/GlobalStyles';

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
        <Title>Lorem ipsum</Title>
        <Image>Image</Image>
        <About>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quia
            accusantium, provident sed dolore repellat maiores harum molestias,
            ex eligendi, aliquid deserunt ducimus? Odio, excepturi perferendis
            obcaecati assumenda consequuntur facere.
          </p>
        </About>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            value={boardID}
            placeholder="Board ID"
          />
          <button>Search Board</button>
        </form>
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

  @media ${devices.breakpointsMobile} {
    width: 90%;
  }
`;
export const Title = styled.h1``;
export const Image = styled.picture``;
export const About = styled.div`
  p {
    text-align: justify;
  }
`;
export const Listas = styled.li`
  list-style: none;
  font-size: 11px;
`;
