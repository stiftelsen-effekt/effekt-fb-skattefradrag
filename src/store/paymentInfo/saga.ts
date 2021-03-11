import { SagaIterator } from "redux-saga";
import { call, put } from "redux-saga/effects";
import { Action } from "typescript-fsa";
import { API_URL } from "../../config/api";
import { IServerResponse, RegisterPaymentData } from "../../types/Temp";
import { nextPane } from "../layout/actions";
import { registerPaymentAction } from "./actions";

export function* registerPaymentFB(
  action: Action<RegisterPaymentData>
): SagaIterator<void> {
  try {
    const data = {
      paymentID: action.payload.paymentID,
      email: action.payload.email,
    };

    const request = yield call(fetch, `${API_URL}/facebook/register/payment`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result: IServerResponse<boolean> = yield call(
      request.json.bind(request)
    );
    if (result.status !== 200) throw new Error(result.content as string);

    yield put(
      registerPaymentAction.done({
        params: data,
        result: result.content as boolean,
      })
    );

    if (result.content === true) {
      yield put(nextPane());
    }
  } catch (ex) {
    yield put(
      registerPaymentAction.failed({ params: action.payload, error: ex })
    );
  }
}
