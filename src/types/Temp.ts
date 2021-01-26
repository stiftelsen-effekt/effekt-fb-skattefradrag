export enum DonorType {
  ANONYMOUS,
  DONOR,
}

export interface Shares {
  [id: number]: number;
}

export interface IServerResponse<T> {
  status: number;
  content: T | string;
}

export interface OrganizationShare {
  id: number;
  share: number;
}

export interface ReferralData {
  referralID: number;
  donorID?: number;
  comment?: string;
}

export type ReferralType = {
  id: number;
  name: string;
  ordering: number;
};
