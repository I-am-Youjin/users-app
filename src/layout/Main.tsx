import React, { PropsWithChildren } from "react";
import { StyledMain, StyledWrapper } from "./styles";
// import SignUpForm from '../components/SignUpForm/SignUpForm';

const Main: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledMain>
      <StyledWrapper>{children}</StyledWrapper>
    </StyledMain>
  );
};

export default Main;
