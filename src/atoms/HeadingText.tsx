import React from "react";
import styled, { Keyframes } from "styled-components";

import GlobalFonts from "../GlobalFonts";

type StyleProps = {
  display?: string;
  width?: string;
  textAlign?: string;
  textShadow?: string;
  fontSize?: string;
  color?: string;
  margin?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zIndex?: number;
  hover?: { opacity?: number; cursor?: string };
};

const StyledHeading = styled.h3<StyleProps>`
  display: ${(props) => props?.display};
  width: ${(props) => props?.width};
  text-align: ${(props) => props?.textAlign};
  text-shadow: ${(props) => props?.textShadow};
  font-size: ${(props) => props?.fontSize};
  color: ${(props) => props?.color};
  margin: ${(props) => props?.margin};
  position: ${(props) => props?.position};
  top: ${(props) => props?.top};
  left: ${(props) => props?.left};
  right: ${(props) => props?.right};
  bottom: ${(props) => props?.bottom};
  z-index: ${(props) => props?.zIndex};
  &:hover {
    opacity: ${(props) => props?.hover?.opacity};
    cursor: ${(props) => props?.hover?.cursor};
  }
`;

type Props = {
  text: string;
  id?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  style?: StyleProps;
};

const HeadingText = (props: Props) => {
  return (
    <>
      <GlobalFonts />
      <StyledHeading
        id={props.id}
        className={props.className}
        onClick={props.onClick}
        {...props.style}
      >
        {props.text}
      </StyledHeading>
    </>
  );
};

export default HeadingText;
