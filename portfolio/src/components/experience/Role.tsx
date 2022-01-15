import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledValue = styled.p`
  font-size: 2rem;
`;

type Props = {
  role?: string;
};

const Role = (props: Props) => {
  const { role } = props;

  return (
    <StyledContainer>
      <StyledValue>{role}</StyledValue>
    </StyledContainer>
  );
};

export default Role;
