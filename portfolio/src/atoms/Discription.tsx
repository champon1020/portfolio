import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const StyledValue = styled.p`
  font-size: 1.6rem;
`;

const StyledLink = styled.div`
  display: inline-block;
  font-size: 1.6rem;
  cursor: pointer;
  color: pink;
  border-bottom: solid thin pink;
  margin: 0 1rem;
  &:hover {
    opacity: 0.8;
  }
`;

type Props = {
  value: string;
  link?: string;
};

const Discription = (props: Props) => {
  const { value, link } = props;

  const onClickLink = () => {
    window.open(link);
  };

  return (
    <StyledContainer>
      <StyledValue>{value}</StyledValue>
      {link != null ? (
        <StyledLink onClick={onClickLink}>{"link"}</StyledLink>
      ) : (
        ""
      )}
    </StyledContainer>
  );
};

export default Discription;
