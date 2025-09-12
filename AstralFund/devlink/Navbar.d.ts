import * as React from "react";
import * as Types from "./types";

declare function Navbar(props: {
  as?: React.ElementType;
  navbarLinkFeatures?: React.ReactNode;
  navbarLinkProducts?: React.ReactNode;
  navbarLinkResources?: React.ReactNode;
  navbarLinkContact?: React.ReactNode;
  buttonTextGetStarted?: React.ReactNode;
  localeDropdownSlot?: Types.Devlink.Slot;
  navLink01?: Types.Basic.Link;
  navLink02?: Types.Basic.Link;
  navLink03?: Types.Basic.Link;
  navLink04?: Types.Basic.Link;
}): React.JSX.Element;
