import React from "react";
import { NextButton } from "../../shared/Buttons/NavigationButtons.style";
import { OrangeLink } from "../../Widget.style";
import { BlackTitle, InfoText } from "../FirstPane/MethodPane.style";
import { Pane } from "../Panes.style";

export const ResultPane: React.FC = () => {
  return (
    <Pane>
      <BlackTitle>
        Donasjonene dine er nå registert for skattefradrag
      </BlackTitle>
      <InfoText>
        {`Hvis du ønsker å se hvor mye du har donert hittil i år, gå til `}
        <OrangeLink href="https://gieffektivt.no/historikk" target="_blank">
          https://gieffektivt.no/historikk
        </OrangeLink>
        {` og tast inn eposten din, så mottar du straks en oversikt over alle dine donasjoner.`}
        <br />
        <br />
        Takk for at du donerer gjennom gieffektivt.no!
      </InfoText>

      <NextButton
        onClick={() => {
          window.location.replace("https://gieffektivt.no/");
        }}
      >
        Tilbake til hovedsiden
      </NextButton>
    </Pane>
  );
};
