import React from "react";
import styled, { keyframes } from "styled-components";

import Image from "../atoms/Image";
import configData from "../configs/config.json";

const SlideAnim = keyframes`
  from {
    transform: translateX(70vw);
  }
  to {
    transform: translateX(0);
  }
`;

type StyleProps = {
  i: number;
  height?: string;
  margin?: string;
};

const StyledItem = styled.div<StyleProps>`
  cursor: pointer;
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  animation: ${SlideAnim}
    ${(props) => `${Math.exp(props.i * 0.1)}s ease-in-out 0s`};
  &:hover {
    opacity: 0.8;
  }
`;

type Props = {
  iconSrc: string;
  url: string;
  style?: StyleProps;
};

const IconBarItem = (props: Props) => {
  return (
    <StyledItem {...props.style}>
      <a href={props.url} target="_blank" rel="noreferrer">
        <Image
          src={`${configData.GCS_BASEURL}${props.iconSrc}`}
          alt={props.iconSrc}
          style={{ height: "6vh" }}
        />
      </a>
    </StyledItem>
  );
};

export default IconBarItem;
