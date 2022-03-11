import React from "react";
import styled from "styled-components";

type StyleProps = {
  height?: string;
  width?: string;
};

const StyledImage = styled.img<StyleProps>`
  height: ${(props) => props?.height};
  width: ${(props) => props?.width};
  object-fit: cover;
  opacity: 0.7;
  position: relative;
`;

StyledImage.defaultProps = {
  height: "100%",
  width: "100%",
};

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
