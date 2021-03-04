import React from "react";
import { FirstPane } from "./panes/FirstPane/FirstPane";
import { SecondPane } from "./panes/SecondPane/SecondPane";
import { Carousel } from "./Carousel";
import "./Carousel.style.css";

export const Widget: React.FC = () => {
  return (
    <div id="center-widget">
      <div id="widget">
        <Carousel>
          <FirstPane />
          <SecondPane />
        </Carousel>
      </div>
    </div>
  );
};
