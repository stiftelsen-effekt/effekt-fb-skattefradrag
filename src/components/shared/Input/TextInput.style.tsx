import styled from "styled-components";
import { gray18, orange15 } from "../../../config/colors";

export interface TextInputProps extends TextInputWrapperProps {
  type: string;
  name?: string;
  inputMode?: "text" | "numeric";
  placeholder?: string;
  defaultValue?: string | number;
  selectOnClick?: boolean;
  innerRef?: React.Ref<HTMLInputElement>;
  value?: string | undefined;
  tooltipText?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TextInputWrapperProps {
  label?: string;
  denomination?: string;
}

export const TextInputWrapper = styled.div`
  display: block;
  margin-bottom: 10px;
  font-size: 15px;
  border: 1px solid ${gray18};
  border-radius: 5px;
  box-sizing: border-box;
  position: relative;
  height: 60px;
  z-index: 1;

  ${(props: TextInputWrapperProps) => {
    if (props.denomination) {
      return `
        &:after {
          content: "${props.denomination}";
          height: 100%;
          position: absolute;
          right: 12px;
          top: 0;
          color: ${gray18};
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: normal;
        }
      `;
    }
    return "";
  }}

  transition: box-shadow 180ms;
  &:focus-within {
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const TextInputField = styled.input`
  z-index: 1;
  font-size: inherit;
  padding: 20px;
  ${(props: TextInputProps) => {
    if (props.denomination) {
      return `
        padding-right: 30px;
      `;
    }
    return "";
  }}
  text-align: ${(props: TextInputProps) => (props.label ? "right" : "left")};
  border: none;
  box-sizing: border-box;
  width: 100%;
  background: transparent;
  box-shadow: none;
  position: absolute;
  border-radius: 5px;
  left: 0px;

  transition: box-shadow 180ms;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 1.5px ${orange15};
  }
`;

export const ComputerInputLabel = styled.p`
  display: inline-block;
  padding: 5px;
  padding-left: 15px;
  font-weight: bold;

  @media only screen and (max-width: 385px) {
    font-size: 13px;
    padding-top: 10px;
  }

  @media only screen and (max-width: 355px) {
    display: none;
  }
`;

export const MobileInputLabel = styled.p`
  display: inline-block;
  padding: 5px;
  padding-left: 15px;
  font-weight: bold;
  padding-top: 10px;
  font-size: 14px;
  display: none;

  @media only screen and (max-width: 355px) {
    display: inline-block;
  }

  @media only screen and (max-width: 355px) {
    display: inline-block;
    font-size: 11px;
    padding-top: 12px;
  }
`;
