import React from "react";
import { NextButton } from "../../shared/Buttons/NavigationButtons.style";
import { CenteredParagraph } from "../../Widget.style";
import { BlackTitle } from "../FirstPane/MethodPane.style";
import { Pane } from "../Panes.style";

export const ResultPane: React.FC = () => {
  return (
    <Pane>
      <BlackTitle>Donasjonen din er nå registert for skattefradrag!</BlackTitle>
      <CenteredParagraph>
        Takk for at du donerer gjennom gieffektivt.no!
      </CenteredParagraph>
      <NextButton
        onClick={() => {
          window.location.href = "https://gieffektivt.no/";
        }}
      >
        Tilbake til hovedsiden
      </NextButton>
    </Pane>
  );
};
