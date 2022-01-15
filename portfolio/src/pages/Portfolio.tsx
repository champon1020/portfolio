import React from "react";
import ReactPageScroller from "react-page-scroller";

import Fourth from "./Fourth";
import Second from "./Second";
import Third from "./Third";
import Top from "./Top";

const Portfolio = () => {
  return (
    <>
      <ReactPageScroller>
        <Top />
        <Second />
        <Third />
        <Fourth />
      </ReactPageScroller>
    </>
  );
};

export default Portfolio;
