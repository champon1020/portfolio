import React from "react";
import styled from "styled-components";

import HeadingText from "../../atoms/HeadingText";
import ExperienceItem from "./ExperienceItem";

type StyleProps = {
  position?: string;
};

const StyledContent = styled.div<StyleProps>`
  margin: auto;
  width: 50%;
  position: ${(props) => props?.position};
`;

type ItemTypes = typeof ExperienceItem;

type Props = {
  src: string;
  headingText: string;
  item: ItemTypes;
  style?: StyleProps;
};

const mock = [
  {
    organization:
      "National Institute of Advanced Industrial Science and Technology (AIST)",
    role: "Research Assistant",
    startDate: "June 2021",
    description:
      "Machine Learning, Computer Vision. I'm studying about video scene graph generation.",
  },
  {
    organization: "Mercari, Inc.",
    role: "Software Engineer",
    startDate: "August 2021",
    endDate: "September 2021",
    description: "Summer internship as backend engineer at Merpay.",
  },
];

const Content = (props: Props) => {
  return (
    <StyledContent {...props.style}>
      <HeadingText
        text={props.headingText}
        style={{
          display: "inline-block",
          fontSize: "5rem",
          color: "black",
        }}
      />
      <>
        {mock.map((data, i) => {
          return (
            <props.item key={i} {...data} style={{ margin: "3rem 0 0" }} />
          );
        })}
      </>
    </StyledContent>
  );
};

export default Content;
