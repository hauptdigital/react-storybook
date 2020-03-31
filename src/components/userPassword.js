import React from "react";
import styled from "@emotion/styled";

const PasswordInput = styled.input`
  background-color: hsla(${props => props.hslColorValue}, 100%, 67%, 1);
  border: none;
  outline: none;
  padding: 15px;
  font-size: 2em;
`;

function UserPassword() {
  const [hslColorValue, setHslColorValue] = React.useState(0);

  function handleOnChange(numberOfCharacters) {
    const newHslColorValue =
      numberOfCharacters.length >= 12 ? 120 : numberOfCharacters.length * 10;
    setHslColorValue(newHslColorValue);
  }

  return (
    <>
      <PasswordInput
        type="password"
        onKeyUp={event => {
          handleOnChange(event.target.value);
        }}
        hslColorValue={hslColorValue}
      ></PasswordInput>
    </>
  );
}

export default UserPassword;
