import React from "react";
import styled from "styled-components";

import HeadingText from "../../atoms/HeadingText";

type StyleProps = {
  width?: string;
  margin?: string;
  position?: string;
};

const StyledContent = styled.div<StyleProps>`
  margin: ${(props) => props?.margin};
  width: ${(props) => props?.width};
  position: ${(props) => props?.position};
`;

type Props<D> = {
  headingText: string;
  data: D[];
  item: React.ElementType;
  style?: StyleProps;
};

const Content = <D,>(props: Props<D>) => {
  return (
    <StyledContent {...props.style}>
      <HeadingText
        text={props.headingText}
        style={{
          display: "block",
          fontSize: "5rem",
          color: "black",
        }}
      />
      <>
        {props.data.map((data, i) => {
          return (
            <props.item key={i} {...data} style={{ margin: "3rem 0 0" }} />
          );
        })}
      </>
    </StyledContent>
  );
};

export default Content;
