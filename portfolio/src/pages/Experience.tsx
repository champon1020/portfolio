import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const StyledImage = styled.div`
  width: 50%;
  background-color: pink;
`;

const StyledContent = styled.div`
  width: 50%;
  background-color: white;
`;

const Experience = () => {
  return (
    <StyledContainer>
      <StyledImage></StyledImage>
      <StyledContent></StyledContent>
    </StyledContainer>
  );
};

export default Experience;
