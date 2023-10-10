import React from 'react';
import BgImage from './assets/bg-main-desktop.png';
import CardFront from './assets/bg-card-front.png';
import CardBack from './assets/bg-card-back.png';
import styled from 'styled-components';
import Form from './Components/Form';

const Container = styled.div`
  position: relative;
`;

const CardImageBack = styled.img`
  position: absolute;
  top: 60%;
  left: 30%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: auto;
`;

const CardImageFront = styled.img`
  position: absolute;
  top: 25%;
  left: 22%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: auto;
`;

function App(): JSX.Element {
  return (
    <div>
      <Container>
        <img src={BgImage} alt="Background" />
        <CardImageFront src={CardFront} alt="Card Front" />
        <CardImageBack src={CardBack} alt="Card Back" />
      </Container>
      <Form />
    </div>
  );
}

export default App;
