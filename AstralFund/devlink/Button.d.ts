import * as React from "react";
import * as Types from "./types";

declare function Button(props: {
  as?: React.ElementType;
  text?: React.ReactNode;
  tailIcon?: Types.Visibility.VisibilityConditions;
  leadIcon?: Types.Visibility.VisibilityConditions;
  iconLeadIconClass?: Types.Builtin.Text;
  iconTailIconClass?: Types.Builtin.Text;
  variant?: "Base" | "Secondary";
}): React.JSX.Element;
