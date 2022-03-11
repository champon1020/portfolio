import React from "react";
import styled from "styled-components";

import accountData from "../configs/account.json";
import configData from "../configs/config.json";
import IconBarItem from "./IconBarItem";

type StyleProps = {
  position?: string;
  width?: string;
  margin?: string;
};

const StyledBar = styled.ul<StyleProps>`
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  position: ${(props) => props.position};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`;

type Props = {
  style?: StyleProps;
};

const IconBar = (props: Props) => {
  return (
    <>
      <StyledBar {...props.style}>
        {accountData.map((data, i) => {
          return (
            <IconBarItem key={i} {...data} style={{ i: i, margin: "0 2rem" }} />
          );
        })}
      </StyledBar>
    </>
  );
};

export default IconBar;
