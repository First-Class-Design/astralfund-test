"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Icon } from "./Icon";
import * as _utils from "./utils";
import _styles from "./Button.module.css";

export function Button({
  as: _Component = _Builtin.Link,
  text = "This is the default text value",
  iconLeadIcon = false,
  iconLeadIconClass = "ph ph-arrow-up-right",
  iconTailIcon = false,
  buttonText = "Get started",

  buttonLink = {
    href: "#",
  },

  variant = "Primary",
  iconRightIconSlot,
}) {
  const _styleVariantMap = {
    Primary: "",
    Secondary: "w-variant-38771eac-3914-da95-803c-c9dc9893617f",
    Outlined: "w-variant-0317a013-7a85-74c2-8e26-c02dc917c9f4",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "button", _activeStyleVariant)}
      button={false}
      block="inline"
      options={buttonLink}
    >
      {iconLeadIcon ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "btn_icon-wrap", _activeStyleVariant)}
          tag="div"
        >
          <Icon iconClass={iconLeadIconClass} />
        </_Builtin.Block>
      ) : null}
      <_Builtin.Block tag="div">{buttonText}</_Builtin.Block>
      {iconLeadIcon ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "btn_icon-wrap", _activeStyleVariant)}
          tag="div"
        >
          <Icon iconClass={iconLeadIconClass} />
        </_Builtin.Block>
      ) : null}
      {iconTailIcon ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "btn_icon-wrap", _activeStyleVariant)}
          tag="div"
        >
          <_Builtin.DOM
            className={_utils.cx(_styles, "icon-color", _activeStyleVariant)}
            tag="div"
            slot=""
            id=""
            style=""
            _class=""
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "icon", _activeStyleVariant)}
              tag="div"
            >
              {iconRightIconSlot}
            </_Builtin.Block>
          </_Builtin.DOM>
          <_Builtin.Block tag="div" />
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
