import { ReactElement } from "react";

export interface HeaderProps {
  children:
    | ReactElement<HTMLTableRowElement>
    | ReactElement<HTMLTableRowElement>[];
}
