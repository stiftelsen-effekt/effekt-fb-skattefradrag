import { Organization } from "../types/Organization";
import { ReferralType } from "../types/Temp";

export interface State {
  layout: Layout;
  referrals: Referrals;
}

export interface Referrals {
  referrals?: [ReferralType];
}

export interface Layout {
  privacyPolicy: boolean;
  paneNumber: number;
  answeredReferral?: boolean;
  height: number;
  loading: boolean;
  organizations?: Organization[];
}
export interface Error {
  isVisible: boolean;
  message: string;
}

export enum PaneNumber {
  MethodPane = 0,
  DonorPane = 1,
  DonationPane = 2,
  ReferralPane = 3,
  ResultPane = 4,
}
