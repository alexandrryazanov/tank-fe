import React, { ReactElement } from "react";

type TrHTMLAttributes = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
>;

export interface RowProps extends TrHTMLAttributes {
  children:
    | ReactElement<HTMLTableColElement>
    | ReactElement<HTMLTableColElement>[];
}
