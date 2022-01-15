import React from "react";
import styled from "styled-components";

import configData from "../configs/config.json";
import IconBarItem from "./IconBarItem";

const StyledBar = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 5%;
`;

const linkList = [
  {
    src: `${configData.GCS_BASEURL}/icons/github.png`,
    url: configData.LINKS.GITHUB,
  },
  {
    src: `${configData.GCS_BASEURL}/icons/linkedin.png`,
    url: configData.LINKS.LINKEDIN,
  },
  {
    src: `${configData.GCS_BASEURL}/icons/twitter2.png`,
    url: configData.LINKS.TWITTER,
  },
];

const IconBar = () => {
  const itemList = (): JSX.Element[] => {
    const list = [] as JSX.Element[];
    linkList.map((v, i) => {
      list.push(<IconBarItem key={i} i={i} src={v.src} url={v.url} />);
    });
    return list;
  };

  return <StyledBar>{itemList()}</StyledBar>;
};

export default IconBar;
