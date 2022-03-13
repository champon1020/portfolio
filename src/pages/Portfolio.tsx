import React, { useEffect } from "react";
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

const StyledContent = styled.div`
  width: 55%;
  margin: auto;
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

interface HTMLEvent<T extends EventTarget> extends Event {
  target: T;
}

const Portfolio = () => {
  const handleOnScroll = () => {
    const mainTitleElem = document.getElementById("main-title");
    const iconBarElem = document.getElementById("icon-bar");
    const navBarElem = document.getElementById("navigation-bar");
    const navBarItemElems = document.getElementsByClassName(
      "navigation-bar-item"
    );
    const scrollTopPercentage =
      document.documentElement.scrollTop /
      document.documentElement.clientHeight;
    if (document.documentElement.scrollTop <= 636) {
      mainTitleElem.style.top = `${30 + scrollTopPercentage * 70}vh`;
    }
    if (document.documentElement.scrollTop <= 424) {
      iconBarElem.style.top = `${60 + scrollTopPercentage * 70}vh`;
    }
    if (document.documentElement.scrollTop < 901) {
      navBarElem.style.backgroundColor = "transparent";
      navBarElem.style.borderBottom = "transparent";
      Array.from(navBarItemElems).map(
        (e: HTMLElement) => (e.style.color = "white")
      );
    } else {
      navBarElem.style.backgroundColor = "white";
      navBarElem.style.borderBottom = "solid thin lightgray";
      Array.from(navBarItemElems).map((e: HTMLElement) => {
        e.style.color = "black";
      });
    }
    //console.log(document.documentElement.scrollTop);
  };

  useEffect(() => {
    history.scrollRestoration = "manual";
    window.addEventListener("scroll", handleOnScroll);
  }, []);

  return (
    <>
      <Navigation
        id="navigation-bar"
        texts={[
          "Experience",
          "Education",
          "Publication",
          "Workshop",
          "Activity",
        ]}
        destinations={[
          "experience",
          "education",
          "publication",
          "workshop",
          "activity",
        ]}
        style={{
          justifyContent: "right",
          width: "100%",
          top: "0%",
          right: "0%",
          height: "6vh",
          lineHeight: "6vh",
        }}
      />
      <HeadingText
        text={"Yoshiki Nagasaki"}
        id="main-title"
        style={{
          display: "block",
          width: "100%",
          textAlign: "center",
          fontSize: "10vh",
          color: "white",
          position: "absolute",
          top: "30vh",
          margin: "auto",
          zIndex: 998,
        }}
      />
      <IconBar
        id="icon-bar"
        style={{
          margin: "auto",
          width: "100%",
          position: "absolute",
          top: "60vh",
          zIndex: 997,
        }}
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
      <StyledContent>
        <Element name="experience">
          <Content<ExperienceType>
            headingText={"Experience"}
            data={experienceData}
            item={ExperienceItem}
            style={{
              margin: "5vh 0",
              width: "100%",
              position: "relative",
            }}
          />
        </Element>
        <Element name="education">
          <Content<EducationType>
            headingText={"Education"}
            data={educationData}
            item={EducationItem}
            style={{
              margin: "5vh 0",
              width: "100%",
              position: "relative",
            }}
          />
        </Element>
        <Element name="publication">
          <Content<PublicationType>
            headingText={"Publication"}
            data={publicationData}
            item={PublicationItem}
            style={{
              margin: "5vh 0",
              width: "100%",
              position: "relative",
            }}
          />
        </Element>
        <Element name="workshop">
          <Content<SymposiumType>
            headingText={"Workshop and Symposium"}
            data={symposiumData}
            item={SymposiumItem}
            style={{
              margin: "5vh 0",
              width: "100%",
              position: "relative",
            }}
          />
        </Element>
        <Element name="activity">
          <Content<ActivityType>
            headingText={"Activity"}
            data={activityDate}
            item={ActivityItem}
            style={{
              margin: "5vh 0",
              width: "100%",
              position: "relative",
            }}
          />
        </Element>
      </StyledContent>
    </>
  );
};

export default Portfolio;
