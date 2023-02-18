import styled from "styled-components";

export const StyledCard = styled.div`
  position: absolute;
  width: 541px;
  height: 527px;
  left: 164px;
  top: 187px;
  filter: drop-shadow(0px 39px 60px rgba(0, 0, 0, 0.142481));
  display: grid;
`;

export const CardsFront = styled.div`
  background: url(images/bg-card-front.png);
  width: 447px;
  height: 245px;
  align-self: start;
  justify-self: start;
  border-radius: 10px;
`;

export const CardsBack = styled.div`
  background: url(images/bg-card-back.png);
  width: 447px;
  height: 245px;
  align-self: end;
  justify-self: end;
  border-radius: 10px;
`;
