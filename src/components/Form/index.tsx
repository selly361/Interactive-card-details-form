import {
  Container,
  LargeInput,
  MediumInput,
  SmallInput,
  StyledButton,
  StyledForm,
  StyledLabel,
  Wrapper,
} from "./Form.styles";

import React from "react";

function Form() {
  return (
    <StyledForm>
      <Wrapper>
        <StyledLabel htmlFor="cardholder-name">Cardholder Name</StyledLabel>
        <LargeInput id="cardholder-name" placeholder="e.g. Jane Appleseed" />
      </Wrapper>
      <Wrapper>
        <StyledLabel htmlFor="card-number">Card Number</StyledLabel>
        <LargeInput id="card-number" placeholder="e.g. 1234 5678 9123 0000" />
      </Wrapper>
      <Container>
        <Wrapper>
          <StyledLabel htmlFor="expiry-date">Exp. Date (MM/YY)</StyledLabel>
          <Container>
            <SmallInput id="expiry-date" placeholder="MM" />
            <SmallInput placeholder="YY" />
          </Container>
        </Wrapper>
        <Wrapper>
          <StyledLabel htmlFor="cvc">CVC</StyledLabel>
          <MediumInput id="cvc" placeholder="e.g. 123" />
        </Wrapper>
      </Container>
      <StyledButton  type="submit">Confirm</StyledButton>
    </StyledForm>
  );
}

export default Form;
