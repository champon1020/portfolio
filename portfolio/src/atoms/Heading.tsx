import React from "react";
import styled from "styled-components";

import GlobalFonts from "../GlobalFonts";

const StyledHeading = styled.h3<{ color?: string; marginTop?: string }>`
  font-size: 5rem;
  display: inline-box;
  border-bottom: ${({ color }) =>
    `solid 0.2rem ${color != null ? color : "black"}`};
  color: ${({ color }) => (color != null ? color : "black")};
  margin-top: ${({ marginTop }) => (marginTop != null ? marginTop : 0)};
`;

type Props = {
  content: string;
  color?: string;
  marginTop?: string;
};

const Heading = (props: Props) => {
  const { content, color, marginTop } = props;

  return (
    <>
      <GlobalFonts />
      <StyledHeading color={color} marginTop={marginTop}>
        {content}
      </StyledHeading>
    </>
  );
};

export default Heading;
