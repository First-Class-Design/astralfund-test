"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Icon } from "./Icon";
import * as _utils from "./utils";
import _styles from "./Button.module.css";
import { HugeiconsIcon } from '@hugeicons/react';

export function Button({
  as: _Component = _Builtin.Link,
  text = "Get started",
  tailIcon = false,
  leadIcon = false,
  iconLeadIconClass = "ph ph-arrow-up-right",
  iconTailIconClass = "ph ph-arrow-up-right",
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    Secondary: "w-variant-099de269-1e2b-093c-e988-92032c30d6a6",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "button", _activeStyleVariant)}
      button={false}
      block="inline"
      options={{
        href: "#",
      }}
    >
      {leadIcon ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "btn_icon-wrap", _activeStyleVariant)}
          tag="div"
        >
          <HugeiconsIcon icon={iconLeadIconClass} />
        </_Builtin.Block>
      ) : null}
      <_Builtin.Block tag="div">{text}</_Builtin.Block>
      {tailIcon ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "btn_icon-wrap", _activeStyleVariant)}
          tag="div"
        >
          <HugeiconsIcon icon={iconTailIconClass} />
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
