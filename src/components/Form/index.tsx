import { Container, LargeInput, MediumInput, SmallInput, StyledButton, StyledForm, StyledLabel, Wrapper } from "./Form.styles";

import React from "react";

function Form() {
  return (
    <StyledForm>
      <Wrapper>
        <StyledLabel>Cardholder Name</StyledLabel>
        <LargeInput placeholder="e.g. Jane Appleseed" />
      </Wrapper>
      <Wrapper>
        <StyledLabel>Card Number</StyledLabel>
        <LargeInput placeholder="e.g. 1234 5678 9123 0000" />
      </Wrapper>
      <Container>
        <Wrapper>
          <StyledLabel>Exp. Date (MM/YY)</StyledLabel>
          <Container>
            <SmallInput placeholder="MM" />
            <SmallInput placeholder="YY" />
          </Container>
        </Wrapper>
        <Wrapper>
          <StyledLabel>CVC</StyledLabel>
          <MediumInput placeholder="e.g. 123" />
        </Wrapper>
      </Container>
      <StyledButton>Confirm</StyledButton>
    </StyledForm>
  );
}

export default Form;
