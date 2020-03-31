import React from "react";
import UserPassword from "../components/userPassword";

export default { title: "UserPassword" };

export const empty = () => <UserPassword defaultValue="" />;
export const notSafe = () => <UserPassword defaultValue="4444" />;
export const Safe = () => <UserPassword defaultValue="1010101010" />;
export const Safer = () => <UserPassword defaultValue="121212121212" />;
