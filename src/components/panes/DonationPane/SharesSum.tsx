import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../../store/state";

const RedFont = styled.p`
  color: red;
  font-style: italic;
  margin-top: 5px;
  margin-left: 7px;
`;

export const SharesSum: React.FC = () => {
  const shares = useSelector((state: State) => state.donation.shares);
  const sum = shares.reduce((acc, curr) => acc + curr.share, 0);

  if (sum === 100) return null;

  return <RedFont>{`Du har fordelt ${sum} av 100 prosent`}</RedFont>;
};
