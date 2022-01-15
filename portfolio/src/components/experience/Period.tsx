import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledValue = styled.p`
  font-size: 1.8rem;
`;

type Props = {
  startPeriod?: string;
  endPeriod?: string;
};

const Period = (props: Props) => {
  const { startPeriod, endPeriod } = props;

  return (
    <StyledContainer>
      <StyledValue>{`${startPeriod}-${endPeriod}`}</StyledValue>
    </StyledContainer>
  );
};

export default Period;
