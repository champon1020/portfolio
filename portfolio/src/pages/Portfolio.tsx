import React from "react";
import ReactPageScroller from "react-page-scroller";

import Second from "./Second";
import Top from "./Top";

const Portfolio = () => {
  return (
    <>
      <ReactPageScroller>
        <Second />
        <Top />
      </ReactPageScroller>
    </>
  );
};

export default Portfolio;
