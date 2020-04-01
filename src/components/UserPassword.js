import styled from "@emotion/styled";

const PasswordInput = styled.input`
  border: none;
  outline: none;
  box-shadow: 0px 0px 1px 0px black;
  padding: 15px;
  font-size: 2em;
  &:focus {
    background-color: ${props =>
      `hsla(${calculateHue(props.value.length)}, 100%, 50%, ${calculateAlpha(
        props.value.length
      )})`};
  }
`;

function calculateHue(passwordLength) {
  return Math.min(passwordLength * 10, 120);
}

function calculateAlpha(passwordLength) {
  return passwordLength === 0 ? 0 : 1;
}

PasswordInput.defaultProps = {
  type: "password"
};

export default PasswordInput;
