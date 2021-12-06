import React from "react";
import styled, { Keyframes } from "styled-components";

type StyleProps = {
  display?: string;
  margin?: string;
  height?: string;
  width?: string;
  opacity?: number;
  position?: string;
  top?: string;
  right?: string;
  zIndex?: number;
  cursor?: string;
  animation?: Keyframes;
  animationDuration?: string;
  animationTimingFunction?: string;
  animationDelay?: string;
};

const StyledImage = styled.img<StyleProps>`
  object-fit: cover;
  display: ${(props) => props?.display};
  z-index: ${(props) => props?.zIndex};
  margin: ${(props) => props?.margin};
  height: ${(props) => props?.height};
  width: ${(props) => props?.width};
  opacity: ${(props) => props?.opacity};
  position: ${(props) => props?.position};
  top: ${(props) => props?.top};
  right: ${(props) => props?.right};
  cursor: ${(props) => props?.cursor};
  animation: ${(props) => props?.animation}
    ${(props) => props?.animationDuration}
    ${(props) => props?.animationTimingFunction}
    ${(props) => props?.animationDelay};
`;

type Props = {
  src: string;
  alt: string;
  id?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  style?: StyleProps;
};

const Image = (props: Props) => {
  return (
    <>
      <StyledImage
        src={props.src}
        alt={props.alt}
        id={props.id}
        onClick={props.onClick}
        {...props.style}
      />
    </>
  );
};

export default Image;
