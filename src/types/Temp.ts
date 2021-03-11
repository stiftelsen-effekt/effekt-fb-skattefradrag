export interface IServerResponse<T> {
  status: number;
  content: T | string;
}
export interface RegisterPaymentData {
  paymentID: string;
  email: string;
}
