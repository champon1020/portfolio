import React, { useMemo } from "react";
import styled from "styled-components";

import ParsedText from "../../atoms/ParsedText";
import Text from "../../atoms/Text";

type StyleProps = {
  margin?: string;
};

const StyledItem = styled.div<StyleProps>`
  display: flex;
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

  return (
    <StyledItem {...props.style}>
      <div style={{ width: "35%" }}>
        <Text text={props.date} style={{ fontSize: "1.6rem" }} />
      </div>
      <div style={{ width: "1%" }} />
      <div style={{ width: "64%" }}>
        <Text
          text={props.title}
          style={{ fontWeight: "bold", fontSize: "2.0rem" }}
        />
        <ParsedText
          text={props.description}
          style={{ fontSize: "1.6rem", margin: "0.2rem 0 0", color: "gray" }}
        />
      </div>
    </StyledItem>
  );
};

export default ActivityItem;
