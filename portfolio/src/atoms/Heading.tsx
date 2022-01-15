import React from "react";
import styled from "styled-components";

import GlobalFonts from "../GlobalFonts";

const StyledHeading = styled.h3<{ color?: string }>`
  font-size: 6rem;
  display: inline;
  border-bottom: ${({ color }) =>
    `solid 0.2rem ${color != null ? color : "black"}`};
  color: ${({ color }) => (color != null ? color : "black")};
`;

type Props = {
  content: string;
  color?: string;
};

const Heading = (props: Props) => {
  const { content, color } = props;

  return (
    <>
      <GlobalFonts />
      <StyledHeading color={color}>{content}</StyledHeading>
    </>
  );
};

export default Heading;
