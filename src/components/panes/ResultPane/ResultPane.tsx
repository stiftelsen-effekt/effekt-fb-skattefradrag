import React from "react";
import { NextButton } from "../../shared/Buttons/NavigationButtons.style";
import { CenteredParagraph, OrangeLink } from "../../Widget.style";
import { BlackTitle, InfoText } from "../FirstPane/MethodPane.style";
import { Pane } from "../Panes.style";

export const ResultPane: React.FC = () => {
  return (
    <Pane>
      <BlackTitle>Donasjonen din er nå registert for skattefradrag!</BlackTitle>
      <CenteredParagraph>
        Takk for at du donerer gjennom gieffektivt.no!
      </CenteredParagraph>
      <InfoText>
        {` Du kan få skattefradag for donasjoner inntil 50.000kr i året, for å se
        hvor mye du har donert hittil i år, gå til `}
        <OrangeLink href="https://gieffektivt.no/historikk" target="_blank">
          https://gieffektivt.no/historikk
        </OrangeLink>
        {` og tast inn eposten din, så mottar du straks en oversikt over alle dine donasjoner.`}
      </InfoText>

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
