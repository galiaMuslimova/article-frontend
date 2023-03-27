export enum FetchStatus {
  PENDING = "PENDING",
  FULFILLED = "FULFILLED",
  REJECTED = "REJECTED",
  INITIAL = "INITIAL",
}

export type AsyncState = {
  status: FetchStatus;
  error?: unknown;
};
