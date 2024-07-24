import { ReactElement } from "react";

export interface RowProps {
  children:
    | ReactElement<HTMLTableColElement>
    | ReactElement<HTMLTableColElement>[];
}
