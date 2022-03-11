import React from "react";
import styled from "styled-components";

import GlobalFonts from "../GlobalFonts";

type StyleProps = {
  display?: string;
  width?: string;
  textAlign?: string;
  fontSize?: string;
  color?: string;
  margin?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  hover?: { opacity?: number; cursor?: string };
};

const StyledHeading = styled.h3<StyleProps>`
  display: ${(props) => props?.display};
  width: ${(props) => props?.width};
  text-align: ${(props) => props?.textAlign};
  font-size: ${(props) => props?.fontSize};
  color: ${(props) => props?.color};
  margin: ${(props) => props?.margin};
  position: ${(props) => props?.position};
  top: ${(props) => props?.top};
  left: ${(props) => props?.left};
  right: ${(props) => props?.right};
  bottom: ${(props) => props?.bottom};
  &:hover {
    opacity: ${(props) => props?.hover?.opacity};
    cursor: ${(props) => props?.hover?.cursor};
  }
`;

StyledHeading.defaultProps = {
  display: "inline-block",
  fontSize: "5rem",
  width: "100%",
  textAlign: "none",
  color: "black",
  margin: "0",
  position: "none",
  hover: {
    opacity: 1,
    cursor: "none",
  },
};

type Props = {
  text: string;
  style?: StyleProps;
};

const HeadingText = (props: Props) => {
  return (
    <>
      <GlobalFonts />
      <StyledHeading {...props.style}>{props.text}</StyledHeading>
    </>
  );
};

export default HeadingText;
