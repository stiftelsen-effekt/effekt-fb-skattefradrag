/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/jsx-curly-newline */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Validate from "validator";
import { useForm } from "react-hook-form";
import { Pane } from "../Panes.style";
import { DonorInput, State } from "../../../store/state";
import { InputFieldWrapper } from "../Forms.style";
import { DonorForm } from "./DonorPane.style";
import { NextButton } from "../../shared/Buttons/NavigationButtons.style";
import { nextPane } from "../../../store/layout/actions";
import { TextInput } from "../../shared/Input/TextInput";
import { ErrorField } from "../../shared/Error/ErrorField";

interface DonorFormValues extends DonorInput {
  privacyPolicy: boolean;
}

export const SecondPane: React.FC = () => {
  const dispatch = useDispatch();
  const layoutState = useSelector((state: State) => state.layout);
  const [nextDisabled, setNextDisabled] = useState(true);
  const [nameErrorAnimation, setNameErrorAnimation] = useState(false);
  const [emailErrorAnimation, setEmailErrorAnimation] = useState(false);

  const {
    register,
    watch,
    errors,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    clearErrors,
    setValue,
  } = useForm<DonorFormValues>();
  const watchAllFields = watch();

  useEffect(() => {
    setValue("privacyPolicy", layoutState.privacyPolicy);
  }, []);

  useEffect(() => {
    errors.name ? setNameErrorAnimation(true) : setNameErrorAnimation(false);
    errors.email ? setEmailErrorAnimation(true) : setEmailErrorAnimation(false);

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
          {emailErrorAnimation && <ErrorField text="Ugyldig epost" />}
        </InputFieldWrapper>

        <NextButton type="submit" disabled={nextDisabled}>
          Neste
        </NextButton>
      </DonorForm>
    </Pane>
  );
};
