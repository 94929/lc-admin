export type TEmailType = "A" | "B" | "C";

export type TEmail = {
  id: string;
  thumb: string;
  gender: boolean;
  type: TEmailType;
  contents: string;
  createdAt: string;
};

export type TEmails = Array<TEmail>;
