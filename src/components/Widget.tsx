import React from "react";
import { FirstPane } from "./panes/FirstPane/FirstPane";
import { Carousel } from "./Carousel";
import "./Carousel.style.css";
import { ResultPane } from "./panes/ResultPane/ResultPane";

export const Widget: React.FC = () => {
  return (
    <div id="center-widget">
      <div id="widget">
        <Carousel>
          <ResultPane />
          <FirstPane />
          <ResultPane />
        </Carousel>
      </div>
    </div>
  );
};
