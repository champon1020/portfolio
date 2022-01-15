import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledValue = styled.h4`
  font-size: 2.5rem;
  font-weight: bold;
`;

type Props = {
  workplace?: string;
};

const Workplace = (props: Props) => {
  const { workplace } = props;

  return (
    <StyledContainer>
      <StyledValue>{workplace}</StyledValue>
    </StyledContainer>
  );
};

export default Workplace;
