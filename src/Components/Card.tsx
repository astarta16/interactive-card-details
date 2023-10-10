import BgImage from "../assets/bg-main-desktop.png";
import CardFront from "../assets/bg-card-front.png";
import CardBack from "../assets/bg-card-back.png";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const CardImageFront = styled.img`
  position: absolute;
  top: 25%;
  left: 25%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: auto;
`;

const CardImageBack = styled.img`
  position: absolute;
  top: 55%;
  left: 30%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: auto;
`;

function Card() {
  return (
    <Container>
      <img src={BgImage} alt="Background" />
      <CardImageFront src={CardFront} alt="Card Front" />
      <CardImageBack src={CardBack} alt="Card Back" />
    </Container>
  );
}

export default Card;
