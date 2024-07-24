import { ReactElement } from "react";

export interface BodyProps {
  children:
    | ReactElement<HTMLTableRowElement>
    | ReactElement<HTMLTableRowElement>[];
}
