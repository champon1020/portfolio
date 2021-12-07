import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  height: 6rem;
  background-color: yellow;
`;

const StyledHeaderContents = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  margin: 0 auto;
  background-color: pink;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-start;
  width: 60%;
  height: 100%;
  background-color: blue;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContents>
        <StyledNav />
      </StyledHeaderContents>
    </StyledHeader>
  );
};

export default Header;
