import { ReactNode } from "react";

export type KeysPath<Obj extends object> = Obj extends object
  ? {
      [Key in Extract<keyof Obj, string>]: Obj[Key] extends object
        ? `${Key}.${KeysPath<Obj[Key]>}`
        : Key;
    }[Extract<keyof Obj, string>]
  : never;

export type RequireAtLeastOneOf<T, Keys extends keyof T> = Omit<T, Keys> &
  {
    [K in Keys]: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

export type ObjectWithRequiredId = { id: number | string };

export interface Column<Item extends ObjectWithRequiredId> {
  name: string;
  accessor: KeysPath<Item> | ((item: Item) => ReactNode);
  filter?: (onChange: (value: string | number) => void) => ReactNode;
}
