/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/jsx-curly-newline */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Validate from "validator";
import { useForm } from "react-hook-form";
import { Pane } from "../Panes.style";
import { InputFieldWrapper } from "../Forms.style";
import { DonorForm } from "./DonorPane.style";
import { NextButton } from "../../shared/Buttons/NavigationButtons.style";
import { nextPane } from "../../../store/layout/actions";
import { TextInput } from "../../shared/Input/TextInput";
import { ErrorField } from "../../shared/Error/ErrorField";

interface FormValues {
  name: string;
  ssn: number;
}

export const SecondPane: React.FC = () => {
  const dispatch = useDispatch();
  const [nextDisabled, setNextDisabled] = useState(true);
  const [nameErrorAnimation, setNameErrorAnimation] = useState(false);
  const [ssnError, setSsnError] = useState(false);

  const { register, watch, errors, handleSubmit } = useForm<FormValues>();
  const watchAllFields = watch();

  useEffect(() => {
    errors.name ? setNameErrorAnimation(true) : setNameErrorAnimation(false);
    errors.ssn ? setSsnError(true) : setSsnError(false);

    if (Object.keys(errors).length === 0) {
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  }, [dispatch, errors, watchAllFields]);

  const paneSubmitted = () => {
    dispatch(nextPane());
  };

  return (
    <Pane>
      <DonorForm onSubmit={handleSubmit(paneSubmitted)}>
        <InputFieldWrapper>
          <TextInput
            name="name"
            type="text"
            placeholder="Navn"
            innerRef={register({ required: true, minLength: 3 })}
          />
          {nameErrorAnimation && <ErrorField text="Ugyldig navn" />}
          <TextInput
            name="ssn"
            type="number"
            inputMode="numeric"
            placeholder="Personnummer"
            innerRef={register({
              required: false,
              validate: (val) => {
                const trimmed = val.toString().trim();
                return (
                  Validate.isInt(trimmed) &&
                  (trimmed.length === 9 || trimmed.length === 11)
                );
              },
            })}
          />
          {ssnError && (
            <ErrorField text="Personnummer må være 9 eller 11 siffer" />
          )}
        </InputFieldWrapper>

        <NextButton type="submit" disabled={nextDisabled}>
          Neste
        </NextButton>
      </DonorForm>
    </Pane>
  );
};
