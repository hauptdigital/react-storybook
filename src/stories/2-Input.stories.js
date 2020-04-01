import React from "react";
import UserPassword from "../components/UserPassword";

export default { title: "UserPassword" };

export const Empty = () => {
  const [value, setValue] = React.useState("");
  return (
    <UserPassword
      onChange={event => setValue(event.target.value)}
      value={value}
    />
  );
};

export const NotSafe = () => {
  const [value, setValue] = React.useState("4444");
  return (
    <UserPassword
      onChange={event => setValue(event.target.value)}
      value={value}
    />
  );
};

export const Safe = () => {
  const [value, setValue] = React.useState("1010101010");
  return (
    <UserPassword
      onChange={event => setValue(event.target.value)}
      value={value}
    />
  );
};

export const Safer = () => {
  const [value, setValue] = React.useState("121212121212");
  return (
    <UserPassword
      onChange={event => setValue(event.target.value)}
      value={value}
    />
  );
};
