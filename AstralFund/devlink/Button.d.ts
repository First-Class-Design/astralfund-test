import * as React from "react";
import * as Types from "./types";

declare function Button(props: {
  as?: React.ElementType;
  text?: React.ReactNode;
  iconLeadIcon?: Types.Visibility.VisibilityConditions;
  iconLeadIconClass?: Types.Builtin.Text;
  iconTailIcon?: Types.Visibility.VisibilityConditions;
  buttonText?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
  variant?: "Primary" | "Secondary" | "Outlined";
  iconRightIconSlot?: Types.Devlink.Slot;
}): React.JSX.Element;
