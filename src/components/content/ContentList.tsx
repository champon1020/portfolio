import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";

import activityDate from "../../configs/activity.json";
import configData from "../../configs/config.json";
import educationData from "../../configs/education.json";
import experienceData from "../../configs/experience.json";
import publicationData from "../../configs/publication.json";
import symposiumData from "../../configs/symposium.json";
import {
  ActivityType,
  EducationType,
  ExperienceType,
  PublicationType,
  SymposiumType,
} from "../../types/types";
import ActivityItem from "./ActivityItem";
import Content from "./Content";
import EducationItem from "./EducationItem";
import ExperienceItem from "./ExperienceItem";
import PublicationItem from "./PublicationItem";
import SymposiumItem from "./SymposiumItem";

type StyleProps = {
  width?: string;
  margin?: string;
};

const StyledContentList = styled.div<StyleProps>`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  @media all and (min-width: 1280px) and (max-width: 1400px) {
    width: 65%;
  }
  @media all and (min-width: 1024px) and (max-width: 1280px) {
    width: 75%;
  }
  @media all and (min-width: 768px) and (max-width: 1024px) {
    width: 85%;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    width: 90%;
  }
  @media all and (max-width: 480px) {
    width: 95%;
  }
`;

const defaultContentStyle = {
  padding: "6vh 0 0",
  width: "100%",
  position: "relative",
};

type Props = {
  style?: StyleProps;
};

const ContentList = (props: Props) => {
  return (
    <StyledContentList {...props.style}>
      <Element name="experience">
        <Content<ExperienceType>
          headingText={"Experience"}
          data={experienceData}
          item={ExperienceItem}
          style={{ ...defaultContentStyle }}
        />
      </Element>
      <Element name="education">
        <Content<EducationType>
          headingText={"Education"}
          data={educationData}
          item={EducationItem}
          style={{ ...defaultContentStyle }}
        />
      </Element>
      <Element name="publication">
        <Content<PublicationType>
          headingText={"Publication"}
          data={publicationData}
          item={PublicationItem}
          style={{ ...defaultContentStyle }}
        />
      </Element>
      <Element name="workshop">
        <Content<SymposiumType>
          headingText={"Workshop and Symposium"}
          data={symposiumData}
          item={SymposiumItem}
          style={{ ...defaultContentStyle }}
        />
      </Element>
      <Element name="activity">
        <Content<ActivityType>
          headingText={"Activity"}
          data={activityDate}
          item={ActivityItem}
          style={{ ...defaultContentStyle }}
        />
      </Element>
    </StyledContentList>
  );
};

export default ContentList;
