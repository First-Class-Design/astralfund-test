"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./IconSize.module.css";

export function IconSize({
  as: _Component = _Builtin.DOM,
  iconClass = "ph ph-arrow-up-right",
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    SM: "w-variant-9085cd75-b743-0b47-c21a-b456074e2b98",
    MD: "w-variant-8c3b6a97-2511-dfca-2683-08f2e0d6a010",
    LG: "w-variant-8c61eed1-ed32-75ad-018a-9e89c48619ba",
    XL: "w-variant-c40b7337-e63a-5a57-35b7-daadecb2cd96",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "icon", _activeStyleVariant)}
      tag="span"
      slot=""
      _class={iconClass}
    >
      {""}
    </_Component>
  );
}
