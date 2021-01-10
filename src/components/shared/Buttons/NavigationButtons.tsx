/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setPaneNumber } from "../../../store/layout/actions";
import { State } from "../../../store/state";

// TODO: Remove all this

const NavigationButton = styled.button`
  background-color: white;
  border: none;
  height: 30px;
  width: 60px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  margin-bottom: 15px;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const StyledSkipButton = styled.button`
  background-color: #ffaa2b;
  border: none;
  height: 30px;
  width: 100px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  margin-bottom: 10px;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const ButtonText = styled.p`
  color: white;
  font-size: 15px;
  position: relative;
  bottom: 1px;
`;

const SmallButtonText = styled.p`
  color: gray;
  font-size: 13px;
`;

interface NextButtonProps {
  isDisabled: boolean;
  text?: string;
}

export function NextButton(props: NextButtonProps) {
  return (
    <NavigationButton type="submit" disabled={props.isDisabled}>
      <SmallButtonText>{props.text ? props.text : "Neste"}</SmallButtonText>
    </NavigationButton>
  );
}

export function PrevButton() {
  const currentPaneNumber = useSelector(
    (state: State) => state.layout.paneNumber
  );
  const isCustomShare = useSelector((state: State) => state.layout.shareType);
  const dispatch = useDispatch();

  function goBack() {
    if (!isCustomShare && currentPaneNumber === 4) {
      dispatch(setPaneNumber(currentPaneNumber - 2));
    } else {
      dispatch(setPaneNumber(currentPaneNumber - 1));
    }
  }

  return (
    <NavigationButton type="button" onClick={goBack}>
      <SmallButtonText>Tilbake</SmallButtonText>
    </NavigationButton>
  );
}

export function OrangeButton(props: any) {
  return (
    <StyledSkipButton type="button" onClick={props.onClick}>
      <ButtonText>{props.text}</ButtonText>
    </StyledSkipButton>
  );
}

export function NavButton(props: any) {
  return (
    <NavigationButton type="button" onClick={props.onClick}>
      <SmallButtonText>{props.text}</SmallButtonText>
    </NavigationButton>
  );
}

// END REMOVE