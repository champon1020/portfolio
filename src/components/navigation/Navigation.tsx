import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import MenuWhite from "../../assets/icons/menu_white.svg";
import HeadingText from "../../atoms/HeadingText";
import Image from "../../atoms/Image";
import NavigationItem from "./NavigationItem";

const AnimSlideInDelay = (initY: string) => keyframes`
  0% {
    transform: translateY(${initY});
    opacity: 0;
  }
  60% {
    transform: translateY(${initY});
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const AnimSlideIn = (initY: string) => keyframes`
  0% {
    transform: translateY(${initY});
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

type StyleProps = {
  height?: string;
  lineHeight?: string;
  width?: string;
  backgroundColor?: string;
  top?: string;
  right?: string;
  justifyContent?: string;
  zIndex?: number;
};

const StyledNavigation = styled.div<StyleProps>`
  display: flex;
  position: fixed;
  z-index: ${(props) => props.zIndex};
  justify-content: ${(props) => props.justifyContent};
  line-height: ${(props) => props.lineHeight};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  transition: 0.3s;
`;

const StyledNavigationDropdown = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: fixed;
  z-index: ${(props) => props.zIndex};
  line-height: ${(props) => props.lineHeight};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  transition: 0.3s;
`;

const StyleBody = styled.div<StyleProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: ${(props) => props.zIndex};
`;

type Props = {
  texts: string[];
  destinations: string[];
  dropdown: boolean;
  onDropdown?: () => void;
  onDropup?: () => void;
  id?: string;
  style?: StyleProps;
};

const Navigation = (props: Props) => {
  if (props.dropdown) {
    const [drop, setDrop] = useState(false);
    const handleOnClickDropdown = () => {
      props.onDropdown();
      setDrop(true);
    };
    const handleOnClickBody = () => {
      props.onDropup();
      setDrop(false);
    };
    return (
      <>
        <StyledNavigationDropdown
          id={`${props.id}-dropdown`}
          {...props.style}
          style={{ display: drop ? "none" : "unset" }}
        >
          <HeadingText
            id="navigation-bar-title"
            text="Yoshiki Nagasaki"
            style={{
              display: "none",
              fontSize: "3vh",
              margin: "0 1vh",
              position: "fixed",
              zIndex: props.style.zIndex - 1,
            }}
          />
          <Image
            id={`${props.id}-dropdown-icon`}
            src={MenuWhite}
            alt={"menu-icon"}
            onClick={handleOnClickDropdown}
            style={{
              position: "fixed",
              margin: "1vh",
              height: "4vh",
              top: props.style.top,
              right: props.style.right,
              zIndex: props.style.zIndex - 1,
              cursor: "pointer",
              animation: AnimSlideInDelay(`0vh`),
              animationDuration: "2.2s",
              animationDelay: "0s",
              animationTimingFunction: "ease",
            }}
          />
        </StyledNavigationDropdown>
        <StyleBody
          onClick={handleOnClickBody}
          style={{
            height: `${document.documentElement.scrollHeight}px`,
            zIndex: props.style.zIndex - 2,
            display: !drop ? "none" : "unset",
          }}
        />
        <StyledNavigationDropdown
          id={props.id}
          {...props.style}
          style={{ height: "unset", display: !drop ? "none" : "unset" }}
        >
          {props.texts.map((text, i) => {
            return (
              <NavigationItem
                className={`${props.id}-item`}
                key={i}
                text={text}
                onClick={handleOnClickBody}
                to={props.destinations[i]}
                style={{
                  fontSize: "3vh",
                  color: "white",
                  margin: "0 2vh",
                  animation: AnimSlideIn(`${-6 * i}vh`),
                  animationDuration: "1.0s",
                  animationDelay: "0s",
                  animationTimingFunction: "ease",
                }}
              />
            );
          })}
        </StyledNavigationDropdown>
      </>
    );
  }

  return (
    <>
      <HeadingText
        id="navigation-bar-title"
        text="Yoshiki Nagasaki"
        style={{
          display: "none",
          fontSize: "3vh",
          margin: "0 1vh",
          position: "fixed",
          zIndex: props.style.zIndex + 1,
          lineHeight: props.style.lineHeight,
        }}
      />
      <StyledNavigation id={props.id} {...props.style}>
        {props.texts.map((text, i) => {
          return (
            <NavigationItem
              className={`${props.id}-item`}
              key={i}
              text={text}
              to={props.destinations[i]}
              style={{
                fontSize: "3vh",
                color: "white",
                margin: "0 1vh",
                animation: AnimSlideInDelay(`${-6 * i}vh`),
                animationDuration: "2.2s",
                animationDelay: "0s",
                animationTimingFunction: "ease",
              }}
            />
          );
        })}
      </StyledNavigation>
    </>
  );
};

export default Navigation;
