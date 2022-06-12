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
  conference: string;
  title: string;
  link?: string;
  authors: string[];
  date: string;
  volume?: string;
  page?: string;
  description?: string;
  style?: StyleProps;
};

const ConferenceItem = (props: Props) => {
  const conferenceProperty = (date: string, volume: string, page: string) => {
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
          link={props.link}
          style={{ fontWeight: "bold", fontSize: "2.2vh" }}
        />
        <Text
          text={`${props.conference}, ${conferenceProperty(
            props.date,
            props.volume,
            props.page
          )}`}
          style={{ fontSize: "1.6vh", margin: "0.5vh 0 0" }}
        />
        <Text
          text={`${props.authors.join(", ")}`}
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
        <Text text={props.conference} style={{ fontSize: "1.6vh" }} />
        <Text
          text={`${conferenceProperty(props.date, props.volume, props.page)}`}
          style={{ fontSize: "1.6vh", margin: "0.5vh 0 0" }}
        />
      </div>
      <div style={{ width: "3%" }} />
      <div style={{ width: "62%" }}>
        <Text
          text={props.title}
          link={props.link}
          style={{ fontWeight: "bold", fontSize: "2.2vh" }}
        />
        <Text
          text={`${props.authors.join(", ")}`}
          style={{ fontSize: "1.6vh", margin: "0.2vh 0 0" }}
        />
        <ParsedText
          text={props.description}
          style={{ fontSize: "1.6vh", margin: "0.2vh 0 0", color: "gray" }}
        />
      </div>
    </StyledItem>
  );
};

export default ConferenceItem;
