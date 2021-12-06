import React from "react";
import { Link } from "react-scroll";
import styled, { Keyframes } from "styled-components";

import HeadingText from "../../atoms/HeadingText";

type StyleProps = {
  margin?: string;
  fontSize?: string;
  color?: string;
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
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  style?: StyleProps;
};

const NavigationItem = (props: Props) => {
  return (
    <StyledNavigationItem {...props.style}>
      <Link to={props.to}>
        <HeadingText
          onClick={props.onClick}
          className={props.className}
          text={props.text}
          style={{
            fontSize: props.style.fontSize,
            color: props.style.color,
            hover: { opacity: 0.8, cursor: "pointer" },
          }}
        />
      </Link>
    </StyledNavigationItem>
  );
};

export default NavigationItem;
