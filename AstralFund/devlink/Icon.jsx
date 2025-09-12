"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Icon.module.css";

export function Icon({
  as: _Component = _Builtin.DOM,
  iconClass = "ph ph-arrow-up-right",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "icon-color")}
      tag="div"
      slot=""
      id=""
      _class=""
    >
      <_Builtin.DOM
        className={_utils.cx(_styles, "icon")}
        tag="span"
        slot=""
        _class={iconClass}
      >
        {""}
      </_Builtin.DOM>
    </_Component>
  );
}
