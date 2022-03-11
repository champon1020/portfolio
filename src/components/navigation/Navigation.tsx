import React from "react";
import styled from "styled-components";

import NavigationItem from "./NavigationItem";

type StyleProps = {
  height?: string;
  lineHeight?: string;
  width?: string;
  backgroundColor?: string;
};

const StyledNavigation = styled.div<StyleProps>`
  display: flex;
  position: fixed;
  z-index: 999;
  line-height: ${(props) => props.lineHeight};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
`;

type Props = {
  style?: StyleProps;
};

const Navigation = (props: Props) => {
  return (
    <StyledNavigation {...props.style}>
      <NavigationItem
        text="Experience"
        to="experience"
        style={{ margin: "0 2rem" }}
      />
      <NavigationItem
        text="Education"
        to="education"
        style={{ margin: "0 2rem" }}
      />
      <NavigationItem
        text="Publication"
        to="publication"
        style={{ margin: "0 2rem" }}
      />
      <NavigationItem
        text="Workshop"
        to="workshop"
        style={{ margin: "0 2rem" }}
      />
    </StyledNavigation>
  );
};

export default Navigation;
