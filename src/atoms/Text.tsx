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
  &:hover a {
    opacity: 0.8;
  }
`;

type Props = {
  text: string;
  link?: string;
  style?: StyleProps;
};

const Text = (props: Props) => {
  if (props.link) {
    return (
      <StyledText {...props.style}>
        <a href={props.link} target="_blank" rel="noreferrer">
          {props.text}
        </a>
      </StyledText>
    );
  }

  return <StyledText {...props.style}>{props.text}</StyledText>;
};

export default Text;
