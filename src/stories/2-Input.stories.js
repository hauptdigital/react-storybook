import React from "react";
import UserPassword from "../components/UserPassword";

export default { title: "UserPassword" };

export const empty = () => <UserPassword value="" />;
export const notSafe = () => <UserPassword value="4444" />;
export const Safe = () => <UserPassword value="1010101010" />;
export const Safer = () => <UserPassword value="121212121212" />;
