import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledValue = styled.h4`
  font-size: 1.8rem;
  padding: 0.1rem 0;
`;

type Props = {
  value: string;
};

const Author = (props: Props) => {
  const { value } = props;

  return (
    <StyledContainer>
      <StyledValue>{value}</StyledValue>
    </StyledContainer>
  );
};

export default Author;
