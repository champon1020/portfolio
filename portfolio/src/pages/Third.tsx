import React from "react";
import styled from "styled-components";

import Heading from "../atoms/Heading";
import Conference from "../components/Conference";
import Education from "../components/Education";
import Publication from "../components/Publication";
import configData from "../configs/config.json";

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const StyledImage = styled.img`
  width: 50%;
  object-fit: cover;
  opacity: 0.7;
`;

const StyledContent = styled.div`
  width: 50%;
  background-color: white;
  padding: 4rem;
  background-color: #9b7681;
`;

const Third = () => {
  return (
    <StyledContainer>
      <StyledContent>
        <Heading content={"Education"} color={"white"} />
        <Education color={"white"} />
        <Heading content={"Publication"} color={"white"} marginTop={"4rem"} />
        <Publication color={"white"} />
        <Heading content={"Conference"} color={"white"} marginTop={"4rem"} />
        <Conference color={"white"} />
      </StyledContent>
      <StyledImage src={`${configData.GCS_BASEURL}/images/buildings.jpg`} />
    </StyledContainer>
  );
};

export default Third;
