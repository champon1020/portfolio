import React, { useCallback } from "react";
import styled, { keyframes } from "styled-components";

const SlideAnim = keyframes`
  from {
    transform: translateX(70vw);
  }
  to {
    transform: translateY(0);
  }
`;

const StyledListItem = styled.li<{ i: number }>`
  height: 6rem;
  margin: 0 3rem;
  cursor: pointer;
  animation: ${SlideAnim} ${({ i }) => `${Math.exp(i * 0.1)}s ease-in-out 0s`};
`;

const StyledImage = styled.img`
  height: 100%;
  background-color: white;
  border-radius: 1rem;
  &:hover {
    opacity: 0.8;
  }
`;

type Props = {
  i: number;
  src: string;
  url: string;
};

const IconBarItem = (props: Props) => {
  const { i, src, url } = props;

  const onClickIcon = useCallback(() => {
    window.open(url);
  }, [url]);

  return (
    <StyledListItem i={i} onClick={onClickIcon}>
      <StyledImage src={src} />
    </StyledListItem>
  );
};

export default IconBarItem;
