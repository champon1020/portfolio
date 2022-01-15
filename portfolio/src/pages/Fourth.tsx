import React from "react";
import styled from "styled-components";

import Heading from "../atoms/Heading";
import Activities from "../components/Activities";
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
  background-color: #769b76;
`;

const Third = () => {
  return (
    <StyledContainer>
      <StyledImage src={`${configData.GCS_BASEURL}/images/earth.jpg`} />
      <StyledContent>
        <Heading content={"Activities"} color={"white"} />
        <Activities color={"white"} />
      </StyledContent>
    </StyledContainer>
  );
};

export default Third;
