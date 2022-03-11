import React from "react";
import styled from "styled-components";

type StyleProps = {
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  color?: string;
};

const StyledParsedText = styled.div<StyleProps>`
  font-size: ${(props) => props?.fontSize};
  font-weight: ${(props) => props?.fontWeight};
  margin: ${(props) => props?.margin};
  color: ${(props) => props?.color};
  & a {
    color: ${(props) => props?.color};
    text-decoration: underline;
  }
  & a:hover {
    opacity: 0.8;
  }
`;

type Props = {
  text: string;
  style?: StyleProps;
};

const ParsedText = (props: Props) => {
  return (
    <StyledParsedText
      {...props.style}
      dangerouslySetInnerHTML={{ __html: props.text }}
    />
  );
};

export default ParsedText;
