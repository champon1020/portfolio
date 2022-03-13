import React from "react";
import styled, { keyframes } from "styled-components";

import NavigationItem from "./NavigationItem";

const AnimSlideIn = (initY: string) => keyframes`
  0% {
    transform: translateY(${initY});
    opacity: 0;
  }
  60% {
    transform: translateY(${initY});
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

type StyleProps = {
  height?: string;
  lineHeight?: string;
  width?: string;
  backgroundColor?: string;
  top?: string;
  right?: string;
  justifyContent?: string;
};

const StyledNavigation = styled.div<StyleProps>`
  display: flex;
  position: fixed;
  z-index: 999;
  justify-content: ${(props) => props.justifyContent};
  line-height: ${(props) => props.lineHeight};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
`;

type Props = {
  texts: string[];
  destinations: string[];
  id?: string;
  style?: StyleProps;
};

const Navigation = (props: Props) => {
  return (
    <StyledNavigation id={props.id} {...props.style}>
      {props.texts.map((text, i) => {
        return (
          <NavigationItem
            className={`${props.id}-item`}
            key={i}
            text={text}
            to={props.destinations[i]}
            style={{
              margin: "0 2vh",
              animation: AnimSlideIn(`${-6 * i}vh`),
              animationDuration: "2.2s",
              animationDelay: "0s",
              animationTimingFunction: "ease",
            }}
          />
        );
      })}
    </StyledNavigation>
  );
};

export default Navigation;
