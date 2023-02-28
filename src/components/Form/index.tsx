import * as styles from "./Form.styles";

import React from "react";

function Form() {
  return (
    <styles.StyledForm>
      <styles.Wrapper>
        <styles.StyledLabel htmlFor="cardholder-name">Cardholder Name</styles.StyledLabel>
        <styles.LargeInput id="cardholder-name" placeholder="e.g. Jane Appleseed" />
      </styles.Wrapper>
      <styles.Wrapper>
        <styles.StyledLabel htmlFor="card-number">Card Number</styles.StyledLabel>
        <styles.LargeInput id="card-number" placeholder="e.g. 1234 5678 9123 0000" />
      </styles.Wrapper>
      <styles.Container>
        <styles.Wrapper>
          <styles.StyledLabel htmlFor="expiry-date">Exp. Date (MM/YY)</styles.StyledLabel>
          <styles.Container>
            <styles.SmallInput id="expiry-date" placeholder="MM" />
            <styles.SmallInput placeholder="YY" />
          </styles.Container>
        </styles.Wrapper>
        <styles.Wrapper>
          <styles.StyledLabel htmlFor="cvc">CVC</styles.StyledLabel>
          <styles.MediumInput id="cvc" placeholder="e.g. 123" />
        </styles.Wrapper>
      </styles.Container>
      <styles.StyledButton  type="submit">Confirm</styles.StyledButton>
    </styles.StyledForm>
  );
}

export default Form;
