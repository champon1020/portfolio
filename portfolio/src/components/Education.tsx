import React from "react";
import styled from "styled-components";

import EducationItem from "./EducationItem";

const StyledContainer = styled.ul<{ color?: string }>`
  width: 100%;
  color: ${({ color }) => (color != null ? color : "black")};
`;

type Props = {
  color?: string;
};

const Education = (props: Props) => {
  const { color } = props;

  return (
    <StyledContainer color={color}>
      <EducationItem
        workplace={"Keio University"}
        role={"Master's degree, Integrated Design Engineering"}
        startMonth={"April"}
        startYear={2021}
        isPresent={true}
        discription={""}
      />
      <EducationItem
        workplace={"Keio University"}
        role={"Bachelor, Electronic and Information Engineering"}
        startMonth={"April"}
        startYear={2017}
        endMonth={"March"}
        endYear={2021}
        discription={""}
      />
    </StyledContainer>
  );
};

export default Education;
