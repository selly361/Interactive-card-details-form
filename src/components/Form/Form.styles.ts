import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  position: absolute;
  height: 352px;
  width: 381px;
  left: 832px;
  top: 275px;
  display: flex;
  flex-flow: column;
  gap: 26px;
`;

export const StyledLabel = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #21092f;
`;

const commonInputStyles = css`
  background: #ffffff;
  border: 1px solid #dfdee0;
  border-radius: 8px;
  padding: 11px 0px 11px 16px;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #21092f;
  mix-blend-mode: normal;
  transition: 1s ease border-color;

  &:focus {
    border: 1px solid #6348fe;
  }

  &.error {
    border: 1px solid #FF5050;
  }
`;

export const LargeInput = styled.input`
  ${commonInputStyles}
  height: 45px;
  width: 381px;
`;

export const MediumInput = styled.input`
  ${commonInputStyles}
  height: 45px;
  width: 191px;
`;

export const SmallInput = styled.input`
  ${commonInputStyles}
  height: 45px;
  width: 80px;
`;

export const Wrapper = styled.fieldset`
  border: unset;
  display: grid;
  gap: 9px;
  justify-items: start;
`;

export const Container = styled.fieldset`
  border: unset;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-items: start;
  width: 170px;
`;

export const StyledButton = styled.button`
  background: #21092f;
  border-radius: 8px;
  height: 53px;
  width: 381px;
  display: grid;
  place-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
  cursor: pointer;
  transition: 1s ease background;


  &:hover {
    background: #6348fe;
  }
`;
