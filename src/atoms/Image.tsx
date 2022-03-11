import React from "react";
import styled from "styled-components";

type StyleProps = {
  height?: string;
  width?: string;
  opacity?: number;
  position?: string;
};

const StyledImage = styled.img<StyleProps>`
  object-fit: cover;
  height: ${(props) => props?.height};
  width: ${(props) => props?.width};
  opacity: ${(props) => props?.opacity};
  position: ${(props) => props?.position};
`;

type Props = {
  src: string;
  style?: StyleProps;
};

const Image = (props: Props) => {
  return (
    <>
      <StyledImage src={props.src} {...props.style} />
    </>
  );
};

export default Image;
