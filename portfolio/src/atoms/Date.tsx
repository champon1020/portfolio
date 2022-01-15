import React from "react";
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
  month: string;
  year: number;
};

const Date = (props: Props) => {
  const { month, year } = props;

  return (
    <StyledContainer>
      <StyledValue>{`${month}, ${year}`}</StyledValue>
    </StyledContainer>
  );
};

export default Date;
