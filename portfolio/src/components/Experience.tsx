import React from "react";
import styled from "styled-components";

import ExperienceItem from "./ExperienceItem";

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
      <ExperienceItem
        workplace={
          "National Institute of Advanced Industrial Science and Technology (AIST)"
        }
        role={"Research Assistant"}
        startMonth={"June"}
        startYear={2021}
        isPresent={true}
        discription={
          "Machine Learning, Computer Vision. I'm studying abound video scene graph generation."
        }
      />
      <ExperienceItem
        workplace={"Mixi, Inc."}
        role={"Software Engineer"}
        startMonth={"October"}
        startYear={2021}
        endMonth={"December"}
        endYear={2021}
        discription={"Internship as backend engineer using C++."}
      />
      <ExperienceItem
        workplace={"Mercari, Inc."}
        role={"Software Engineer"}
        startMonth={"August"}
        startYear={2021}
        endMonth={"September"}
        endYear={2021}
        discription={"Summer internship as backend engineer at Merpay."}
      />
      <ExperienceItem
        workplace={"Mercari, Inc."}
        role={"Software Engineer"}
        startMonth={"September"}
        startYear={2020}
        endMonth={"September"}
        endYear={2020}
        discription={"Online Summer Internship for Gophers 2020."}
      />
      <ExperienceItem
        workplace={"TeamLab"}
        role={"Software Engineer"}
        startMonth={"September"}
        startYear={2019}
        endMonth={"September"}
        endYear={2019}
        discription={
          "Summer internship as frontend engineer using Typescript and Vue."
        }
      />
      <ExperienceItem
        workplace={"Nojima Infotech"}
        role={"Software Engineer"}
        startMonth={"March"}
        startYear={2019}
        endMonth={"October"}
        endYear={2019}
        discription={""}
      />
    </StyledContainer>
  );
};

export default Experience;
