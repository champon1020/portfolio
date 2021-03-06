import React, { useMemo } from "react";
import styled from "styled-components";

import ParsedText from "../../atoms/ParsedText";
import Text from "../../atoms/Text";

type StyleProps = {
  margin?: string;
  flexDirection?: string;
};

const StyledItem = styled.div<StyleProps>`
  display: flex;
  flex-direction: ${(props) => props?.flexDirection};
  margin: ${(props) => props?.margin};
`;

type Props = {
  title: string;
  date: string;
  description?: string;
  style?: StyleProps;
};

const ActivityItem = (props: Props) => {
  const journalProperty = (date: string, volume: string, page: string) => {
    const res = [];
    {
      volume ? res.push(volume) : null;
      page ? res.push(page) : null;
      date ? res.push(date) : null;
    }
    return res.join(", ");
  };

  if (props.style.flexDirection == "column") {
    return (
      <StyledItem {...props.style}>
        <Text
          text={props.title}
          style={{ fontWeight: "bold", fontSize: "2.2vh" }}
        />
        <Text
          text={props.date}
          style={{ fontSize: "1.6vh", margin: "0.5vh 0 0" }}
        />
        <ParsedText
          text={props.description}
          style={{ fontSize: "1.6vh", margin: "0.5vh 0 0", color: "gray" }}
        />
      </StyledItem>
    );
  }

  return (
    <StyledItem {...props.style}>
      <div style={{ width: "35%" }}>
        <Text text={props.date} style={{ fontSize: "1.6vh" }} />
      </div>
      <div style={{ width: "3%" }} />
      <div style={{ width: "62%" }}>
        <Text
          text={props.title}
          style={{ fontWeight: "bold", fontSize: "2.2vh" }}
        />
        <ParsedText
          text={props.description}
          style={{ fontSize: "1.6vh", margin: "0.2vh 0 0", color: "gray" }}
        />
      </div>
    </StyledItem>
  );
};

export default ActivityItem;
