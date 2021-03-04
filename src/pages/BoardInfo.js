import React, { useContext } from 'react';

import { SEOHeader } from 'Components/SEOHeader';
import { Context } from 'Context/BoardContext';
import Doughnut from 'Components/Doughnut';
import { Footer } from 'Components/Footer';

import {
  StyledInfo,
  Title,
  SubTitle,
  MembersContainer,
  Member,
  CardsContainer,
  ListCard,
  CardLeft,
  CardInner,
  Card,
  CardContainers,
  ContainerProgress,
} from 'Styles/pages/BoardInfoStyles';
import { ListContainer } from '../styles/pages/BoardInfoStyles';

export const BoardInfo = () => {
  const {
    board,
    setBoard,
    card,
    setCard,
    list,
    setList,
    member,
    setMember,
  } = useContext(Context);

  console
    .log
    // board,
    // card
    // list
    // member
    ();
  return (
    <>
      <SEOHeader title={`🔱 ${board.name}`} />
      <StyledInfo>
        <Title>Miembros de {board.name}: </Title>
        <MembersContainer>
          <Member>
            <div>JG</div>
            <p>Jenkins Gene</p>
          </Member>
          <Member>
            <div>BM</div>
            <p>Bernier Marcelo</p>
          </Member>
          <Member>
            <div>TS</div>
            <p>Tremblay Shanel</p>
          </Member>
          <Member>
            <div>KF</div>
            <p>Kertzmann Floy</p>
          </Member>
          <Member>
            <div>LD</div>
            <p>Larson Demario</p>
          </Member>
        </MembersContainer>
        <hr />
        <SubTitle>
          En total, tu proyecto tiene <strong>{card.length}</strong> tarjetas
        </SubTitle>
        <hr />
        {/* <SubTitle> Número de tarjetas que tienes en cada lista: </SubTitle> */}

        <CardsContainer>
          <SubTitle>Número de tarjetas que tienes en cada lista:</SubTitle>
          <ListCard>
            <CardContainers>
              <CardLeft></CardLeft>
              <CardInner></CardInner>
              <Card>
                <div>To do</div>
                <p>7</p>
              </Card>
            </CardContainers>

            <CardContainers>
              <CardLeft></CardLeft>
              <CardInner></CardInner>
              <Card>
                <div>Doing</div>
                <p>12</p>
              </Card>
            </CardContainers>
            <CardContainers>
              <CardLeft></CardLeft>
              <CardInner></CardInner>
              <Card>
                <div>Done</div>
                <p>4</p>
              </Card>
            </CardContainers>
          </ListCard>
        </CardsContainer>

        <hr />
        <ContainerProgress>
          <Title>
            <strong>Tu progreso:</strong>
          </Title>
          <progress max="100" value="69.56"></progress>
          <p>69.56%</p>
        </ContainerProgress>

        <hr />

        <Doughnut />

        <hr />

        <SubTitle>
          Sólo te falta completar el <strong>30.44%</strong> para terminar el
          proyecto
          {/* {console.log('necesitas hacer un if para cuando llegue al 100%')} */}
        </SubTitle>
      </StyledInfo>
      <Footer />
    </>
  );
};
