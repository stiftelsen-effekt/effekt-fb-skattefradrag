import { PaymentMethod, RecurringDonation, ShareType } from "../types/Enums";
import { Organization } from "../types/Organization";
import { ReferralType, Shares } from "../types/Temp";

export interface State {
  donation: Donation;
  layout: Layout;
  referrals: Referrals;
  error: Error;
}

export interface Layout {
  privacyPolicy: boolean;
  shareType: ShareType;
  paneNumber: number;
  answeredReferral?: boolean;
  height: number;
  loading: boolean;
  organizations?: [Organization];
}

export interface DonationInput {
  method?: PaymentMethod;
  sum: number;
  recurring: RecurringDonation;
  donor?: Donor;
  shares?: Shares;
}

export interface Donation extends DonationInput {
  kid?: string;
  paymentProviderURL?: string;
  isValid: boolean;
}

export interface DonorInput {
  name?: string;
  email?: string;
  taxDeduction?: boolean;
  ssn?: number;
  newsletter?: boolean;
}

export interface Donor extends DonorInput {
  donorID?: number;
}

export interface Referrals {
  referrals?: [ReferralType];
}

export interface DonorFormValues extends DonorInput {
  privacyPolicy: boolean;
}

export interface Share {
  organizationID: number;
  share: number;
}

export interface Error {
  isVisible: boolean;
  message: string;
}

export enum PaneNumber {
  MethodPane = 0,
  DonorPane = 1,
  DonationPane = 2,
  SharesPane = 3,
  ReferralPane = 4,
  PayPalPane = 5,
  VippsPane = 6,
  ResultPane = 7,
}
