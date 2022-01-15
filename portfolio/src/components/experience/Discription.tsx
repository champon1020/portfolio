import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledValue = styled.p`
  font-size: 1.6rem;
`;

type Props = {
  discription?: string;
};

const Discription = (props: Props) => {
  const { discription } = props;

  return (
    <StyledContainer>
      <StyledValue>{discription}</StyledValue>
    </StyledContainer>
  );
};

export default Discription;
