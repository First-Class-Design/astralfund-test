"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconSize } from "./IconSize";
import * as _utils from "./utils";
import _styles from "./Icon.module.css";

export function Icon({
  as: _Component = _Builtin.DOM,
  iconClass = "ph ph-arrow-up-right",
  colour = "Primary",
  size = "Primary",
}) {
  const _styleVariantMap = {
    Primary: "",
    Secondary: "w-variant-35f46590-3ccc-a8c0-0469-200d55d19c93",
  };

  const _activeStyleVariant = _styleVariantMap[colour];

  return (
    <_Component
      className={_utils.cx(_styles, "icon-color", _activeStyleVariant)}
      tag="div"
      slot=""
      id=""
      style=""
      _class=""
    >
      <IconSize iconClass={iconClass} variant={size} />
    </_Component>
  );
}
