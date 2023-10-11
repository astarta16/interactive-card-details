import BgImage from "../assets/bg-main-desktop.png";
import CardFront from "../assets/bg-card-front.png";
import CardBack from "../assets/bg-card-back.png";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const CardImageFront = styled.img`
  position: absolute;
  top: 10%;
  left: 20%;
`;

const CardImageBack = styled.img`
  position: absolute;
  bottom: 30%;
  left: 30%;
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
