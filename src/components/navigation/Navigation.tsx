import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import NavigationItem from "./NavigationItem";

const StyledNavigation = styled.div`
  display: flex;
  line-height: 8rem;
  height: 8rem;
  width: 100%;
  background-color: transparent;
  position: fixed;
  z-index: 999;
`;

const StyledNavigationItem = styled.div`
  margin: 0 2rem;
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <StyledNavigationItem>
        <NavigationItem text="Experience" to="experience" />
      </StyledNavigationItem>
      <StyledNavigationItem>
        <NavigationItem text="Education" to="education" />
      </StyledNavigationItem>
    </StyledNavigation>
  );
};

export default Navigation;
