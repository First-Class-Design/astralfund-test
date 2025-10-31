import * as React from "react";
import * as Types from "./types";

declare function IconSize(props: {
  as?: React.ElementType;
  iconClass?: Types.Builtin.Text;
  variant?: "Base" | "SM" | "MD" | "LG" | "XL";
}): React.JSX.Element;
