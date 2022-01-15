import React from "react";
import styled from "styled-components";

import IconBarItem from "./IconBarItem";

const StyledBar = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 5%;
`;

const baseUrl = "https://storage.googleapis.com/champon-portfolio/icons";

const linkList = [
  { src: `${baseUrl}/github.png`, url: "https://github.com/champon1020" },
  { src: `${baseUrl}/linkedin.png`, url: "https://github.com/champon1020" },
  { src: `${baseUrl}/twitter2.png`, url: "https://github.com/champon1020" },
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
