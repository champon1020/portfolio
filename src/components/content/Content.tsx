import React, { useEffect, useState } from "react";
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
  const [styleFlexDirection, setStyleFlexDirection] = useState("row");

  const handleResize = () => {
    if (screen.width > 768 && window.innerWidth > 768) {
      setStyleFlexDirection("row");
    } else {
      setStyleFlexDirection("column");
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <StyledContent {...props.style}>
      <HeadingText
        text={props.headingText}
        style={{
          display: "block",
          fontSize: "4vh",
          color: "black",
        }}
      />
      <>
        {props.data.map((data, i) => {
          return (
            <props.item
              key={i}
              {...data}
              style={{ margin: "3vh 0 0", flexDirection: styleFlexDirection }}
            />
          );
        })}
      </>
    </StyledContent>
  );
};

export default Content;
