import React from "react";
import { Link } from "react-scroll";
import styled, { Keyframes } from "styled-components";

import HeadingText from "../../atoms/HeadingText";

type StyleProps = {
  margin?: string;
  animation?: Keyframes;
  animationDuration?: string;
  animationDelay?: string;
  animationTimingFunction?: string;
};

const StyledNavigationItem = styled.div<StyleProps>`
  display: inline-block;
  margin: ${(props) => props.margin};
  animation: ${(props) => props?.animation}
    ${(props) => props?.animationDuration}
    ${(props) => props?.animationTimingFunction}
    ${(props) => props?.animationDelay};
`;

type Props = {
  text: string;
  to: string;
  className?: string;
  style?: StyleProps;
};

const NavigationItem = (props: Props) => {
  return (
    <StyledNavigationItem {...props.style}>
      <Link to={props.to}>
        <HeadingText
          className={props.className}
          text={props.text}
          style={{
            fontSize: "4vh",
            color: "white",
            hover: { opacity: 0.8, cursor: "pointer" },
          }}
        />
      </Link>
    </StyledNavigationItem>
  );
};

export default NavigationItem;
