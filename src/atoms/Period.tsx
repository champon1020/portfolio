import React, { useMemo } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledValue = styled.p`
  font-size: 1.8rem;
  padding: 0.1rem 0;
`;

type Props = {
  startMonth: string;
  startYear: number;
  endMonth?: string;
  endYear?: number;
  isPresent?: boolean;
};

const Period = (props: Props) => {
  const { startMonth, startYear, endMonth, endYear, isPresent } = props;

  const startPeriod = useMemo((): string => {
    return `${startMonth}, ${startYear}`;
  }, [startMonth, endMonth]);

  const endPeriod = useMemo((): string => {
    if (isPresent) {
      return "Present";
    }
    return `${endMonth}, ${endYear}`;
  }, [endMonth, endYear, isPresent]);

  return (
    <StyledContainer>
      <StyledValue>{`${startPeriod} ｰ ${endPeriod}`}</StyledValue>
    </StyledContainer>
  );
};

export default Period;
