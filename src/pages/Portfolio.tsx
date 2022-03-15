import React, { useEffect, useState } from "react";
import { Element, Link } from "react-scroll";
import styled, { keyframes } from "styled-components";

import MenuBlack from "../assets/icons/menu_black.svg";
import MenuWhite from "../assets/icons/menu_white.svg";
import HeadingText from "../atoms/HeadingText";
import Image from "../atoms/Image";
import ContentList from "../components/content/ContentList";
import Footer from "../components/footer/Footer";
import IconBar from "../components/IconBar";
import Navigation from "../components/navigation/Navigation";
import configData from "../configs/config.json";

const AnimFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledPortfolio = styled.div`
  width: 100%;
  height: 100%;
  animation: ${AnimFadeIn} 0.8s ease-in-out 0s;
`;

const Portfolio = () => {
  const [dropdownNavigation, setDropdownNavigation] = useState(false);

  const handleOnScroll = () => {
    const mainTitleElem = document.getElementById("main-title");
    const iconBarElem = document.getElementById("icon-bar");
    const navBarElem = document.getElementById("navigation-bar");
    const navBarTitle = document.getElementById("navigation-bar-title");
    const navBarDropdown = document.getElementById("navigation-bar-dropdown");
    const navBarDropdownIcon = document.getElementById(
      "navigation-bar-dropdown-icon"
    );
    const navBarItemElems = document.getElementsByClassName(
      "navigation-bar-item"
    );
    const scrollTopPercentage =
      document.documentElement.scrollTop /
      document.documentElement.clientHeight;
    if (document.documentElement.scrollTop < 424) {
      if (mainTitleElem != null) {
        mainTitleElem.style.top = `${30 + scrollTopPercentage * 75}vh`;
      }
      if (iconBarElem != null) {
        iconBarElem.style.top = `${45 + scrollTopPercentage * 75}vh`;
      }
      if (navBarDropdownIcon != null) {
        (navBarDropdownIcon as HTMLImageElement).src = MenuWhite;
        navBarDropdown.style.backgroundColor = "transparent";
        navBarDropdown.style.borderBottom = "transparent";
      }
      if (navBarTitle != null) {
        navBarTitle.style.display = "none";
      }
      if (navBarElem != null) {
        navBarElem.style.backgroundColor = "transparent";
        navBarElem.style.borderBottom = "transparent";
      }
      Array.from(navBarItemElems).map(
        (e: HTMLElement) => (e.style.color = "white")
      );
    } else {
      if (navBarDropdownIcon != null) {
        (navBarDropdownIcon as HTMLImageElement).src = MenuBlack;
        navBarDropdown.style.backgroundColor = "white";
        navBarDropdown.style.borderBottom = "solid thin lightgray";
      }
      if (navBarTitle != null) {
        navBarTitle.style.display = "unset";
      }
      if (navBarElem != null) {
        navBarElem.style.backgroundColor = "white";
        navBarElem.style.borderBottom = "solid thin lightgray";
      }
      Array.from(navBarItemElems).map((e: HTMLElement) => {
        e.style.color = "black";
      });
    }
  };

  const handleOnResize = () => {
    if (window.screen.width <= 768 || window.innerWidth <= 768) {
      setDropdownNavigation(true);
      handleOnScroll();
    } else {
      setDropdownNavigation(false);
      handleOnScroll();
    }
  };

  const handleOnDropdownNavigation = () => {
    const bodyElem = document.getElementById("body");
    bodyElem.style.filter = "blur(4px)";
  };

  const handleOnDropupNavigation = () => {
    const bodyElem = document.getElementById("body");
    bodyElem.style.filter = "unset";
  };

  useEffect(() => {
    history.scrollRestoration = "manual";
    handleOnResize();
    window.addEventListener("scroll", handleOnScroll);
    window.addEventListener("resize", handleOnResize);
  }, []);

  return (
    <StyledPortfolio>
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
        dropdown={dropdownNavigation}
        onDropdown={handleOnDropdownNavigation}
        onDropup={handleOnDropupNavigation}
        style={{
          justifyContent: "right",
          width: "100%",
          top: "0%",
          right: "0%",
          height: "6vh",
          lineHeight: "6vh",
          zIndex: 999,
        }}
      />
      <div
        id="body"
        style={{ width: "100%", height: "100%", transition: ".3s" }}
      >
        <HeadingText
          text={"Yoshiki Nagasaki"}
          id="main-title"
          style={{
            display: "block",
            width: "100%",
            textAlign: "center",
            fontSize: "8vh",
            color: "white",
            position: "absolute",
            top: "30vh",
            margin: "auto",
            zIndex: 990,
          }}
        />
        <IconBar
          id="icon-bar"
          style={{
            margin: "auto",
            width: "100%",
            position: "absolute",
            top: "45vh",
            zIndex: 990,
          }}
        />
        <Image
          src={`${configData.GCS_BASEURL}/images/header-image.webp`}
          alt={"header-image"}
          style={{
            opacity: 0.7,
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        />
        <ContentList style={{ width: "55%", margin: "auto" }} />
        <Footer
          style={{
            fontSize: "1.5vh",
            margin: "6vh 0 0",
            height: "10vh",
            lineHeight: "10vh",
            backgroundColor: "white",
          }}
        />
      </div>
    </StyledPortfolio>
  );
};

export default Portfolio;
