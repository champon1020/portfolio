import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-scroll";
import styled from "styled-components";

import HeadingText from "../../atoms/HeadingText";

const StyledNavigationItem = styled.div`
  font-size: 3rem;
  display: inline-block;
`;

type Props = {
  text: string;
  to: string;
};

const NavigationItem = (props: Props) => {
  return (
    <StyledNavigationItem>
      <Link to={props.to}>
        <HeadingText
          text={props.text}
          style={{
            color: "white",
            hover: { opacity: 0.8, cursor: "pointer" },
          }}
        />
      </Link>
    </StyledNavigationItem>
  );
};

export default NavigationItem;
