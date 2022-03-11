import React from "react";
import ReactDOM from "react-dom";
import { Element, Link } from "react-scroll";
import styled from "styled-components";

import HeadingText from "../atoms/HeadingText";
import Image from "../atoms/Image";
import ActivityItem from "../components/content/ActivityItem";
import Content from "../components/content/Content";
import EducationItem from "../components/content/EducationItem";
import ExperienceItem from "../components/content/ExperienceItem";
import PublicationItem from "../components/content/PublicationItem";
import SymposiumItem from "../components/content/SymposiumItem";
import IconBar from "../components/IconBar";
import Navigation from "../components/navigation/Navigation";
import activityDate from "../configs/activity.json";
import configData from "../configs/config.json";
import educationData from "../configs/education.json";
import experienceData from "../configs/experience.json";
import publicationData from "../configs/publication.json";
import symposiumData from "../configs/symposium.json";
import {
  ActivityType,
  EducationType,
  ExperienceType,
  PublicationType,
  SymposiumType,
} from "../types/types";

interface HTMLEvent<T extends EventTarget> extends Event {
  target: T;
}

const Portfolio = () => {
  /*
  const onScroll = (e: HTMLEvent<HTMLDocument>) => {
    console.log(e.target.documentElement.scrollHeight);
    console.log(e.target.documentElement.scrollTop);
  };
  window.addEventListener("scroll", onScroll);
  */

  return (
    <>
      <Navigation
        style={{ width: "100%", height: "6rem", lineHeight: "6rem" }}
      />
      <HeadingText
        text={"Yoshiki Nagasaki"}
        style={{
          display: "block",
          width: "100%",
          textAlign: "center",
          fontSize: "10rem",
          color: "white",
          position: "absolute",
          top: "30vh",
          zIndex: 999,
        }}
      />
      <IconBar
        style={{ margin: "60vh auto", width: "100%", position: "absolute" }}
      />
      <Image
        src={`${configData.GCS_BASEURL}/images/yokohama.jpg`}
        style={{
          opacity: 0.7,
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      />
      <Element name="experience">
        <Content<ExperienceType>
          headingText={"Experience"}
          data={experienceData}
          item={ExperienceItem}
          style={{ margin: "5rem auto 0", width: "55%", position: "relative" }}
        />
      </Element>
      <Element name="education">
        <Content<EducationType>
          headingText={"Education"}
          data={educationData}
          item={EducationItem}
          style={{ margin: "5rem auto 0", width: "55%", position: "relative" }}
        />
      </Element>
      <Element name="publication">
        <Content<PublicationType>
          headingText={"Publication"}
          data={publicationData}
          item={PublicationItem}
          style={{ margin: "5rem auto 0", width: "55%", position: "relative" }}
        />
      </Element>
      <Element name="workshop">
        <Content<SymposiumType>
          headingText={"Workshop and Symposium"}
          data={symposiumData}
          item={SymposiumItem}
          style={{ margin: "5rem auto 0", width: "55%", position: "relative" }}
        />
      </Element>
      <Element name="activity">
        <Content<ActivityType>
          headingText={"Activity"}
          data={activityDate}
          item={ActivityItem}
          style={{ margin: "5rem auto 0", width: "55%", position: "relative" }}
        />
      </Element>
    </>
  );
};

export default Portfolio;
