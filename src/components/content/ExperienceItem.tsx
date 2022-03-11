import React from "react";
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
  organization: string;
  role: string;
  startDate: string;
  endDate?: string;
  description?: string;
  style?: StyleProps;
};

const ExperienceItem = (props: Props) => {
  return (
    <StyledItem {...props.style}>
      <div style={{ width: "35%" }}>
        <Text
          text={`${props.startDate} - ${
            props.endDate ? props.endDate : "Present"
          }`}
          style={{ fontSize: "1.6rem" }}
        />
      </div>
      <div style={{ width: "1%" }} />
      <div style={{ width: "64%" }}>
        <Text
          text={props.organization}
          style={{ fontWeight: "bold", fontSize: "2.0rem" }}
        />
        <Text
          text={props.role}
          style={{ fontSize: "1.6rem", margin: "0.5rem 0 0" }}
        />
        <ParsedText
          text={props.description}
          style={{ fontSize: "1.6rem", margin: "0.2rem 0 0", color: "gray" }}
        />
      </div>
    </StyledItem>
  );
};

export default ExperienceItem;
