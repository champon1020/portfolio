import React from "react";
import styled from "styled-components";

type StyleProps = {
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  color?: string;
};

const StyledText = styled.div<StyleProps>`
  font-size: ${(props) => props?.fontSize};
  font-weight: ${(props) => props?.fontWeight};
  margin: ${(props) => props?.margin};
  color: ${(props) => props?.color};
`;

type Props = {
  text: string;
  style?: StyleProps;
};

const Text = (props: Props) => {
  return <StyledText {...props.style}>{props.text}</StyledText>;
};

export default Text;
