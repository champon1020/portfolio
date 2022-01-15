import React from "react";
import styled from "styled-components";

import Content from "./Content";

const StyledContainer = styled.ul<{ color?: string }>`
  width: 100%;
  color: ${({ color }) => (color != null ? color : "black")};
`;

type Props = {
  color?: string;
};

const Experience = (props: Props) => {
  const { color } = props;

  return (
    <StyledContainer color={color}>
      <Content
        workplace={
          "National Institute of Advanced Industrial Science and Technology (AIST)"
        }
        role={"Research Assistant"}
        startPeriod={"2021/06"}
        endPeriod={"Present"}
        discription={
          "Machine Learning, Computer Vision. I'm studying abound video scene graph generation."
        }
      />
      <Content
        workplace={"Mixi, Inc."}
        role={"Software Engineer"}
        startPeriod={"2021/10"}
        endPeriod={"2021/12"}
        discription={"Internship as backend engineer using C++."}
      />
      <Content
        workplace={"Mercari, Inc."}
        role={"Software Engineer"}
        startPeriod={"2021/08"}
        endPeriod={"2021/09"}
        discription={"Summer internship as backend engineer at Merpay."}
      />
      <Content
        workplace={"Mercari, Inc."}
        role={"Software Engineer"}
        startPeriod={"2020/09"}
        endPeriod={"2020/09"}
        discription={"Online Summer Internship for Gophers 2020."}
      />
      <Content
        workplace={"TeamLab"}
        role={"Software Engineer"}
        startPeriod={"2019/09"}
        endPeriod={"2019/09"}
        discription={
          "Summer internship as frontend engineer using Typescript and Vue."
        }
      />
      <Content
        workplace={"Nojima Infotech"}
        role={"Software Engineer"}
        startPeriod={"2019/03"}
        endPeriod={"2019/10"}
        discription={""}
      />
    </StyledContainer>
  );
};

export default Experience;
