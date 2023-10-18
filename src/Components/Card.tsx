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

const CardText = styled.div`
  position: absolute;
  color: white; 
  transform: translate(-50%, -50%);
  font-size: 28px;
font-weight: 500;
letter-spacing: 3.422px;
`;

const CardName = styled.div`
  color: white; 
  font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 2px;
text-transform: uppercase;
transform: translate(-50%, -50%);
position: absolute;


`;

function Card() {
  return (
    <Container>
      <img src={BgImage} alt="Background" />
      <CardImageFront src={CardFront} alt="Card Front" />
      <CardText style={{ top: "25%", left: "43%" }}>0000 0000 0000 0000</CardText>
      <CardName style={{ top: "33%", left: "30%" }}>JANE APPLESEED</CardName>
      <CardName style={{ top: "33%", left: "60%" }}>00/00</CardName>


      
      <CardImageBack src={CardBack} alt="Card Back" />
      <CardText style={{ top: "56%", left: "64%" }}>000</CardText>
    </Container>
  );
}

export default Card;
