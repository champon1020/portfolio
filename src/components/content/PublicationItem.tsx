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
  journal: string;
  title: string;
  link?: string;
  authors: string[];
  date: string;
  volume?: string;
  page?: string;
  description?: string;
  style?: StyleProps;
};

const PublicationItem = (props: Props) => {
  const journalProperty = (date: string, volume: string, page: string) => {
    const res = [];
    {
      volume ? res.push(volume) : "";
      page ? res.push(page) : "";
      date ? res.push(date) : "";
    }
    return res.join(", ");
  };

  return (
    <StyledItem {...props.style}>
      <div style={{ width: "35%" }}>
        <Text text={props.journal} style={{ fontSize: "1.6rem" }} />
        <Text
          text={`${journalProperty(props.date, props.volume, props.page)}`}
          style={{ fontSize: "1.6rem", margin: "0.5rem 0 0" }}
        />
      </div>
      <div style={{ width: "1%" }} />
      <div style={{ width: "64%" }}>
        <Text
          text={props.title}
          link={props.link}
          style={{ fontWeight: "bold", fontSize: "2.0rem" }}
        />
        <Text
          text={`${props.authors.join(", ")}`}
          style={{ fontSize: "1.6rem", margin: "0.2rem 0 0" }}
        />
        <ParsedText
          text={props.description}
          style={{ fontSize: "1.6rem", margin: "0.2rem 0 0", color: "gray" }}
        />
      </div>
    </StyledItem>
  );
};

export default PublicationItem;
