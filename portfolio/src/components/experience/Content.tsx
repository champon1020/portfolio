import React from "react";
import styled from "styled-components";

import Discription from "./Discription";
import Period from "./Period";
import Role from "./Role";
import Workplace from "./Workplace";

const StyledContainer = styled.li`
  width: 100%;
  height: 100%;
  margin-top: 3rem;
`;

type Props = {
  workplace?: string;
  role?: string;
  startPeriod?: string;
  endPeriod?: string;
  discription?: string;
};

const Content = (props: Props) => {
  const { workplace, role, startPeriod, endPeriod, discription } = props;

  return (
    <StyledContainer>
      <Workplace workplace={workplace} />
      <Role role={role} />
      <Period startPeriod={startPeriod} endPeriod={endPeriod} />
      <Discription discription={discription} />
    </StyledContainer>
  );
};

export default Content;
