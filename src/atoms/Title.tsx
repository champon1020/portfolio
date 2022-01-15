import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledValue = styled.h4`
  font-size: 2.4rem;
  font-weight: bold;
`;

type Props = {
  value: string;
};

const Title = (props: Props) => {
  const { value } = props;

  return (
    <StyledContainer>
      <StyledValue>{value}</StyledValue>
    </StyledContainer>
  );
};

export default Title;
