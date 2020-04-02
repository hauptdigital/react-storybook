import styled from "@emotion/styled";

const Button = styled.button`
  border: none;
  outline: none;
  box-shadow: 0px 0px 1px 0px black;
  padding: ${props => getButtonPadding(props.size)};
  font-size: ${props => getButtonFontSize(props.size)};
  transition: 0.3s;
  &:hover {
    background-color: hotpink;
    color: white;
  }
`;

const buttonStyles = {
  XS: { padding: "5px", fontSize: "1em" },
  S: { padding: "5px", fontSize: "1.5em" },
  M: { padding: "5px 25px", fontSize: "2em" },
  L: { padding: "5px 25px", fontSize: "2.5em" },
  XL: { padding: "10px 25px", fontSize: "3em" },
  XXL: { padding: "15px 25px", fontSize: "4em" }
};

function getButtonPadding(size) {
  return buttonStyles[size].padding;
}

function getButtonFontSize(size) {
  return buttonStyles[size].fontSize;
}

export default Button;
