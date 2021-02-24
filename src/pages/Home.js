import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import { useModal } from 'Hooks/useModal';
import { Carousel } from 'Components/Carousel';
import { 
  StyledHome,
  SliderContainer,
  Title, 
  About, 
  Form, 
  Input, 
  Button,
  Img
} from 'Styles/pages/HomeStyle';
import { ModalWarning } from 'Components/ModalWarning';

export const Home = () => {
  const [boardID, setBoardID] = useState('');
  const history = useHistory();
  const [open, handleStateModal] = useModal();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (boardID === '') {
      handleStateModal();
    } else {
      history.push(`/board/${boardID}`);
    }
  };

  const handleChange = (evt) => {
    setBoardID(evt.target.value);
  };

  return (
    <>
      <Helmet>
        <title>🧡 Proyect Tracker</title>
        <meta property='og:title' content='Proyect Tracker' />
        <meta property='og:description' content='Proyect Tracker' />
        <meta property='og:image' content='' />
        <meta property='og:url' content='.github' />
        <meta property='og:site_name' content='Proyect Tracker' />
        <meta property='og:locale' content='es_EN' />
        <meta property='og:type' content='article' />
      </Helmet>
      <StyledHome>
        <Title>
          Leemos tu tablero de Trello.
          <p>Analizamos tu progreso.</p>
        </Title>
        <SliderContainer>
          <Carousel pages>
            <Img src='https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/slider_one.svg' alt='Organizar' />
            <Img src='https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/slider_two.svg' alt='Planear' />
            <Img src='https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/slider_three.svg' alt='Conversar' />
          </Carousel>
          <Carousel>
            <About>Sólo necesitas introducir el ID de tu tablero y nosotros haremos el resto</About>
            <About>Sabrás el número de miembros con los que cuenta tu tablero, y el nombre de cada uno de ellos</About>
            <About>Sabrás de una manera rápida el número total de tarjetas que tienes en cada lista</About>
          </Carousel>
        </SliderContainer>
        <Form onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            type='text'
            placeholder='Escribe el ID de tu tablero'
          />
          <Button>Enviar</Button>
        </Form>
      </StyledHome>
      { open && <ModalWarning modal={open} onClose={handleStateModal} /> }
    </>
  );
};

