import React, { useCallback, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const SlideAnim = keyframes`
  from {
    transform: translateX(70vw);
  }
  to {
    transform: translateY(0);
  }
`;

const StyledListItem = styled.li<{ i: number; h: string; margin: string }>`
  height: ${({ h }) => h};
  margin: ${({ margin }) => margin};
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

  const [iconHeight, setIconHeight] = useState("6rem");
  const [iconMargin, setIconMargin] = useState("0 3rem");

  const onClickIcon = useCallback(() => {
    window.open(url);
  }, [url]);

  const handleResize = () => {
    setIconHeight(window.innerWidth > window.innerHeight ? "6rem" : "10rem");
    setIconMargin(
      window.innerWidth > window.innerHeight ? "0 3rem" : "0 1.5rem"
    );
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <StyledListItem
      i={i}
      h={iconHeight}
      margin={iconMargin}
      onClick={onClickIcon}
    >
      <StyledImage src={src} />
    </StyledListItem>
  );
};

export default IconBarItem;
