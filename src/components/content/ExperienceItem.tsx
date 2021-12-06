import React from "react";
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
  organization: string;
  role: string;
  startDate: string;
  endDate?: string;
  description?: string;
  style?: StyleProps;
};

const ExperienceItem = (props: Props) => {
  if (props.style.flexDirection == "column") {
    return (
      <StyledItem {...props.style}>
        <Text
          text={props.organization}
          style={{ fontWeight: "bold", fontSize: "2.2vh" }}
        />
        <Text
          text={`${props.startDate} - ${
            props.endDate ? props.endDate : "Present"
          }`}
          style={{ fontSize: "1.6vh", margin: "0.5vh 0 0" }}
        />
        <Text
          text={props.role}
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
        <Text
          text={`${props.startDate} - ${
            props.endDate ? props.endDate : "Present"
          }`}
          style={{ fontSize: "1.6vh" }}
        />
      </div>
      <div style={{ width: "3%" }} />
      <div style={{ width: "62%" }}>
        <Text
          text={props.organization}
          style={{ fontWeight: "bold", fontSize: "2.2vh" }}
        />
        <Text
          text={props.role}
          style={{ fontSize: "1.6vh", margin: "0.5vh 0 0" }}
        />
        <ParsedText
          text={props.description}
          style={{ fontSize: "1.6vh", margin: "0.2vh 0 0", color: "gray" }}
        />
      </div>
    </StyledItem>
  );
};

export default ExperienceItem;
