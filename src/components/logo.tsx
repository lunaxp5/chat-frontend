import React from "react";
import LogoImg from "../assets/logo.png";
import { styled } from "styled-components";

const LogoStyle = styled.img`
  margin: 16px 8px;
`;

const Logo = () => {
  return <LogoStyle src={LogoImg} alt="logo" />;
};
export default Logo;
