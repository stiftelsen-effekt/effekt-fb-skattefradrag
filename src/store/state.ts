import { Organization } from "../types/Organization";

export interface State {
  layout: Layout;
  referrals: unknown;
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
