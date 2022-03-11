import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

import HeadingText from "../../atoms/HeadingText";

type StyleProps = {
  margin?: string;
};

const StyledNavigationItem = styled.div<StyleProps>`
  display: inline-block;
  margin: ${(props) => props.margin};
`;

type Props = {
  text: string;
  to: string;
  style?: StyleProps;
};

const NavigationItem = (props: Props) => {
  return (
    <StyledNavigationItem {...props.style}>
      <Link to={props.to}>
        <HeadingText
          text={props.text}
          style={{
            fontSize: "4rem",
            color: "white",
            hover: { opacity: 0.8, cursor: "pointer" },
          }}
        />
      </Link>
    </StyledNavigationItem>
  );
};

export default NavigationItem;
