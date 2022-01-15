import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledValue = styled.p`
  font-size: 1.8rem;
  padding: 0.1rem 0;
`;

type Props = {
  value: string;
};

const SubTitle = (props: Props) => {
  const { value } = props;

  return (
    <StyledContainer>
      <StyledValue>{value}</StyledValue>
    </StyledContainer>
  );
};

export default SubTitle;
