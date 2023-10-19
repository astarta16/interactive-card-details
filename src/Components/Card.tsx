import React from "react";
import styled from "styled-components";
import BgImage from "../assets/bg-main-desktop.png";
import CardFront from "../assets/bg-card-front.png";
import CardBack from "../assets/bg-card-back.png";

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

interface CardProps {
  formData: FormData | null;
}

function Card({ formData }: CardProps) {
  return (
    <Container>
      <img src={BgImage} alt="Background" />
      <CardImageFront src={CardFront} alt="Card Front" />
      {formData ? (
        <>
          <CardText style={{ top: "25%", left: "43%" }}>
            {formData.cardNumber}
          </CardText>
          <CardName style={{ top: "33%", left: "30%" }}>
            {formData.fullName}
          </CardName>
          <CardName style={{ top: "33%", left: "60%" }}>
            {formData.expirationMonth}/{formData.expirationYear}
          </CardName>
        </>
      ) : null}

      <CardImageBack src={CardBack} alt="Card Back" />
      {formData ? (
        <CardText style={{ top: "56%", left: "64%" }}>{formData.cvc}</CardText>
      ) : null}
    </Container>
  );
}

export default Card;
