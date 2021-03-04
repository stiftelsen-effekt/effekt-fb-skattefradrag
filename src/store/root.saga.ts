import { all, takeLatest } from "redux-saga/effects";
import { fetchOrganizationsAction } from "./layout/actions";
import { fetchOrganizations } from "./layout/saga";
import {
  fetchReferralsAction,
  submitReferralAction,
} from "./referrals/actions";
import { fetchReferrals, submitReferral } from "./referrals/saga";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function* watchAll() {
  yield all([
    takeLatest(fetchOrganizationsAction.started.type, fetchOrganizations),
    takeLatest(fetchReferralsAction.started.type, fetchReferrals),
    takeLatest(submitReferralAction.started.type, submitReferral),
  ]);
}

export default watchAll;
