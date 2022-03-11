import React from "react";
import ReactDOM from "react-dom";
import { Element, Link } from "react-scroll";
import styled from "styled-components";

import HeadingText from "../atoms/HeadingText";
import Image from "../atoms/Image";
import Content from "../components/content/Content";
import ExperienceItem from "../components/content/ExperienceItem";
import Navigation from "../components/navigation/Navigation";
import configData from "../configs/config.json";

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
      <Navigation />
      <Image src={`${configData.GCS_BASEURL}/images/yokohama.jpg`} />
      <HeadingText
        text={"Yoshiki Nagasaki"}
        style={{
          display: "block",
          textAlign: "center",
          fontSize: "10rem",
          color: "white",
          position: "absolute",
          top: "30%",
        }}
      />
      <Element name="experience">
        <Content
          headingText={"Experience"}
          src={""}
          item={ExperienceItem}
          style={{ position: "relative" }}
        />
      </Element>
    </>
  );
};

export default Portfolio;
