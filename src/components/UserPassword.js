import React from "react";
import styled from "@emotion/styled";

const PasswordInput = styled.input`
  background-color: hsla(
    ${props => props.hslaValues.hue},
    100%,
    67%,
    ${props => props.hslaValues.lightness}
  );
  border: none;
  outline: none;
  box-shadow: 0px 0px 1px 0px black;
  padding: 15px;
  font-size: 2em;
`;

function UserPassword({ defaultValue }) {
  const [hslaValues, setHslaValues] = React.useState({ hue: 0, lightness: 0 });

  function setInputBackgroundColor(inputValue) {
    const numberOfCharacters = inputValue.length;
    const updatedHslaValues = {
      hue: numberOfCharacters >= 12 ? 120 : numberOfCharacters * 10,
      lightness: numberOfCharacters === 0 ? 0 : 1
    };
    setHslaValues(updatedHslaValues);
  }

  React.useEffect(() => {
    if (defaultValue) {
      setInputBackgroundColor(defaultValue);
    }
  }, [defaultValue]);

  return (
    <PasswordInput
      type="password"
      onChange={event => {
        setInputBackgroundColor(event.target.value);
      }}
      hslaValues={hslaValues}
      defaultValue={defaultValue}
    />
  );
}

export default UserPassword;
