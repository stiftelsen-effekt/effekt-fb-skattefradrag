import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../store/state";
import { OrangeLine } from "./ProgressBar.style";

export const ProgressBar: React.FC = () => {
  const paneNumber = useSelector((state: State) => state.layout.paneNumber);
  const hasAnswerredReferral = useSelector(
    (state: State) => state.layout.answeredReferral
  );
  const donorEmail = useSelector((state: State) => state.donation.donor?.email);

  const progressPercentage =
    paneNumber * 25 +
    (hasAnswerredReferral && donorEmail !== "anon@gieffektivt.no" ? 25 : 0);

  return (
    <OrangeLine style={{ width: `${progressPercentage}%`, height: "0.5vw" }} />
  );
};
