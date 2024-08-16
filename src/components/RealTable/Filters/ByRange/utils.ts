import { InputsState } from "./types";

export const prepareRange = (value: InputsState) => ({
  min: value.min !== "" ? Number(value.min) : undefined,
  max: value.max !== "" ? Number(value.max) : undefined,
});
