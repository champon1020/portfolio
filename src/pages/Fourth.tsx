import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Heading from "../atoms/Heading";
import Activities from "../components/Activities";
import configData from "../configs/config.json";

const StyledContainer = styled.div<{ flexDirection: string }>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
`;

const StyledImage = styled.img<{ w: string; h: string }>`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  object-fit: cover;
  opacity: 0.7;
`;

const StyledContent = styled.div<{ w: string; h: string }>`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  background-color: white;
  padding: 4rem;
  background-color: #769b76;
`;

const Third = () => {
  const [flexDirection, setFlexDirection] = useState("row");
  const [imageSize, setImageSize] = useState({ w: "50%", h: "100%" });
  const [contentSize, setContentSize] = useState({ w: "50%", h: "100%" });

  const handleResize = () => {
    setFlexDirection(window.innerWidth > window.innerHeight ? "row" : "column");
    setImageSize(
      window.innerWidth > window.innerHeight
        ? { w: "50%", h: "100%" }
        : { w: "100%", h: "30%" }
    );
    setContentSize(
      window.innerWidth > window.innerHeight
        ? { w: "50%", h: "100%" }
        : { w: "100%", h: "70%" }
    );
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <StyledContainer flexDirection={flexDirection}>
      <StyledImage
        w={imageSize.w}
        h={imageSize.h}
        src={`${configData.GCS_BASEURL}/images/earth.jpg`}
      />
      <StyledContent w={contentSize.w} h={contentSize.h}>
        <Heading content={"Activities"} color={"white"} />
        <Activities color={"white"} />
      </StyledContent>
    </StyledContainer>
  );
};

export default Third;
