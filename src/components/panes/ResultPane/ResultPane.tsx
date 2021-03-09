import React from "react";
import { Pane, PaneContainer } from "../Panes.style";

export const ResultPane: React.FC = () => {
  return (
    <Pane>
      <PaneContainer>
        <h2>Ditt svar er nå registrert</h2>
      </PaneContainer>
    </Pane>
  );
};
