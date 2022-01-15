import React from "react";
import styled from "styled-components";

import Discription from "../atoms/Discription";
import Period from "../atoms/Period";
import SubTitle from "../atoms/SubTitle";
import Title from "../atoms/Title";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 3rem;
`;

type Props = {
  workplace?: string;
  role?: string;
  startMonth?: string;
  startYear?: number;
  endMonth?: string;
  endYear?: number;
  isPresent?: boolean;
  discription?: string;
};

const EducationItem = (props: Props) => {
  const {
    workplace,
    role,
    startMonth,
    startYear,
    endMonth,
    endYear,
    isPresent,
    discription,
  } = props;

  return (
    <StyledContainer>
      <Title value={workplace} />
      <SubTitle value={role} />
      <Period
        startMonth={startMonth}
        startYear={startYear}
        endMonth={endMonth}
        endYear={endYear}
        isPresent={isPresent}
      />
      <Discription value={discription} />
    </StyledContainer>
  );
};

export default EducationItem;
