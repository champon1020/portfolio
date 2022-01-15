import React from "react";
import ReactPageScroller from "react-page-scroller";

import Experience from "./Experience";
import Top from "./Top";

const Portfolio = () => {
  return (
    <>
      <ReactPageScroller>
        <Top />
        <Experience />
      </ReactPageScroller>
    </>
  );
};

export default Portfolio;
