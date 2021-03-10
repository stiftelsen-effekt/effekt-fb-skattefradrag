/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/jsx-curly-newline */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Validate from "validator";
import { useForm } from "react-hook-form";
import { Pane } from "../Panes.style";
import { InputFieldWrapper } from "../Forms.style";
import { DonorForm } from "../SecondPane/DonorPane.style";
import { NextButton } from "../../shared/Buttons/NavigationButtons.style";
import { nextPane } from "../../../store/layout/actions";
import { TextInput } from "../../shared/Input/TextInput";
import { ErrorField } from "../../shared/Error/ErrorField";
import { InfoText } from "./MethodPane.style";

interface FormValues {
  email: string;
  facebookID: number;
}

export const FirstPane: React.FC = () => {
  const dispatch = useDispatch();
  const [nextDisabled, setNextDisabled] = useState(true);
  const [facebookIDError, setFacebookIDError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const { register, watch, errors, handleSubmit } = useForm<FormValues>();
  const watchAllFields = watch();

  useEffect(() => {
    errors.facebookID ? setFacebookIDError(true) : setFacebookIDError(false);
    errors.email ? setEmailError(true) : setEmailError(false);

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
      <InfoText>Les mer om skattefradrag for donasjoner under</InfoText>
      <DonorForm onSubmit={handleSubmit(paneSubmitted)}>
        <InputFieldWrapper>
          <TextInput
            name="email"
            type="text"
            placeholder="Epost"
            innerRef={register({
              required: true,
              validate: (val) => {
                const trimmed = val.trim();
                return Validate.isEmail(trimmed);
              },
            })}
          />
          {emailError && <ErrorField text="Ugyldig epost" />}
          <TextInput
            name="facebookID"
            type="number"
            placeholder="Betalings-ID (Facebook)"
            innerRef={register({
              required: true,
              minLength: 16,
              maxLength: 16,
            })}
          />
          {facebookIDError && (
            <ErrorField text="Betalings-ID må være 16 siffer" />
          )}
        </InputFieldWrapper>

        <NextButton type="submit" disabled={nextDisabled}>
          Neste
        </NextButton>
      </DonorForm>
    </Pane>
  );
};
