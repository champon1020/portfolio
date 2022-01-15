import React from "react";
import styled from "styled-components";

import Heading from "../atoms/Heading";
import Experience from "../components/Experience";
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
  background-color: lightslategray;
`;

const StyledHeading = styled.h3`
  font-size: 6rem;
  display: inline;
  border-bottom: solid 0.2rem black;
`;

const Second = () => {
  return (
    <StyledContainer>
      <StyledImage src={`${configData.GCS_BASEURL}/images/yokohama.jpg`} />
      <StyledContent>
        <Heading content={"Experience"} color={"white"} />
        <Experience color={"white"} />
      </StyledContent>
    </StyledContainer>
  );
};

export default Second;
